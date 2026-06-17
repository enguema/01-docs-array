import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ListTask() {
    const [artist, setArtist] = useState(initialTasks);
    return (
        <>
            <div className="div-md">
                <ul className="l-padding">
                    {artist.map(art => (
                        <li key={art.id}>{art.text}
                            <Button className="bg-red-500 " onClick={()=>{
                                setArtist(
                                    artist.filter(a=> 
                                        a.id !== art.id
                                    )
                                )
                            }}>
                                Eliminar
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
}
let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visitar el Museo Kafka', done: true },
  { id: 1, text: 'Ver espectáculo de títeres', done: false },
  { id: 2, text: 'Foto del muro de Lennon', done: false }
];