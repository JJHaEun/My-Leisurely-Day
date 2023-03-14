import { server } from "./src/commons/mocks";
// api 모두 시작전에

beforeAll(() => {
  server.listen();
});
// 모두 끝나고나면
afterAll(() => {
  server.close();
});
