import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const GLOBAL_STATE = new InMemoryCache();

interface IPropsApolloSettings {
  children: JSX.Element;
}

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
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              console.log(newAccessToken);

              setAccessToken(newAccessToken ?? "");

              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                  Authorization: `Bearer ${newAccessToken ?? ""}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
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
  // prettier-ignore
  return (
    <>
      <ApolloProvider client={client}>
        {props.children}
      </ApolloProvider>
    </>
  );
}
