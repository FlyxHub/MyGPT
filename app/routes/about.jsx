import { About } from "../about/about";

export function meta() {
  return [
    { title: "MyGPT - About" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <About />;
}
