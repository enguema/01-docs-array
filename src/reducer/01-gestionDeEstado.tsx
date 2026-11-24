import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Form() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState<Error | null>(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>That's right!</h1>
    }

    async function handleSubmit(e:any) {
        e.preventDefault();//Deshabilita el comportamiento por defecto del utton-submit
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (error) {
            setStatus('typing');
            setError(error instanceof Error ? error : new Error(String(error)));
        }
    }

    function handleTextareaChange(e:any) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <h2>Cuestionario sobre ciudades</h2>
            <p>
                ¿En qué ciudad hay un cartel publicitario que convierte el aire en agua potable?
            </p>
            <form onSubmit={handleSubmit} className="w-100">
                <Textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                ></Textarea>
                <br></br>
                <Button
                    disabled={
                        answer.length === 0 || status === 'submitting'
                    }
                >
                    Enviar
                </Button>

                {error !== null &&
                    <p className="color-red-500">{error.message}</p>
                }
            </form>
        </>
    );
}

function submitForm(answer: string) {
    //Simular una respuesta que viene de la red
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'Malabo';
            if (shouldError) {
                reject(new Error('Good gess ut a wrong aswer. Try again'));
            } else {
                resolve();
            }
        }, 1500);
    });
}