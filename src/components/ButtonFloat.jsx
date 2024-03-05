function ButtonFloat({ urlImage, altImage }) {
  return (
    <button className="flex justify-center items-center bg-secondary h-16 w-16 shadow-xl rounded-[100%] text-secondary">
      <img className="w-1/2" src={urlImage} alt={altImage} />
    </button>
  );
}

export default ButtonFloat;
