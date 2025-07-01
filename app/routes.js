import { index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    route("about", "routes/about.jsx"),
    route("chat", "routes/chat.jsx")
];
