import express from "express";
import usersRoutes from "./usersRoutes.js";
import accountsRouter from "./accountsRoutes.js";
import projectsRoutes from "./projectsRoutes.js";
import commentsRoutes from "./commentsRoutes.js";

const routes = (app) => {
  app
    .route("/")
    .get((req, res) => res.status(200).send("Bem vindo à To do list API!"));

  app.use(
    express.json(),
    accountsRouter,
    usersRoutes,
    projectsRoutes,
    commentsRoutes
  );
};

export default routes;
