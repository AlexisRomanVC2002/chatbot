import ButtonFloat from "./ButtonFloat.jsx";
import Chat from "./Chat.jsx";

import LogoImage from "../assets/logo.png";

function ChatBot() {
  return (
    <div className="flex flex-col gap-3 w-full items-end fixed bottom-10 px-10">
      <Chat />
      <ButtonFloat urlImage={LogoImage} AltImage={"Logo Hotel MIO."} />
    </div>
  );
}

export default ChatBot;
