export default function Message({ typeUser, children }) {
  const backgroundUser = "bg-primary";
  const backgroundBot = "bg-[#cccc]";

  const textColorUser = "text-secondary";
  const textColorBot = "text-[#000000]";

  return (
    <div
      className={`flex select-none  ${
        typeUser === "bot" ? "justify-start" :  "justify-end"
      }`}
    >
      <p
        className={`flex ${
          typeUser === "bot" ? backgroundBot : backgroundUser
        } py-2 px-2 rounded-md opacity-80 text-wrap ${
          typeUser === "bot" ? textColorBot : textColorUser
        }`}
      >
        {children}
      </p>
    </div>
  );
}
