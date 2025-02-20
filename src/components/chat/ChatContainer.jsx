import React, { useState } from "react";
import "../../assets/styles/chatWindow.css";

const ChatContainer = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);

  const handleVoiceInput = () => {
    setIsListening((prev) => !prev);
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages([...messages, userMessage]);
      setInput("");

      // Simulate AI response with "thinking..." animation
      setTimeout(() => {
        const aiThinking = { text: "يفكر...", sender: "ai-thinking" };
        setMessages((prevMessages) => [...prevMessages, aiThinking]);

        setTimeout(() => {
          const aiResponse = {
            text: `مرحبًا! أنا إيموكير. لقد سألت: "${input}"`,
            sender: "ai",
          };
          setMessages((prevMessages) =>
            prevMessages.filter((msg) => msg.sender !== "ai-thinking").concat(aiResponse)
          );
        }, 1500);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <div className="container-content">
        <h1>Emocare Chatbot</h1>

        {messages.length === 0 ? (
          <div className="container-card">
            <div className="one">
              <div className="s-size">
                <i className="bi bi-lightbulb"></i>
                <p>أمثلة</p>
              </div>
              <div className="chat-card">"كيف يمكنني إدارة التوتر بفعالية؟"</div>
              <div className="chat-card">"ما هي بعض استراتيجيات التعامل مع القلق؟"</div>
              <div className="chat-card">"هل يمكنك اقتراح تمارين اليقظة؟"</div>
            </div>

            <div className="one">
              <div className="s-size flex">
                <i className="bi bi-lightning-charge"></i>
                <p>القدرات</p>
              </div>
              <div className="chat-card">يوفر دعم الصحة النفسية والموارد</div>
              <div className="chat-card">يقدم آليات التعامل ونصائح العناية الذاتية</div>
              <div className="chat-card">مدرب على التعامل مع المواضيع الحساسة بعناية</div>
            </div>

            <div className="one">
              <div className="s-size flex">
                <i className="bi bi-exclamation-triangle"></i>
                <p>القيود</p>
              </div>
              <div className="chat-card">ليس بديلاً عن النصيحة الخبيرة</div>
              <div className="chat-card">قد يقدم أحيانًا معلومات عامة</div>
              <div className="chat-card">محدود بالمعرفة والموارد المدربة مسبقًا</div>
            </div>
          </div>
        ) : (
          <div className="messages-box">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.sender === "ai" && <img src="/favicon.ico" alt="AI Avatar" className="ai-avatar" />}
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
        )}

        <div className="sms-container">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="اكتب رسالة..."
            rows="1"
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
          ></textarea>
          <button onClick={handleVoiceInput} className={`voice-button ${isListening ? "active" : ""}`}>
            <i className={`bi ${isListening ? "bi-mic-fill" : "bi-mic"}`}></i>
          </button>
          <button onClick={handleSend} className="send-button">
            <i className="bi bi-send"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
