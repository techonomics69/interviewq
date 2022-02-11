const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion("text-davinci-001", {
  prompt:
    "Create a list of 10 questions to interview a business development candidate for an ai company\n\n1. What experience do you have in business development? \n2. What led you to pursue a career in business development? \n3. What are the most important skills for a successful business developer? \n4. What are the most common mistakes made in business development? \n5. What are the best practices for pursuing new business opportunities? \n6. What are the most effective ways to build relationships with potential clients? \n7. What are the most effective ways to negotiate deals with potential clients? \n8. What are the most effective ways to close deals with potential clients? \n9. What are the most effective ways to manage client relationships? \n10. What are the most effective ways to",
  temperature: 0.5,
  max_tokens: 150,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0
});
