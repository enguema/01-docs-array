import { useState } from "react";

//let nextId = 3;

const initialList = [
    { id: 0, title: 'Grandes Barrigas', seen: false },
    { id: 1, title: 'Paisaje lunar', seen: false },
    { id: 2, title: 'Guerreros de Terracota', seen: false },
];

export default function BucketList() {
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(initialList);

    //Al hace click en el control
    function handleToggleMyList(artworkId, nextSeen) {
        setMyList(myList.map(artwork => {
            if (artwork.id === artworkId) {
                return { ...artwork, seen: nextSeen }
            }else{
                return artwork;
            }
        }))
        /*const myNextList = [...myList]; //Copiamos el array gracias a la sisntaxis de PROPAGACIÓN
        const artwork = myNextList.find(
            a => a.id === artworkId
        );
        artwork.seen = nextSeen;//Actualizamos el elemento seleccionado
        setMyList(myNextList);*/
    }

    function handleToggleYourList(artWorkId, nextScreen) {
        console.log('Imprimiendo argumentos')
        console.log(' ArtWork ID: '+ artWorkId)
        console.log(' Next Screen ID: '+ nextScreen)
        setYourList(yourList.map(artwork => {
            if (artwork.id === artWorkId) {
                //Crea un nuevo OBJ  con cambios
                return { ...artwork, seen: nextScreen }
            } else {
                //No cambiar
                return artwork;
            }
        }));
        /*const yourNextList = [...yourList];
        const artWork = yourNextList.find(
            a => a.id === artWorkId
        );
        artWork.seen = nextScreen;
        setYourList(yourNextList);*/
    }

    return (
        <>
            <h1>Lista de deseos de arte</h1>
            <h2>Mi lista de obras de arte</h2>
            <ItemList artworks={myList} onToggle={handleToggleMyList} />

            <h2>Tu lista de obras de arte para ver:</h2>
            <ItemList artworks={yourList} onToggle={handleToggleYourList} />
        </>
    );
}

function ItemList({artworks, onToggle }) {
    return (
        <>
            <ul>
                {artworks.map(artwork => (
                    <li key={artwork.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={artwork.seen}
                                onChange={e => {
                                    onToggle(
                                        artwork.id, e.target.checked
                                    )
                                }}
                            />
                            {artwork.title}
                        </label>
                    </li>
                ))
                }
            </ul>
        </>
    )
}