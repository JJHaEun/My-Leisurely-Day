import { Modal } from "antd";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import {
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../commons/types/generated/types";
import { CreateAnswerFrom } from "../../market/itemAnswer/answerWrite/answer.types";
import { useMutationCreateUsedItemQuestionAnswer } from "./customs/mutations/useMutationCreateUsedItemQuestionAnswer";
import { useMutationUpdateQuestionAnswer } from "./customs/mutations/useMutationUpdateUsedItemQuestionAnswer";

export const useOnClickCreateUpdateQuestionAnswer = () => {
  const router = useRouter();
  const [createUseditemQuestionAnswer] =
    useMutationCreateUsedItemQuestionAnswer();
  const [updateUseditemQuestionAnswer] = useMutationUpdateQuestionAnswer();

  const onCreateAnswer =
    (useditemQuestion?: IUseditemQuestion) =>
    (setOpen?: Dispatch<SetStateAction<boolean>>) =>
    async (data: CreateAnswerFrom): Promise<void> => {
      if (typeof useditemQuestion?._id !== "string") {
        Modal.info({ content: "다시시도해주세요" });
        return;
      }
      try {
        await createUseditemQuestionAnswer({
          variables: {
            useditemQuestionId: useditemQuestion._id,
            createUseditemQuestionAnswerInput: {
              contents: data.contents,
            },
          },

          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditemQuestionAnswers: (prev) => {
                  return [data?.createUseditemQuestionAnswer, ...prev];
                },
              },
            });
          },
        });
        setOpen?.(false);
        Modal.success({ content: "답변완료" });
      } catch (error) {
        if (error instanceof Error) {
          Modal.info({ content: "로그인을 먼저 해주세요" });
          void router.push(`/signIn`);
        }
      }
    };

  const onClickEditAnswer =
    (useditemQuestionAnswer?: IUseditemQuestionAnswer) =>
    (setIsEdit?: Dispatch<SetStateAction<boolean>>) =>
    async (data: CreateAnswerFrom): Promise<void> => {
      if (typeof useditemQuestionAnswer?._id !== "string") {
        Modal.info({ content: "다시시도해주세요" });
        return;
      }
      try {
        await updateUseditemQuestionAnswer({
          variables: {
            useditemQuestionAnswerId: useditemQuestionAnswer._id,
            updateUseditemQuestionAnswerInput: {
              contents: data.contents,
            },
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditemQuestionAnswers: (prev) => {
                  return [data?.updateUseditemQuestionAnswer, ...prev];
                },
              },
            });
          },
        });
        Modal.success({ content: "수정완료!!" });
        setIsEdit?.(false);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    };

  return {
    onCreateAnswer,
    onClickEditAnswer,
  };
};
