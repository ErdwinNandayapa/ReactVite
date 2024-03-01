import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
export function App() {
  const formatUserName = (userName) => `@${userName}`; //los props puedo pasar tambien funciones
  return (
    <>
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="erdwin"
        name="Erdwin Nandayapa"
      />
      ;
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="horacio"
        name="Sensei Horacio"
      />
      ;
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="sara"
        name="QA sara"
      />
      ;
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="Mike"
        name="Mike Nieva"
      />
      ;
    </>
  );
}
