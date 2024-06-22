import { Route, createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import ServicePage from "../pages/ServicePage";
interface Route {
  path: string;
  name: string;
  element: JSX.Element;
}

export const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    element: <HomePage />,
  },
  {
    path: "/services",
    name: "services",
    element: <ServicePage />,
  },
  {
    path: "/projects",
    name: "project",
    element: <ProjectPage />,
  },
  {
    path: "/about",
    name: "about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    name: "contact",
    element: <ContactPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);
