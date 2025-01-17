import { useState, useEffect, useRef, FormEvent } from 'react';

export default function Chatbot() {
  const [prompt, setPrompt] = useState<string>(''); 
  const [conversation, setConversation] = useState<string[]>([]); 
  const [loading, setLoading] = useState<boolean>(false);

  const chatContainerRef = useRef<HTMLDivElement>(null); // Reference to the chat container

  // Scroll to the bottom when the conversation updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [conversation]);

  const handleTypingEffect = (fullResponse: string) => {
    let currentText = '';
    const typingSpeed = 20; // Adjust typing speed (ms per character)

    const interval = setInterval(() => {
      if (currentText.length < fullResponse.length) {
        currentText += fullResponse[currentText.length];
        setConversation((prevConversation) => {
          const updatedConversation = [...prevConversation];
          updatedConversation[updatedConversation.length - 1] = `AI: ${currentText}`;
          return updatedConversation;
        });
      } else {
        clearInterval(interval);
        setLoading(false); // Typing complete
      }
    }, typingSpeed);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setConversation((prevConversation) => [
      ...prevConversation,
      `User: ${prompt}`,
      'AI: ...' // Placeholder for typing animation
    ]);
    setLoading(true);

    const res = await fetch('/pages/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, conversation }),
    });

    const data = await res.json();

    if (data.text) {
      handleTypingEffect(data.text); // Trigger typing effect
    } else {
      setConversation((prevConversation) => [
        ...prevConversation,
        `AI: Error: ${data.error}`,
      ]);
      setLoading(false);
    }

    setPrompt('');
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 bg-gray-100 ">
      <h1 className="text-3xl font-bold text-center mb-6">AI Chatbot</h1>

      <div className="w-full max-w-full flex flex-col gap-4">
        <div
          ref={chatContainerRef} // Attach the ref to the chat container
          className="flex-grow w-[700px] mx-auto overflow-y-auto h-[75vh] p-4"
        >
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`p-3 mb-2 rounded-md text-[17px] font-medium  ${
                loading && conversation.length - 1 === index
                  ? 'animate-pulse ellipsis'
                  : ''
              }   ${
                msg.startsWith('User')
                  ? 'bg-blue-100 bg-opacity-20 text-blue-900 text-right self-end'
                  : 'bg-gray-200 text-gray-900 bg-opacity-40 text-left self-start'
              }`}
            >
              {msg}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex mx-auto w-[700px] items-center gap-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask me anything..."
            required
            className="flex-grow p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 font-semibold rounded-lg shadow-md ${
              loading
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600 focus:ring focus:ring-blue-300'
            }`}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}
