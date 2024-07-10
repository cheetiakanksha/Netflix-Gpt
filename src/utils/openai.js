import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';
if (!OPENAI_KEY) {
  console.error("OPENAI_KEY is not defined. Please set REACT_APP_OPENAI_KEY in your environment variables.");
  // Optionally, throw an error or handle this situation appropriately
  throw new Error("OPENAI_KEY is missing or empty");
}
const openai = new OpenAI({
  apiKey: OPENAI_KEY,dangerouslyAllowBrowser: true
});
export default openai;