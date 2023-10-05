const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const { Configuration, OpenAIApi,OpenAI } = require("openai");

// const config = new Configuration({
//   apiKey: "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",
// });

// const config = new Configuration({
//     apiKey: "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",
// });

const openai = new OpenAI({
     apiKey: "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",
});

 // const openai = new OpenAIApi(config);

// const openai = new OpenAIApi({
//     api_key: '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'
//   });

// Setup server

const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGPT

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.completions.create({
    model: "text-davinci-003",
    max_tokens: 30,
    // temperature: 0,
    prompt: prompt,
  });
  console.log(completion.choices[0].text);

  res.send(completion.choices[0].text);
});

const PORT = 8020;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
