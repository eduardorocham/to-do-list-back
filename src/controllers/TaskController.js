import Controller from "./Controller.js";

import TaskServices from "../services/TaskServices.js";

const taskServices = new TaskServices();

class TaskController extends Controller {
  constructor() {
    super(taskServices, "task");
  }

  async addTask(req, res) {
    const dataToCreate = req.body;

    try {
      const newTask = await taskServices.createTask(dataToCreate);

      const response = {};
      response.message = `${this.entityName} created with success!`;
      response[this.entityName] = newTask;

      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default TaskController;
