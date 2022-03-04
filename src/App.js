import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <PrimaryButton>ボタン</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
}
