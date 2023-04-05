import { config } from "dotenv";
config();

import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

openai
  .createChatCompletion({
    model: "gpt-3.5-turbo",
    message: [{ role: "user", content: "Hello" }],
  })
  .then((res) => {
    return res;
  });
