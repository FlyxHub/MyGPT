import { Chat } from "../chat/chat";

export function meta() {
  return [
    { title: "MyGPT - Chat" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Chat />;
}
