import { TwiterFollowCard } from "./TwiterFollowCard.jsx";

const users = [
  {
    username: "midudev",
    name: " Miguel Angel Duran.",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H.",
    isFollowing: false,
  },
  {
    userName: "elonMusk",
    name: "ElonMusk",
    isFollowing: true,
  },
];
export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwiterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwiterFollowCard>
        );
      })}
    </section>
  );
}
