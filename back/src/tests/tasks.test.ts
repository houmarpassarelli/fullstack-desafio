import request from 'supertest';
import app from '../index';

describe('API de Gerenciamento de Tarefas', () => {
  it('Deve retornar a lista de tarefas vazia inicialmente', async () => {
    const res = await request(app).get('/tasks');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('Deve adicionar uma nova tarefa', async () => {
    const newTask = { title: 'Nova tarefa' };
    const res = await request(app).post('/tasks').send(newTask);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe(newTask.title);
    expect(res.body.status).toBe('não concluída');
  });

  it('Deve atualizar o status de uma tarefa', async () => {
    const newTask = { title: 'Outra tarefa' };
    const task = await request(app).post('/tasks').send(newTask);

    const res = await request(app)
      .put(`/tasks/${task.body.id}`)
      .send({ status: 'concluída' });

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('concluída');
  });

  it('Deve retornar erro ao tentar atualizar tarefa inexistente', async () => {
    const res = await request(app)
      .put('/tasks/inexistente')
      .send({ status: 'concluída' });

    expect(res.status).toBe(404);
    expect(res.body.error).toBe('Tarefa não encontrada.');
  });

  it('Deve deletar uma tarefa pelo ID', async () => {
    const newTask = { title: 'Tarefa para deletar' };
    const task = await request(app).post('/tasks').send(newTask);

    const res = await request(app).delete(`/tasks/${task.body.id}`);
    expect(res.status).toBe(204);
  });

  it('Deve retornar erro ao tentar deletar tarefa inexistente', async () => {
    const res = await request(app).delete('/tasks/inexistente');
    expect(res.status).toBe(404);
    expect(res.body.error).toBe('Tarefa não encontrada.');
  });
});
