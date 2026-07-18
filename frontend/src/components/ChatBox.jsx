import { useState } from "react";
import { Bot, Send, User } from "lucide-react";
import { askGemini } from "../services/gemini";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I am AI JanMitra. Ask me about Indian Government Schemes.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const question = input;

    setInput("");

    setLoading(true);

    const reply = await askGemini(question);

    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text: reply,
      },
    ]);

    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto">

      <div className="bg-white shadow-2xl rounded-3xl h-[650px] flex flex-col overflow-hidden">

        <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white p-6">

          <h1 className="text-3xl font-bold">
            AI JanMitra Assistant
          </h1>

          <p className="opacity-80">
            Powered by Google Gemini
          </p>

        </div>

        <div className="flex-1 overflow-y-auto bg-slate-100 p-6 space-y-5">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-xl rounded-2xl p-5 shadow ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
              >

                <div className="flex items-center gap-2 mb-3">

                  {msg.sender === "user" ? (
                    <User size={18} />
                  ) : (
                    <Bot size={18} />
                  )}

                  <strong>
                    {msg.sender === "user" ? "You" : "AI"}
                  </strong>

                </div>

                <div className="whitespace-pre-wrap">
                  {msg.text}
                </div>

              </div>

            </div>

          ))}

          {loading && (

            <div className="flex">

              <div className="bg-white rounded-2xl p-5 shadow">

                🤖 Thinking...

              </div>

            </div>

          )}

        </div>

        <div className="border-t p-5 flex gap-3">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Ask about Government Schemes..."
            className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-700 disabled:opacity-50"
          >

            <Send />

          </button>

        </div>

      </div>

    </div>
  );
}