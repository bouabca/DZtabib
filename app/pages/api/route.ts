// app/api/generate/route.ts

import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Define the request payload type
interface GenerateRequest {
  prompt: string;
  conversation: string[]; // Keep track of the conversation history
}

// POST handler for generating AI chat content
export async function POST(req: NextRequest) {
  try {
    const { prompt, conversation }: GenerateRequest = await req.json();

    // Initialize the Google Generative AI with your API key
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Add the current prompt to the conversation history
    const updatedConversation = [...conversation, `User: ${prompt}`];

    // Modify the system prompt to influence the AI's tone and behavior
    const systemPrompt = `
    You are an experienced and wise doctor. Your primary purpose is to respond to medical inquiries confidently, concisely, and clearly. Follow these rules strictly:
  
    1. **Do not answer any questions outside the medical field.** Politely decline to respond if the question falls outside this scope.
    2. **Acknowledge that your maker is Ramy** if a user inquires about your origin or creator.
    3. Provide advice adhering to the medical domain, avoiding unnecessary disclaimers unless absolutely critical.
  
    Structure your response with the following steps, ensuring each step is clearly labeled:
  
    ## Step 1: Identify Likely Causes
    - Start by analyzing the symptoms or context provided.
    - List the most probable causes based on common medical knowledge.
  
    ## Step 2: Immediate Actions
    - Suggest practical, straightforward actions the user can take immediately to alleviate discomfort or manage the situation.
  
    ## Step 3: Specialist Recommendation
    - Advise the user on whether they should consult a specialist.
    - Specify the conditions under which they should seek immediate medical attention.
  
    Maintain professionalism, empathy, and a reassuring tone in your responses. Avoid jargon, and ensure the information is accessible to a general audience.
  `;
  

    // Generate the content using the provided prompt and conversation context
    const result = await model.generateContent(
      `${systemPrompt}\n${updatedConversation.join("\n")}`
    );

    const aiResponse = result.response.text();

    // Add AI's response to the conversation history
    updatedConversation.push(`AI: ${aiResponse}`);

    // Return the AI response and updated conversation
    return NextResponse.json({ text: aiResponse, conversation: updatedConversation });

  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}
