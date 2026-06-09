export default function fetchApi(){
    const fetchPromise = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    console.log(fetchPromise);

    fetchPromise.then((response)=> {
        //console.log("Manejador de evento")
        console.log(`Received response: ${response.status}`);
    })

    return(
        <div>
            Fetch API
        </div>
    );
}