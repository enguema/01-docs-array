import { useImmer } from "use-immer";

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

export default function ListaTarreasConImmer(){
    /**
     * Immer: Es una librería que nos permite escribir código que parece mutar el estado, pero en realidad está creando una 
     *        nueva copia del estado de manera inmutable.
     * Esto facilita la actualización de objetos y arrays sin tener que preocuparse por la mutabilidad
    */
    const [mylist, setMyList] = useImmer<Artwork[]>(initialList);
    const [yourlist, setYourList] = useImmer<Artwork[]>(initialList);
    
    function handleToggleMyList(artworkId:number, nextSeen:boolean) {
        //------La mutación crea inconsistencias entre el Array original y la copia.------
        /*const myNextList = [...mylist];
        const artwork = myNextList.find(
            a => a.id === artworkId
        );
        if (!artwork) return;
        artwork.seen = nextSeen;
        setMyList(myNextList);*/

        setMyList(draft=>{
            const artwork =draft.find(a=>a.id === artworkId);
            artwork?.seen = nextSeen;
        })
    }
}