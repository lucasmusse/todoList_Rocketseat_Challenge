import styles from "./Wrapper.module.css";
import { Tasks } from "../toDos/tasks/Tasks";
import { NoTask } from "../toDos/noTask/NoTask";
import { useState, useEffect } from "react";

import { Form } from "../form/Form";
import { EditForm } from "../form/EditForm";

import { TasksHeader } from "../toDos/tasksHeader/TasksHeader";

export function Wrapper() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);

  const [countTodo, setCountTodo] = useState(tasks.length);
  const [countCompletedtaks, setCountCompletedTasks] = useState(0);

  const [openEditForm, setOpenEditForm] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [editTaskId, seteditTaskId] = useState("");

  //USE EFFECT PARA A CONTAGEM DE TAREFAS E CONCLUÍDAS (NÃO SEI SE É A FORMA MAIS INTELIGENTE MAS FOI COMO CONSEGUI)

  useEffect(() => {
    setCountTodo(tasks.length);

    var completedTasks = tasks.filter((task) => task.isCompleted === true);
    setCountCompletedTasks(completedTasks.length);
  }, [tasks]);

  // PEGA O TEXTO DA NOVA TAREFA CADASTRADA

  function handleNewText(e) {
    setText(e.target.value);
  }

  //ADICIONA NOVA TAREFA

  function addTodo(text) {
    event.preventDefault();
    const todoObj = { content: text, id: id, isCompleted: false };

    setTasks([...tasks, todoObj]);
    setId(id + 1);

    setText("");
  }

  //DELETA TAREFA

  const deleteTodo = (id) => {
    var filteredTodo = tasks.filter((task) => task.id !== id);

    if (window.confirm(`Tem certeza de que deseja apagar a tarefa?`)) {
      setTasks(filteredTodo);
    } else {
      setTasks(tasks);
    }
  };

  //COMPLETA TAREFA

  const completeTodo = (id) => {
    const newTasks = [...tasks];

    newTasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
    });

    setTasks(newTasks);
  };

  //------------------- EDIÇÃO DE TAREFAS ------------------

  // Abre o formulário de edição

  const handleOpenEditForm = (id, content, isCompleted) => {
    
    if(!isCompleted){
      setOpenEditForm(!openEditForm);
      setEditedText(content);
      seteditTaskId(id);
    }else{
      alert("Você não pode editar uma tarefa concluída, reabra a tarefa para editar!")
    }
    
    
  };

  const handleEditedText = (e) => {
    setEditedText(e.target.value);
  };

  const editTodo = (editedText) => {
    event.preventDefault();

    const newArray = [...tasks];

    newArray.forEach((task) => {
      if (task.id === editTaskId) {
        task.content = editedText;
      }
    });

    setTasks(newArray);
    setText("");
    setOpenEditForm();
  };

  return (
    <div className={styles.wrapper}>
      {openEditForm ? (
        <EditForm
          editedText={editedText}
          text={text}
          handleEditedText={handleEditedText}
          editTodo={editTodo}
          handleOpenEditForm={handleOpenEditForm}
        />
      ) : (
        <Form text={text} handleNewText={handleNewText} addTodo={addTodo} />
      )}
      <TasksHeader
        countTodo={countTodo}
        countCompletedtaks={countCompletedtaks}
      />
      {countTodo > 0 ? (
        tasks.map((task) => {
          return (
            <Tasks
              key={task.id}
              task={task}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              handleOpenEditForm={handleOpenEditForm}
            />
          );
        })
      ) : (
        <NoTask />
      )}
    </div>
  );
}
