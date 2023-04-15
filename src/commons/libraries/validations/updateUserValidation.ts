import * as yup from "yup";

export const schemaUpdateUser = yup.object({
  name: yup.string(),
  picture: yup.string(),
});
