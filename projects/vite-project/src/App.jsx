import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
export function App() {
  // const formatUserName = (userName) => `@${userName}`; //los props puedo pasar tambien funciones

  return (
    <>
      <TwitterFollowCard isFollowing userName="erdwin">
        Erdwin Nandayapa
      </TwitterFollowCard>
      ;
      <TwitterFollowCard isFollowing userName="horacio">
        Sensei Horacio
      </TwitterFollowCard>
      ;
      <TwitterFollowCard isFollowing userName="sara">
        QA sara
      </TwitterFollowCard>
      ;
      <TwitterFollowCard isFollowing userName="Mike">
        Mike Nieva
      </TwitterFollowCard>
    </>
  );
}
