export default function Message({ typeUser, children }) {
  const backgroundBot = "bg-primary";
  const backgroundUser = "bg-[#cccc]";

  const textColorBot = "text-secondary";
  const textColorUser = "text-[#000000]";

  return (
    <div
      className={`flex select-none  ${
        typeUser === "bot" ? "justify-end" : "justify-start"
      }`}
    >
      <p
        className={`flex ${
          typeUser === "bot" ? backgroundBot : backgroundUser
        } py-2 px-2 rounded-md opacity-80 ${
          typeUser === "bot" ? textColorBot : textColorUser
        }`}
      >
        {children}
      </p>
    </div>
  );
}
