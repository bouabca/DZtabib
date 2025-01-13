// app/api/generate/route.ts

import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';





// Define the request payload type
interface GenerateRequest {
  prompt: string;
  conversation: string[];  // Keep track of the conversation history
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

    // Generate the content using the provided prompt and conversation context
    const result = await model.generateContent(updatedConversation.join("\n"));
    
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
