import InfiniteScroll from "react-infinite-scroller";
import { IUseditemQuestionAnswer } from "../../../../commons/types/generated/types";
import { useQueryFetchUsedItemQuestionAnswers } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItemQuestionAnswers";
import { IPropsAnswerList } from "../answerWrite/answer.types";
import AnswerListItem from "./answerListItem";
import { AnswersList } from "./answerList.styles";
export default function AnswerList(props: IPropsAnswerList): JSX.Element {
  const { data, onLoadMore } = useQueryFetchUsedItemQuestionAnswers(
    props.elQuestion
  );
  return (
    <AnswersList>
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
    </AnswersList>
  );
}
