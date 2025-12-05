import type { RouteConfig } from "@react-router/dev/routes";
import {
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/sidebar.tsx", [
    index("routes/home.tsx"),
    route("events", "routes/events.tsx"),
    route("events/:id", "routes/events.$id.tsx"),
    route("register/:id", "routes/register.$id.tsx"),
    route("dashboard", "routes/dashboard.tsx"),
    route("tickets", "routes/tickets.tsx"),
    route("results", "routes/results.tsx"),
    route("about", "routes/about.tsx"),
  ]),
] satisfies RouteConfig;
