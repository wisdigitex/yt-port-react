import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaYoutube,
  FaWhatsapp,
  FaDiscord,
  FaTwitter,
} from "react-icons/fa6";
import {
  ChatApp,
  CodePenClone,
  FreshJuiceUI,
  ImageSharing,
  OpenAI,
  BoogaGame,
  PortfolioFirebase,
  RestaurantClone,
  SocialMedia,
} from "../assets";

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uri: "https://www.facebook.com/Devmegatech",
    color: "#1877F2",
  },
  {
    id: `Twitter-${Date.now()}`,
    Icon: FaTwitter,
    uri: "https://twitter.com/wisdigit",
    color: "#0072b1",
  },
  {
    id: `discord-${Date.now()}`,
    Icon: FaDiscord,
    uri: "https://discord.gg/CRwrdETT",
    color: "#fff",
  },
  {
    id: `Whatsapp-${Date.now()}`,
    Icon: FaWhatsapp,
    uri: "https://wa.me/message/FQ53HO3DD2B6M1",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `food-${Date.now()}`,
    name: "Hospital Tycoon",
    imgSrc: RestaurantClone,
    gitURL: "https://github.com/wisdigitex",
  },
  {
    id: `codepen-${Date.now()}`,
    name: "Milk Tycoon",
    imgSrc: CodePenClone,
    gitURL: "https://github.com/wisdigitex",
  },
  {
    id: `openai-${Date.now()}`,
    name: "Shooting Game",
    imgSrc: OpenAI,
    gitURL: "https://github.com/wisdigitex",
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "Education Child Game",
    imgSrc: ChatApp,
    gitURL: "https://github.com/wisdigitex",
  },
  {
    id: `imageSharing-${Date.now()}`,
    name: "Cooming Soon Project",
    imgSrc: ImageSharing,
    gitURL: "https://github.com/wisdigitex",
  },
  {
    id: `BoogaGame-${Date.now()}`,
    name: "Booga Booga Game",
    imgSrc: BoogaGame,
    gitURL: "https://github.com/wisdigitex",
  },
  {
    id: `freshjuiceui-${Date.now()}`,
    name: "Fresh Juice UI Build",
    imgSrc: FreshJuiceUI,
    gitURL: "https://github.com/wisdigitex",
  },
  {
    id: `socialmedia-${Date.now()}`,
    name: "Social Media App",
    imgSrc: SocialMedia,
    gitURL: "https://github.com/wisdigitex",
  },
  {
    id: `portfoliofirebase-${Date.now()}`,
    name: "Portfolio UI Fireabse",
    imgSrc: PortfolioFirebase,
    gitURL: "https://github.com/wisdigitex",
  },
];
