import useChat from "../hooks/useChat";

function ButtonFloat({ urlImage, altImage, handleChat }) {

  return (
    <button onClick={handleChat} className="flex relative justify-center items-center bg-secondary h-16 w-16 shadow-xl rounded-[100%] text-secondary">
      <span className="animate-ping bg-primary h-16 w-16 rounded-[100%] absolute -z-10"></span>
      <img className="w-1/2" src={urlImage} alt={altImage} />
    </button>
  );
}

export default ButtonFloat;
