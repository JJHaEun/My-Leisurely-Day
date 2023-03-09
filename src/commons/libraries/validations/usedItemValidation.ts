import * as yup from "yup";

export const usedItemSchema = yup.object({
  name: yup.string().required("상품명을 입력해주세요"),
  price: yup
    .number()
    .required("상품가격을 숫자로만 입력해주세요 (예시: 10000)")
    .transform((value) => (isNaN(value) ? undefined : value)),
  remarks: yup.string().required("상품 한줄요약을 적어주세요"),
  contents: yup.string().required("상품 상세설명을 적어주세요"),
});
