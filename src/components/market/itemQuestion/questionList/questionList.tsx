import InfiniteScroll from "react-infinite-scroller";
import { IUseditemQuestion } from "../../../../commons/types/generated/types";
import { useQueryFetchUsedItemQuestions } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItemQuestions";
import QuestionListItem from "./questionListItem";
import * as S from "./questionList.styles";

export default function QuestionList(): JSX.Element {
  const { data, onLoadMore } = useQueryFetchUsedItemQuestions();
  return (
    <S.CommentList>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchUseditemQuestions.map((el: IUseditemQuestion) => (
          <div key={el._id}>
            <QuestionListItem el={el} />
          </div>
        )) ?? <></>}
      </InfiniteScroll>
    </S.CommentList>
  );
}
