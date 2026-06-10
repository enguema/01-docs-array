import { Button } from "@/components/ui/button";
import fetchApi from "./02-fetchapi";

export default function ProgAsincrona() {

    const MAX_PRIME = 1000000;
    //const quota = document.querySelector("#quota");
    //const output = document.querySelector("#output");

    function isPrime(n: number) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return n > 1;
    }

    const random = (max: number) => Math.floor(Math.random() * max);

     var piramidesCreadas= [];

    function generatePrimes(quota: number) {
        const primes = [];
        while (primes.length < quota) {
            const candidate = random(MAX_PRIME);
            if (isPrime(candidate)) {
                primes.push(candidate);
            }
        }
        piramidesCreadas= primes;
        //alert("Saludando desde el generador de números primos" + primes);
        return primes;
    }

    //--- FETCH API ---
   fetchApi();


    return (
        <>

            <label>Cantidad de números primos:</label>
            {/**<input type="text" id="quota" name="quota" value="1000000" />

            <Button id="generate" onClick={() => generatePrimes(1000000)}>Generar números primos</Button>
            <Button id="reload">Recargar</Button>

            <div id="output">Result Mode: {piramidesCreadas ? piramidesCreadas.join(", ") : "No hay números primos para mostrar"}</div>
        */}
        </>
    );
}