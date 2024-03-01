import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
export function App() {
  return (
    <>
      <TwitterFollowCard userName="erdwin" name="Erdwin Nandayapa" />;
      <TwitterFollowCard userName="horacio" name="Sensei Horacio" />;
      <TwitterFollowCard userName="sara" name="QA sara" />;
      <TwitterFollowCard userName="Mike" name="Mike Nieva" />;
    </>
  );
}
