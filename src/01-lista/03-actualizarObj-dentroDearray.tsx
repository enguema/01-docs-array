import { useState } from "react";

let nextId = 3;
const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Grumpy Cat', seen: false },
    { id: 2, title: 'Sleeping Dogs', seen: false },
];

type Artwork = {
    id: number
    seen: boolean
    title:string
    // other fields...
}
interface ItemListProps {
    artworks: Artwork[]
    onToggle: (id: number, seen: boolean) => void
}
export default function ListaTareas() {
    const [mylist, setMyList] = useState<Artwork[]>(initialList);
    const [yourlist, setYourList] = useState<Artwork[]>(initialList);

    
    function handleToggleMyList(artworkId:number, nextSeen:boolean) {
        //------La mutación crea inconsistencias entre el Array original y la copia.------
        /*const myNextList = [...mylist];
        const artwork = myNextList.find(
            a => a.id === artworkId
        );
        if (!artwork) return;
        artwork.seen = nextSeen;
        setMyList(myNextList);*/

        setMyList(mylist.map(artwork=>{
            if(artwork.id===artworkId){
                return {...artwork, seen: nextSeen};
            }else{
                return artwork;
            }
        }))
    }

    function handleToggleYourList(artworkId:number, nextSeen:boolean) {
        //------La mutación crea inconsistencias entre el Array original y la copia.------
        /*const yourNextList=[...yourlist];
        const artwork=yourNextList.find(
            a=>a.id===artworkId
        );
        if (!artwork) return;
        artwork.seen = nextSeen;
        setYourList(yourNextList);*/

        setYourList(yourlist.map(artwork=>{
            if(artwork.id === artworkId){
                return {...artwork, seen:nextSeen}
            }else{
                return artwork;
            }
        }))

    }

    return(
        <>
            <h1>Art Bucket List</h1>
            <h2>My List of Art to See</h2>
            <ItemList artworks={mylist} onToggle={handleToggleMyList }/>

            <h2>Your List of Art to See</h2>
            <ItemList artworks={yourlist} onToggle={handleToggleYourList }/>
        </>
    )
}

function ItemList({artworks, onToggle }:ItemListProps) {
    return(
        <ul>
            {artworks.map(artwork=>(
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={e => onToggle(artwork.id, e.target.checked)}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    )
}