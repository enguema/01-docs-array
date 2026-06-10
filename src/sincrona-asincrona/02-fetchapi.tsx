export default function fetchApi(){
    const fetchPromise = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );

    /**fetchPromise.then((response)=> {
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data)=>{
        console.log(data[0].name);
    }).catch((error)=>{
        console.error(`Error al obtener productos: ${error}`);
    })*/

    //----COMBINAR MULTIPLES PROMESAS CON Promise.all()----
    const fetchPromise1=fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    
    const fetchPromise2=fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/prices.json",
    );

    const fetchPromise3=fetch(
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
    );

    Promise.all([fetchPromise1,fetchPromise2,fetchPromise3])
    .then((responses)=>{
        console.log("-----Mostrando coleccion de respuestas-----")
        for(const response of responses){
            console.log(`${response.url}: ${response.status}`);
        }
    }).catch((error)=>{
        console.error(`Error al obtener datos: ${error.message}`);
    })

    
 //---- Promise.any(): devuelve la primera promesa que se resuelva exitosamente, ignorando las que se rechacen. 
 // Si todas las promesas se rechazan, devuelve un error AggregateError.

    return(
        <div>
            Fetch API
        </div>
    );
}