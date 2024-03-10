import express from "express"
import usersRoutes from "./usersRoutes.js"
import accountsRouter from "./accountsRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Bem vindo à To do list API!"))

    app.use(express.json(), accountsRouter, usersRoutes)
}

export default routes