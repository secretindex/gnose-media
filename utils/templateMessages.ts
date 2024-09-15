export type MessageType = {
  user: string;
  profileImage: string;
  message: string;
};

const templateMessages: Array<MessageType> = [
  {
    user: "GabrielHG_games",
    profileImage:
      "https://i.pinimg.com/564x/e1/5e/e2/e15ee2515c4eafe7bdc05fa598cebf08.jpg",
    message: "sou o melhor do HG",
  },
  {
    user: "Rodriguinho_PvP",
    profileImage:
      "https://i.pinimg.com/564x/df/ba/e8/dfbae831c1051d638644f339a7a25749.jpg",
    message: "sou o melhor do PvP",
  },
  {
    user: "huguinho_do_skyblock",
    profileImage:
      "https://i.pinimg.com/736x/48/ef/4b/48ef4b5871be1f86d9b2539d5414de03.jpg",
    message: "sou o melhor do skyblock",
  },
];

export default templateMessages;
