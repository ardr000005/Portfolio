'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

/**
 * @fileOverview An AI chatbot that provides contextual responses about Aravind.
 *
 * - contextualChatbot - A function that handles the chatbot interaction.
 * - ContextualChatbotInput - The input type for the contextualChatbot function.
 * - ContextualChatbotOutput - The return type for the contextualChatbot function.
 */

const ContextualChatbotInputSchema = z.object({
  query: z.string().describe('The user query or message for the chatbot.'),
});
export type ContextualChatbotInput = z.infer<typeof ContextualChatbotInputSchema>;

const ContextualChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
});
export type ContextualChatbotOutput = z.infer<typeof ContextualChatbotOutputSchema>;

export async function contextualChatbot(input: ContextualChatbotInput): Promise<ContextualChatbotOutput> {
  return contextualChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contextualChatbotPrompt',
  input: {schema: ContextualChatbotInputSchema},
  output: {schema: ContextualChatbotOutputSchema},
  prompt: `You are a helpful and friendly chatbot assistant for Aravind R Nair. Your goal is to answer questions about him based on the resume information provided below.

  **Resume of Aravind R Nair**

  **Summary:**
  Aravind is a B.Tech Computer Science student at Amal Jyothi College of Engineering. He is a passionate developer and innovator with experience as a Blockchain Intern at Kerala Blockchain Academy.

  **Technical Skills:**
  - Programming Languages: Javascript, Python, C, Java, Solidity
  - Web Technologies: React, Node.js, Express.js, Django, Flask
  - Blockchain: Smart Contracts, Web3.js
  - Databases: MongoDB, MySQL, PostgreSQL
  - Tools & Platforms: Git, Firebase, Pinata, Supabase, Vercel
  - Machine Learning: TensorFlow, OpenCV

  **Projects:**
  - **Medamex:** A decentralized medical record system using Blockchain, Node.js, React, Pinata IPFS, and Supabase. It securely stores patient details on IPFS, allowing access via the patient's wallet address for quick and secure retrieval during emergencies.
  - **Privio:** A traffic violation detection system using ML, OpenCV, Node.js, and React. It captures live images, classifies violations like overspeeding, and geotags incidents for accurate reporting and evidence collection.

  **Contact:**
  - Email: arnair126@gmail.com
  - GitHub: https://github.com/ardr000005
  - LinkedIn: https://linkedin.com/in/Aravind-R-Nair-8321482b2

  Please use this information to answer the user's questions in a conversational manner.

  User Query: {{{query}}}
  Chatbot Response:`,
});

const contextualChatbotFlow = ai.defineFlow(
  {
    name: 'contextualChatbotFlow',
    inputSchema: ContextualChatbotInputSchema,
    outputSchema: ContextualChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
