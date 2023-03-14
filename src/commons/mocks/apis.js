import { graphql } from "msw";

const gql = graphql.link("http://mock.com/graphql");

export const apis = [
  gql.mutation("createUseditem", (req, res, ctx) => {
    const { name, remarks, contents, price } =
      req.variables.createUseditemInput; // 이것에 대해 요청을 한다
    return res(
      // 응답을 받는다
      ctx.data({
        // 이렇게 처리할것이다
        createUseditem: {
          _id: "ccc",
          name,
          remarks,
          contents,
          price,
          __typename: "Useditem",
        },
      })
    );
  }),
  gql.mutation("updateUseditem", (req, res, ctx) => {
    const { name, remarks, contents, price } =
      req.variables.updateUseditemInput;
    return res(
      ctx.data({
        updateUseditem: {
          _id: "uuu",
          name,
          remarks,
          price,
          contents,
          __typename: "Useditem",
        },
      })
    );
  }),
  gql.mutation("createUser", (req, res, ctx) => {
    const { email, name, password } = req.variables.createUserInput;
    return res(
      ctx.data({
        createUser: {
          _id: "crcr",
          email,
          name,
          __typename: "User",
        },
      })
    );
  }),
  gql.mutation("loginUser", (req, res, ctx) => {
    const { email, password } = req.variables;
    return res(
      ctx.data({
        loginUser: {
          accessToken,
          __typename: "Token",
        },
      })
    );
  }),
];
