import InfiniteScroll from "react-infinite-scroller";
import { IUseditemQuestionAnswer } from "../../../../commons/types/generated/types";
import { useQueryFetchUsedItemQuestionAnswers } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItemQuestionAnswers";
import { IPropsAnswerList } from "../answerWrite/answer.types";
import AnswerListItem from "./answerListItem";

export default function AnswerList(props: IPropsAnswerList): JSX.Element {
  const { data, onLoadMore } = useQueryFetchUsedItemQuestionAnswers(
    props.elQuestion
  );
  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchUseditemQuestionAnswers.map(
          (el: IUseditemQuestionAnswer) => (
            <div key={el._id}>
              <AnswerListItem elAnswer={el} />
            </div>
          )
        ) ?? <></>}
      </InfiniteScroll>
    </div>
  );
}
