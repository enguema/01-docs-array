import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

let nextId = 0;
let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
    { id: 3, name: 'Ondó Nguema' },
    { id: 4, name: 'Nguema Obiang' },
    { id: 5, name: 'Edjó Edjó' },
    { id: 6, name: 'Luisa Juliana Avoro' },
];

export default function List() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(initialArtists);

    return (
        <>
            <h1>Escultores Inspiradores</h1>
            <Input
                value={name}
                onChange={e => setName(e.target.value)}
            />

            {/*<button onClick={() => {
                setArtists([
                    ...artists, { id: nextId++, name: name }
                ]),setName('');}
            }>Añadir</button>*/}
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name} {' '}
                        <Button onClick={() => {
                            setArtists(
                                artists.filter(a => a.id !== artist.id)
                            )
                        }}
                        >Eliminar</Button>
                    </li>
                ))}
            </ul>
        </>
    )
}