import InfiniteScroll from "react-infinite-scroller";
import { IUseditemQuestion } from "../../../../commons/types/generated/types";
import { useQueryFetchUsedItemQuestions } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItemQuestions";
import QuestionListItem from "./questionListItem";

export default function QuestionList(): JSX.Element {
  const { data, onLoadMore } = useQueryFetchUsedItemQuestions();
  return (
    <div>
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
    </div>
  );
}
