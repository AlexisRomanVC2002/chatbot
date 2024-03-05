import { useState } from "react";
import { sendPromp } from "../services/api-openai";

function useChat() {
  const [messages, setMessages] = useState([
    {
      typeUser: "bot",
      message:
        "Bienvenido al Hotel Mío 🌴. Soy Mío, tu asistente virtual. ¿En qué puedo ayudarte durante tu estancia o reserva?",
    },
  ]);

  const [prompUser, setPrompUser] = useState("");

  const handdleForm = async (e) => {
    e.preventDefault();

    if (prompUser.trim().length === 0) {
      return;
    }

    const userMessage = {
        typeUser: "user",
        message: prompUser
    }

    setMessages( (prevMessages) => [...prevMessages, userMessage] );

    // Clean inputs
    cleanInputs();

    const responseToPromp = await sendPromp(prompUser);

    const botMessage = {
        typeUser: "bot",
        message: responseToPromp,
    }

    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  const handlePrompUser = (e) => {
    setPrompUser(e.target.value);
  };

  const cleanInputs = () => {
    setPrompUser("");
  };

  return [messages, prompUser, handdleForm, handlePrompUser];
}

export default useChat;
