import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ListTask() {
    const [artist, setArtist] = useState([]);
    return (
        <>
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