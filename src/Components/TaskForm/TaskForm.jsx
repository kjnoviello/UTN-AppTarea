/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
// import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Fade } from 'react-awesome-reveal';
import TaskModal from '../TaskModal/TaskModal';
import TaskList from '../TaskList/TaskList';
import Button from 'react-bootstrap/esm/Button';
import Swal from 'sweetalert2';
import './TaskForm.css';

const TaskForm = () => {
  const [tareas, setTareas] = useState(() => {
    const savedTareas = JSON.parse(localStorage.getItem('tareas'));
    return savedTareas || [];
  });

  // const [consultTask, setConsultTask] = useState("");

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  useEffect(() => {
    const savedTareas = JSON.parse(localStorage.getItem('tareas'));
    if (savedTareas) {
      setTareas(savedTareas);
    }
  }, []);

  // //! FIREBASE
  // useEffect(() => {
  //   const db = getFirestore();
  //   const biciRef = doc(db, "consultTask", "TkMe4vVlctDnyxXMDZzY");
  //   getDoc(biciRef).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setConsultTask({ id: snapshot.id, ...snapshot.data() });
  //       console.log(consultTask);
  //     }
  //   });
  // }, [tareas]);
  // //! FIN FAREBASE

  const handleGuardarTarea = (descripcion) => {
    if (descripcion.trim() !== "") {
      const nuevaTarea = {
        resumen: descripcion,
        fecha: tareaDate,
        completada: false,
      };
      setTareas((prevTareas) => [...prevTareas, nuevaTarea]);
    }
  };

  const handleGuardarTareaEditada = (descripcion, fecha, index) => {
    if (descripcion.trim() !== "") {
      setTareas((prevTareas) =>
        prevTareas.map((tarea, i) =>
          i === index ? { ...tarea, resumen: descripcion, fecha: fecha } : tarea
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

  const tareaDate = date()
  console.log(tareas);


  const clearLocalStorage = ()=> {
      Swal.fire({
        title: 'Vaciar la lista?',
        text: "Esto eliminará todas las tareas",
        showCancelButton: true,
        confirmButtonText: '<i class="ri-check-line"></i>',
        cancelButtonText: '<i class="ri-close-line"></i>'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Se eliminaron las tareas!',
            icon: 'success',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.clear()
          console.log("clear localstorage");
          setTareas([])
        }
      });
  }

  return (
    <div className='container-fluid customContainerFluid'>
      <h1><strong>DO.TASK</strong></h1>
      <h4><i>App de tareas</i></h4>
      <br />
      <div className='container-lg customContainer-lg'>
        <TaskModal handleGuardarTarea={handleGuardarTarea} tareaDate={tareaDate} />
      </div>
      <br />
      <br />
      <Fade>
        {(tareas.length)!==0 ?
          <div className='d-flex justify-content-end clearBtn'>
            <Button variant='dark' onClick={()=> {clearLocalStorage()}}>
              <i className="ri-delete-bin-7-line"></i>
            </Button>
          </div>
        :
          ""}
      </Fade>
      <TaskList
        tareas={tareas}
        setTareas={setTareas}
        handleGuardarTareaEditada={handleGuardarTareaEditada}
        tareaDate={tareaDate}
      ></TaskList>
    </div>
  );
};

export default TaskForm;