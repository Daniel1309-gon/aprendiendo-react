import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    username: "d_a_n_o_13",
    name: "Daniel Alejandro",
    isFollowing: true,
  },
  {
    username: "raphaelvarane",
    name: "Raphael Varane",
    isFollowing: false,
  },
  {
    username: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: true,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ username, name, isFollowing }) => (
        <TwitterFollowCard
          key={username}
          username={username}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
