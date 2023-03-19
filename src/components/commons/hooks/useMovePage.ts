import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/stores";
interface IUseMovePage {
  onClickMoveTo: (path: string) => () => void;
  visitedPage: string;
}

export const useMovePage = (): IUseMovePage => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState); // 방문한 페이지 기록

  const onClickMoveTo = (path: string) => () => {
    void router.push(path);
    setVisitedPage(path); // 방문한 페이지들 글로벌스테이트에 저장해 어디서든 뽑아올 수 있게함.
  };
  return {
    onClickMoveTo,
    visitedPage,
  };
};
