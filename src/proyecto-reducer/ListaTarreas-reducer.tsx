import { useReducer } from "react";
import AddTask from "./common-components/Input-add-task";
import ListTask from "./common-components/List-task";
//import AddTask from "./common-components/input-add-task";
//import ListTask from "./common-components/list-task";
//import { text } from "stream/consumers";

function taskReducer(tasks, action) {
    switch(action.type) {
        case 'added':{
            return[...tasks,{
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case'changed':{
            return tasks.map(t=>{
                if(t.id=== action.id){
                    return action.task;
                }else{
                    return t;
                }
            })
        }
        case 'deleted':{
            return tasks.filter(t=> t.id !== action.id);
        }
        default:{
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export default function ListaTareasReducer() {
    const[tasks, dispatch]=useReducer(taskReducer, initialTasks);

    function handleAddTask(text){
        dispatch({
            type:'added',
            id: nextId++,
            text: text
        });
    }
    function handleChangeTask(text){
        dispatch({
            type:'changed',
            task: text
        });
    }
    return(
        <>
            <h1>Itinerario en Praga</h1>
            <AddTask
                onClick={handleAddTask}
            />
            <ListTask/>
        </>
    );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visitar el Museo Kafka', done: true },
  { id: 1, text: 'Ver espectáculo de títeres', done: false },
  { id: 2, text: 'Foto del muro de Lennon', done: false }
];