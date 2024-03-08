import OpenAI from "openai";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
let openai;

if (API_KEY) {
  openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });
}

export const sendPromp = async (prompUser) => {
  if (!API_KEY) {
    return `(Sin Conexion) -> El promp que recibí fue el siguiente: "${prompUser}"`;
  }

  const completions = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Tu eres un chatbot de un hotel llamado 'Hotel Mío' ubicado en Puerto Vallarta, Jalisco, los usuarios te preguntaran cosas hacerca de dicho hotel, asi que responde como un chatbot amable y simpatico.",
      },
      {
        role: "user",
        content: prompUser,
      },
    ],
    model: "gpt-3.5-turbo-0613",
    functions: [
      {
        name: "getInfoAboutHotel",
        description: "Menciona informacion general sobre el hotel Mio.",
      },
      {
        name: "getTypesRooms",
        description:
          "Obtiene la informacion de diferentes habitaciones disponibles en el hotel Mio.",
      },
      {
        name: "greet",
        description: "Saluda al usuario cuando el usuario lo saluda solamente.",
      },
    ],
    function_call: "auto",
  });

  const message = completions.choices[0].message;
  if (message.function_call) {
    const nameFunction = message.function_call.name;

    if (nameFunction === "getInfoAboutHotel") {
      return getInfoAboutHotel();
    }

    if (nameFunction === "getTypesRooms") {
      return getTypesRooms();
    }

    if (nameFunction === "greet") {
      return greet();
    }

    return `Llamando la funcion: ${message.function_call.name}`;
  }

  return "No puedo entender lo que me estas pidiendo, intenta con otra pregunta nuevamente, lo siento 😪";
};

const getInfoAboutHotel = () => {
  return "El Hotel Mio es un lugar excepcional ubicado en Puerto Vallarta, a solo 3 minutos a pie de la Playa de Villa del Mar. Como hotel exclusivo para adultos, ofrecemos habitaciones de 5 estrellas con aire acondicionado, TV de pantalla plana, balcón privado y baño completo con ducha. Además, disfruta de nuestra piscina al aire libre, estacionamiento gratuito, wifi, cafetería y más. 😎";
};

const getTypesRooms = () => {
  return "Las diferentes habitaciones";
};

const greet = () => {
  return "Holaaa!! 👋, Soy Mío, tu asistente virtual, ¿En que puedo ayudarte durante tu estancia o reserva? 😁";
};
