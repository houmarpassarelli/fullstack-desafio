import { Request, Response, NextFunction, Application } from "express";
import { v4 as uuidv4 } from 'uuid'; 
import swaggerUI from "swagger-ui-express";

import swaggerJson from "./swagger.json";

type ErrorHandler = {
    status?: number;
    message: string;
};

const tasks: { id: string; title: string; status: string }[] = [];

const errorHandler = (error: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    const status = error.status || 500;
    res.status(status).send({ error: error.message });
};

export default (app: Application) => {

    app.use(errorHandler);
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJson));
    
    app.get('/tasks', (req: Request, res: Response) => {
        res.json(tasks);
    });

    app.post('/tasks', (req: Request, res: Response, next: NextFunction) => {

        const { title } = req.body;
      
        if (!title) {
          return next({ status: 400, message: 'O campo title deve estar preenchido.' });
        }
      
        const newTask = {
          id: uuidv4().replace(/-/g, ""),
          title,
          status: 'não concluída',
        };
      
        tasks.push(newTask);
        res.status(201).json(newTask);
    });

    app.put('/tasks/:id', (req: Request, res: Response, next: NextFunction) => {

        const { id } = req.params;
        const { status } = req.body;
      
        const task = tasks.find((task) => task.id === id);
      
        if (!task) {
          return next({ status: 404, message: 'Tarefa não encontrada.' });
        }
      
        if (!['concluída', 'não concluída'].includes(status)) {
          return next({ status: 400, message: 'O status deve ser "concluída" ou "não concluída".' });
        }
      
        task.status = status;
        res.json(task);
    });

    app.delete('/tasks/:id', (req: Request, res: Response, next: NextFunction) => {

        const { id } = req.params;
      
        const taskIndex = tasks.findIndex((task) => task.id === id);
      
        if (taskIndex === -1) {
          return next({ status: 404, message: 'Tarefa não encontrada.' });
        }
      
        tasks.splice(taskIndex, 1);
        res.status(200).send();
    });
};