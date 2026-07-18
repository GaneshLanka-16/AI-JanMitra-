import { useState, useRef, useEffect } from "react";
import { askGemini } from "../services/gemini";
import Navbar from "../components/Navbar";
import {
  Bot,
  User,
  Send,
  Sparkles,
  LoaderCircle,
  Copy,
} from "lucide-react";

export default function Chat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text:
        "👋 Hello! I'm AI Janmitra.\n\nI can help you:\n\n• Find Government Schemes\n• Check Eligibility\n• Explain Benefits\n• List Required Documents\n• Guide you through the Application Process\n\nHow can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!question.trim()) return;

    const userQuestion = question;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userQuestion,
      },
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const answer = await askGemini(userQuestion);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: answer,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text:
            "❌ Sorry, I couldn't connect to Gemini AI. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  const suggestions = [
    "PM Kisan Scheme",
    "Scholarships for Students",
    "Ayushman Bharat",
    "Schemes for Women",
    "Schemes for Farmers",
    "Start-up India",
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 pt-28 pb-12">

        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}

          <div className="text-center mb-8">

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full">

              <Sparkles size={18} />

              Gemini Powered AI Assistant

            </div>

            <h1 className="text-5xl font-black mt-5">

              AI Janmitra Assistant

            </h1>

            <p className="text-gray-600 mt-4 text-lg">

              Ask anything about Government Schemes, Eligibility,
              Benefits and Application Process.

            </p>

          </div>

          {/* Suggestions */}

          <div className="flex flex-wrap justify-center gap-3 mb-8">

            {suggestions.map((item) => (

              <button
                key={item}
                onClick={() => setQuestion(item)}
                className="bg-white px-5 py-3 rounded-full shadow hover:bg-blue-600 hover:text-white transition"
              >
                {item}
              </button>

            ))}

          </div>

          {/* Chat */}

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

            {/* Top */}

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 flex items-center gap-3">

              <Bot size={30} />

              <div>

                <h2 className="text-xl font-bold">

                  AI Janmitra

                </h2>

                <p className="text-blue-100">

                  Powered by Google Gemini

                </p>

              </div>

            </div>

            {/* Messages */}

            <div className="h-[550px] overflow-y-auto p-6 bg-slate-50">

              {messages.map((msg, index) => (

                <div
                  key={index}
                  className={`flex mb-5 ${
                    msg.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`max-w-[80%] rounded-3xl p-5 ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-white shadow-md"
                    }`}
                  >

                    <div className="flex gap-3">

                      {msg.sender === "ai" ? (
                        <Bot
                          className="text-blue-600 mt-1"
                          size={22}
                        />
                      ) : (
                        <User
                          className="mt-1"
                          size={22}
                        />
                      )}

                      <div>

                        <p className="whitespace-pre-line">

                          {msg.text}

                        </p>

                        {msg.sender === "ai" && (

                          <button
                            onClick={() =>
                              navigator.clipboard.writeText(msg.text)
                            }
                            className="flex items-center gap-2 text-blue-600 mt-3 hover:text-blue-800"
                          >

                            <Copy size={16} />

                            Copy

                          </button>

                        )}

                      </div>

                    </div>

                  </div>

                </div>

              ))}

              {loading && (

                <div className="flex items-center gap-3">

                  <LoaderCircle
                    className="animate-spin text-blue-600"
                    size={28}
                  />

                  <span className="font-medium">

                    Gemini AI is thinking...

                  </span>

                </div>

              )}

              <div ref={bottomRef}></div>

            </div>

            {/* Input */}

            <div className="border-t p-5 flex gap-4">

              <input
                type="text"
                value={question}
                onChange={(e) =>
                  setQuestion(e.target.value)
                }
                placeholder="Ask about any Government Scheme..."
                className="flex-1 border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 rounded-2xl hover:scale-105 transition disabled:opacity-50"
              >

                <Send />

              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}