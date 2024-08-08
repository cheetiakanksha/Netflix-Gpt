
import OpenAI from 'openai';

export const initializeOpenAI = (apiKey) => {
  if (!apiKey) {
    console.error("API key is not provided");
    return null;
  }
  return new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true
  });
};
