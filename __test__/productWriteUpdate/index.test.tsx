import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock"; // router대신 사용할 것
import { render } from "react-dom";

jest.mock("next/router", () => require("next-router-mock"));

describe("잘 등록되는지 테스트", () => {
  it("상품등록 테스트", async () => {
    const client = new ApolloClient({
      link: new HttpLink({
        uri: "http://mock.com/graphql",
        fetch,
      }),
      cache: new InMemoryCache(),
    });
    render(
      <ApolloProvider client={client}>
        {/*  */}
        <div></div>
      </ApolloProvider>
    );
  });
});
