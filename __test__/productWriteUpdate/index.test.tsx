import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock"; // router대신 사용할 것
import ProductPage from "../../pages/market/new";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CreateEditMarket from "../../src/components/market/write/createEditUsedItem";
import { RecoilRoot } from "recoil";

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
      <RecoilRoot>
        <ApolloProvider client={client}>
          {/*  */}
          <ProductPage />
        </ApolloProvider>{" "}
      </RecoilRoot>
    );
    fireEvent.change(screen.getByRole("name-input"), {
      target: { value: "키보드판매" },
    });
    fireEvent.change(screen.getByRole("remarks-input"), {
      target: { value: "키보드 test판매" },
    });
    fireEvent.change(screen.getByRole("contents-input"), {
      target: { value: "키보드 test판매중입니다" },
    });
    fireEvent.change(screen.getByRole("price-input"), {
      target: { value: 123 },
    });
    fireEvent.click(screen.getByRole("submit-button"));

    await waitFor(() => {
      expect(mockRouter.asPath).toEqual(`/market/ccc`);
    });
  });
});
