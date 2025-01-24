import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.completed ? "#e0e0e0" : "white")};
`;

const Text = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  flex: 1;
  margin-right: 10px;
`;

const TaskButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #a71d2a;
  }
`;

const ToggleButton = styled(Button)`
  background-color: ${(props) => (props.completed ? "#28a745" : "#ffc107")};
  margin-right:1rem;
  &:hover {
    background-color: ${(props) => (props.completed ? "#1c7c30" : "#e0a800")};
  }
`;

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleToggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Container>
      <Header>Minha lista de tarefas</Header>
      <InputContainer>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <Button onClick={handleAddTask}>Adicionar</Button>
      </InputContainer>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} completed={task.completed}>
            <Text completed={task.completed}>{task.text}</Text>
            <ToggleButton
              completed={task.completed}
              onClick={() => handleToggleComplete(index)}
            >
              {task.completed ? "Desmarcar" : "Concluir"}
            </ToggleButton>
            <TaskButton onClick={() => handleRemoveTask(index)}>Remover</TaskButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default App;
