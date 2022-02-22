import * as yup from 'yup';

const email = yup.string().email().max(50);
const password = yup.string().min(8).max(40);
const username = yup.string().min(3).max(40);
const post = yup.string().min(1).max(250);

export const loginSchema = yup.object().shape({
  email,
  password,
});

export const signupSchema = yup.object().shape({
  email,
  password,
  username,
});

export const createPostSchema = yup.object().shape({
  body: post,
});

export const createCommentSchema = yup.object().shape({
  comment: post,
});
