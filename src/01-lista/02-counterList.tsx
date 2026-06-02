import { useState } from "react";

let initialCounters = [0, 0, 0];

export default function CounterList(){
    const [counters, setCounters] = useState(initialCounters);

    function handleIncrementClick(index){

        const nextCounters= counters.map((c, cIndex)=>{
            //console.log (' Saludo desde índice ' + index);
            if(cIndex === index){
                return c + 1;
            }else{
                return c;
            }
        })

        //Se actualiza con lo que devuelva la Expresion Function
        setCounters(nextCounters);
    }

    return(
        <ul>
            {counters.map((counter, counterId)=>(
                <li key={counterId}>
                    {counter} {' '}
                    <button onClick={()=>{
                        handleIncrementClick(counterId);
                    }}>
                    +1
                    </button>
                </li>
            ))}
        </ul>
    )
}