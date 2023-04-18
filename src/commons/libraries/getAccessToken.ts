import { gql, GraphQLClient } from "graphql-request";
import { IMutation } from "../types/generated/types";
// import { useRouter } from "next/router";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async (): Promise<string | undefined> => {
  // const router = useRouter();

  try {
    const graphQLClient = new GraphQLClient(
      "https://backend11.codebootcamp.co.kr/graphql09",
      // "https://backend-practice.codebootcamp.co.kr/graphql"
      { credentials: "include" }
    );
    const result = await graphQLClient.request<
      Pick<IMutation, "restoreAccessToken">
    >(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
