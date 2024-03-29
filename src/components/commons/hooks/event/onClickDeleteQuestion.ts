import { IPrev } from "../../../market/itemQuestion/questionWrite/question.types";
import { useMutationDeleteUsedItemQuestion } from "../customs/mutations/useMutationDeleteUsedItemQuestion";

export const onClickDeleteQuestion = () => {
  const [deleteUseditemQuestion] = useMutationDeleteUsedItemQuestion();

  const onClickDelete = (id: string) => async (): Promise<void> => {
    await deleteUseditemQuestion({
      variables: {
        useditemQuestionId: id,
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchUseditemQuestions: (prev: IPrev[], { readField }) => {
              const deletedId = data?.deleteUseditemQuestion;
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
