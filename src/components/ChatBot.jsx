import useChat from "../hooks/useChat";
import ButtonFloat from "./ButtonFloat.jsx";
import Chat from "./Chat.jsx";

import LogoImage from "../assets/logo.png";

function ChatBot() {
  const {
    messages,
    prompUser,
    handdleForm,
    handlePrompUser,
    openedChat,
    handleChat,
  } = useChat();

  return (
    <div className="flex flex-col gap-3 w-full items-end fixed bottom-10 px-10">
      <Chat
        messages={messages}
        prompUser={prompUser}
        handdleForm={handdleForm}
        handlePrompUser={handlePrompUser}
        openedChat={openedChat}
        handleChat={handleChat}
      />
      <ButtonFloat urlImage={LogoImage} AltImage={"Logo Hotel MIO."} handleChat={handleChat} />
    </div>
  );
}

export default ChatBot;
