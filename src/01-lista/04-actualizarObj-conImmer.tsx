import { useImmer } from "use-immer";

const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Grumpy Cat', seen: false },
    { id: 2, title: 'Sleeping Dogs', seen: false },
];

type Artwork = {
    id: number
    seen: boolean
    title: string
    // other fields...
}
interface ItemListProps {
    artworks: Artwork[]
    onToggle: (id: number, seen: boolean) => void
}

export default function ListaTarreasConImmer() {
    /**
     * Immer: Es una librería que nos permite escribir código que parece mutar el estado, pero en realidad está creando una 
     *        nueva copia del estado de manera inmutable.
     * Esto facilita la actualización de objetos y arrays sin tener que preocuparse por la mutabilidad
    */
    const [mylist, setMyList] = useImmer<Artwork[]>(initialList);
    const [yourlist, setYourList] = useImmer<Artwork[]>(initialList);

    function handleToggleMyList(artworkId: number, nextSeen: boolean) {
        //------La mutación crea inconsistencias entre el Array original y la copia.------

         /*setMyList(mylist.map(artwork=>{
            if(artwork.id===artworkId){
                return {...artwork, seen: nextSeen};
            }else{
                return artwork;
            }
        }))*/

        setMyList(draft => {
            const artwork = draft.find(a => a.id === artworkId);
            artwork.seen = nextSeen;
        });
    }

    function handleToggleYourList(artworkId: number, nextSeen: boolean) {
        setYourList(draft=>{
            const artwork = draft.find(a=>a.id === artworkId);
            artwork.seen = nextSeen;
        })
    }

    return (
        <>
            <h2>Art Bucket List</h2>
            <h4>My List Bucket</h4>
            <ItemList artworks={mylist} onToggle={handleToggleMyList} />

             <h4>Your List Bucket</h4>
            <ItemList artworks={yourlist} onToggle={handleToggleYourList} />
        </>
    )
}



function ItemList({ artworks, onToggle }) {
    return (
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type="Checkbox"
                            checked={artwork.seen}
                            onChange={e => {
                                onToggle(artwork.id, e.target.checked)
                            }}
                        />
                        {artwork.title}
                    </label>
                </li>

            ))}
        </ul>
    );
}

