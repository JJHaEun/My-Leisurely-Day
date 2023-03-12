import { Modal } from "antd";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { UseFormReset } from "react-hook-form";
import { IUseditemQuestion } from "../../../commons/types/generated/types";
import { IQuestionForm } from "../../market/itemQuestion/questionWrite/question.types";
import { useMutationCreateUsedItemQuestion } from "./customs/mutations/useMutationCreateUsedItemQuestion";
import { useMutationUpdateUsedItemQuestion } from "./customs/mutations/useMutationUpdateUsedItemQuestion";

export const useOnClickCreateUpdateQuestion = () => {
  const router = useRouter();
  const [createUseditemQuestion] = useMutationCreateUsedItemQuestion();
  const [updateUseditemQuestion] = useMutationUpdateUsedItemQuestion();

  const onCreateQuestion = async (
    data: IQuestionForm,
    reset: UseFormReset<IQuestionForm>
  ): Promise<void> => {
    try {
      const result = await createUseditemQuestion({
        variables: {
          useditemId: String(router.query.productId),
          createUseditemQuestionInput: {
            contents: data.contents,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data?.createUseditemQuestion, ...prev];
              },
            },
          });
        },
      });
      // console.log(result.data?.createUseditemQuestion.contents);
      reset();
    } catch (error) {
      if (error instanceof Error) {
        Modal.info({ content: "로그인을 먼저 해주세요" });
        void router.push(`/market/signIn`);
      }
    }
  };

  const onClickEditFinish =
    (setIsEdit?: Dispatch<SetStateAction<boolean>>) =>
    (el?: IUseditemQuestion) =>
    async (data: IQuestionForm) => {
      if (typeof el?._id === "undefined") {
        Modal.info({ content: "다시시도해주세요" });
        return;
      }
      if (!setIsEdit) return;
      try {
        await updateUseditemQuestion({
          variables: {
            useditemQuestionId: el?._id,
            updateUseditemQuestionInput: {
              contents: data.contents,
            },
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditemQuestions: (prev) => {
                  return [data?.updateUseditemQuestion, ...prev];
                },
              },
            });
          },
        });
        setIsEdit?.(false);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    };

  return {
    onCreateQuestion,
    onClickEditFinish,
  };
};
