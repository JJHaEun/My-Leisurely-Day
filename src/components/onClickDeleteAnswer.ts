import { useMutationDeleteUsedItemQuestionAnswer } from "./commons/hooks/customs/mutations/useMutationDeleteUsedItemQuestionAnswer";
import { IPrev } from "./market/itemQuestion/questionWrite/question.types";

export const onClickDeleteAnswer = () => {
  const [deleteUseditemQuestionAnswer] =
    useMutationDeleteUsedItemQuestionAnswer();
  const onClickDelete = (id: string) => async (): Promise<void> => {
    await deleteUseditemQuestionAnswer({
      variables: {
        useditemQuestionAnswerId: id,
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchUseditemQuestionAnswers: (prev: IPrev[], { readField }) => {
              const deletedId = data?.deleteUseditemQuestionAnswer;
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  return {
    onClickDelete,
  };
};
