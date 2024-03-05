import useChat from "../hooks/useChat";
import { ExitIcon, SendIcon } from "./Icons";
import Message from "./Message";

function Chat() {
  const [messages, prompUser, handdleForm, handlePrompUser] = useChat();

  return (
    <aside
      role="dialog"
      className="w-full flex flex-col h-[480px] md:w-[50%] lg:w-[30%] rounded-xl shadow-xl"
    >
      <header className="flex justify-between bg-primary text-secondary p-2 rounded-xl">
        <p className="font-bold ml-2">CHATBOT 🤖</p>
        <button>
          <ExitIcon />
        </button>
      </header>

      <section className="flex flex-col flex-grow overflow-y-auto py-5 px-4 gap-3">
        {messages.map((message, index) => {
          return (
            <Message key={index} typeUser={message.typeUser}>
              {message.message}
            </Message>
          );
        })}

      </section>

      <footer className="bg-[#fafafa] rounded-xl px-3" onSubmit={handdleForm}>
        <form className="flex">
          <textarea
            onKeyDown={(e) => {if(e.keyCode == 13 && e.shiftKey == false) handdleForm(e)}}
            spellCheck="false"
            className="w-full pt-3 bg-[#fafafa] outline-none resize-none"
            onChange={handlePrompUser}
            value={prompUser}
          ></textarea>
          <button className="text-primary">
            <SendIcon />
          </button>
        </form>
      </footer>
    </aside>
  );
}

export default Chat;
