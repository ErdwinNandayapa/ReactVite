import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
export function App() {
  // const formatUserName = (userName) => `@${userName}`; //los props puedo pasar tambien funciones

  const data = [
    {
      userName: "erdwin",
      name: "Erdwin Nandayapa",
      isFollowing: true,
    },
    {
      userName: "horacio",
      name: "Sensei Horacio",
      isFollowing: false,
    },
    {
      userName: "sara",
      name: "Sara Halfonsin",
      isFollowing: true,
    },
    {
      userName: "Mike",
      name: "Mike Nieva",
      isFollowing: false,
    },
  ];

  return (
    <>
      <section className="App">
        {data.map((user) => (
          <TwitterFollowCard
            key={user.userName}
            userName={user.userName}
            initialIsFollowing={user.isFollowing}
          >
            {user.name}
          </TwitterFollowCard>
        ))}
      </section>
    </>
  );
}
