import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

let nextId = 0;
let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function ListEscultores() {
    const [name, setName] = useState("");
    const [artist, setArtist] = useState(initialArtists);

    return (
        <>
            <h1>Escultores inspiradores:</h1>
            <div className="div-md">
                <Input className="w-100"
                    value={name}
                    onChange={e => setName(e.target.value)}
                >
                </Input>
                <Button onClick={() => {
                    {/*artist.push({ //Push muta el arreglo: no lo queremos
                        id: nextId++,
                        name: name,
                    });*/}
                    setArtist(
                        [...artist,
                        { id: nextId++, name: name }]
                    ), setName("")
                }}
                >Añadir</Button>
            </div>
            <div className="div-md">
                <ul className="l-padding">
                    {artist.map(art => (
                        <li key={art.id}>{art.name}
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