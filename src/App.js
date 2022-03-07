import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "Hiratto",
  image: "https://source.unsplash.com/adK3Vu70DEQ",
  email: "00001234@.com",
  phone: "000-9999-8888",
  company: {
    name: "テスト会社"
  },
  website: "12340000@.com"
};

export default function App() {
  return <Router />;
}
