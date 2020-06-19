import * as Yup from "yup";

// 64 for local part and 18 for @mail.csuchico.edu
const emailSchema = Yup.string()
      .trim()
      .max(82)
      .lowercase()
      .email()
      .matches(/^[a-zA-Z0-9._%+-]+@mail.csuchico.edu$/, "Chico State @mail.csuchico.edu email required.")
      .required();

const sectionSchema = Yup.number()
      .positive()
      .integer()
      .required("Specify section as a number, an integer n, such that n > 0.");

// Assuming 2 sentences,
// 25 words per sentence, 5 characters per word,
// one 24 spaces in a 25 words sentence, and
// 5 character buffer per sentence
const maxLength = 2 * (25 * 5 + 24 + 5);
const shortanswerSchema = Yup.string()
      .trim()
      .max(maxLength, "No need for an answer this long.  Aim for less than " + maxLength + " characters.");

export {emailSchema, sectionSchema, shortanswerSchema};
