/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import TaskModal from '../TaskModal/TaskModal';
import TaskList from '../TaskList/TaskList';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import './TaskForm.css';

const TaskForm = () => {
  const [tareas, setTareas] = useState(() => {
    const savedTareas = JSON.parse(localStorage.getItem('tareas'));
    return savedTareas || [];
  });

  const [consultTask, setConsultTask] = useState("");

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  useEffect(() => {
    const savedTareas = JSON.parse(localStorage.getItem('tareas'));
    if (savedTareas) {
      setTareas(savedTareas);
    }
  }, []);

  //! FIREBASE
  useEffect(() => {
    const db = getFirestore();
    const biciRef = doc(db, "consultTask", "TkMe4vVlctDnyxXMDZzY");
    getDoc(biciRef).then((snapshot) => {
      if (snapshot.exists()) {
        setConsultTask({ id: snapshot.id, ...snapshot.data() });
        console.log(consultTask);
      }
    });
  }, [tareas]);
  //! FIN FAREBASE

  const handleGuardarTarea = (descripcion) => {
    if (descripcion.trim() !== "") {
      const nuevaTarea = {
        resumen: descripcion,
        fecha: date(),
        completada: false,
      };
      setTareas((prevTareas) => [...prevTareas, nuevaTarea]);
    }
  };

  const handleGuardarTareaEditada = (descripcion, index) => {
    if (descripcion.trim() !== "") {
      setTareas((prevTareas) =>
        prevTareas.map((tarea, i) =>
          i === index ? { ...tarea, resumen: descripcion } : tarea
        )
      );
    }
  };

  const date = () => {
    const date = new Date();
    const [month, day, year] = [
      date.getMonth(),
      date.getDate(),
      date.getFullYear(),
    ];
    return `${day}/${month}/${year}`;
  };

  console.log("esto es tareas", tareas);

  return (
    <div className='container-fluid customContainerFluid'>
      <h1><strong>DO.TASK</strong></h1>
      <h4><i>App de tareas</i></h4>
      <br />
      <div className='container-lg customContainer-lg'>
        <TaskModal handleGuardarTarea={handleGuardarTarea} date={date} />
      </div>
      <br />
      <br />
      <TaskList
        tareas={tareas}
        setTareas={setTareas}
        handleGuardarTareaEditada={handleGuardarTareaEditada}
        date={date}
      ></TaskList>
    </div>
  );
};

export default TaskForm;