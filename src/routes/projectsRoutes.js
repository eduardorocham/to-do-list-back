const { Router } = require("express");
const ProjectController = require("../controllers/ProjectController.js");

const projectController = new ProjectController();

const projectsRoutes = Router();

projectsRoutes.get("/projects", (req, res) =>
  projectController.getAll(req, res)
);
projectsRoutes.get("/projects/:id", (req, res) =>
  projectController.getOneById(req, res)
);
projectsRoutes.get("/project/:id/users", (req, res) =>
  projectController.getUsersProject(req, res)
);

projectsRoutes.post("/project", (req, res) =>
  projectController.create(req, res)
);
projectsRoutes.post("/project/add-user", (req, res) =>
  projectController.addUserToProject(req, res)
)
projectsRoutes.put("/project/:id", (req, res) =>
  projectController.update(req, res)
);
projectsRoutes.put("/project/:id", (req, res) =>
  projectController.update(req, res)
);
projectsRoutes.delete("/project/:id", (req, res) =>
  projectController.delete(req, res)
);

module.exports = projectsRoutes;
