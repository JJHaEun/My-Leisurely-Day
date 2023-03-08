import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { onError } from "@apollo/client/link/error";
import {
  ApolloClient,
  ApolloLink,
  fromPromise,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { createUploadLink } from "apollo-upload-client";

interface IPropsApolloSettings {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSettings(
  props: IPropsApolloSettings
): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const restoreAccess = useRecoilValueLoadable(restoreAccessTokenLoadable);
  useEffect(() => {
    void restoreAccess.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        return fromPromise(
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken ?? "");
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
          })
        ).flatMap(() => forward(operation));
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
  });
  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
