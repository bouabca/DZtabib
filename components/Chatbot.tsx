// pages/index.tsx

import { useState, FormEvent } from 'react';


console.log(process.env.GOOGLE_API_KEY)

export default function Home() {
  // Define types for the state variables
  const [prompt, setPrompt] = useState<string>(''); // 'prompt' is a string
  const [response, setResponse] = useState<string>(''); // 'response' is a string
  const [conversation, setConversation] = useState<string[]>([]); // conversation history

  // Handle form submission with type for the event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Add the user message to the conversation
    setConversation((prevConversation) => [...prevConversation, `User: ${prompt}`]);

    // Make the POST request to the API route
    const res = await fetch('/pages/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, conversation }),
    });

    const data = await res.json();
    
    // Check for the presence of 'text' and update the response accordingly
    if (data.text) {
      setResponse(data.text);
      setConversation(data.conversation); // Update conversation with AI's response
    } else {
      setResponse('Error: ' + data.error);
    }

    // Clear the prompt input field after submission
    setPrompt('');
  };

  return (
    <div className="chat-container">
      <h1>AI Chatbot</h1>
      
      <div className="chat-box">
        {conversation.map((msg, index) => (
          <div
            key={index}
            className={msg.startsWith("User") ? "user-message" : "ai-message"}
          >
            {msg}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask me anything..."
          required
        />
        <button type="submit">Send</button>
      </form>

      {response && (
        <div className="response">
          <h2>AI Response:</h2>
          <p>{response}</p>
        </div>
      )}
      
      <style jsx>{`
        .chat-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          height: 80vh;
        }

        .chat-box {
          flex-grow: 1;
          overflow-y: auto;
          margin-bottom: 20px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #f9f9f9;
          max-height: 500px;
        }

        .user-message {
          text-align: right;
          background-color: #d3f8d3;
          padding: 8px;
          border-radius: 8px;
          margin: 5px;
        }

        .ai-message {
          text-align: left;
          background-color: #e2e2e2;
          padding: 8px;
          border-radius: 8px;
          margin: 5px;
        }

        form {
          display: flex;
          gap: 10px;
        }

        input {
          flex-grow: 1;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        button {
          background-color: #4CAF50;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        button:hover {
          background-color: #45a049;
        }

        .response {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
