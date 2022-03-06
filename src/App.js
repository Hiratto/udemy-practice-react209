import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/userCard";
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
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <PrimaryButton>ボタン</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <br />
      <UserCard user={user} />
    </div>
  );
}
