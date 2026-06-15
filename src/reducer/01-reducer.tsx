import { Button } from "@/components/ui/button";
import { useReducer } from "react";

function reducer(state:any, action:any) {
    if (action.type === 'increment') {
        return { age: state.age + 1 }
    }
    throw Error('Accion desconocida');
}

export default function MyreducerComponent() {
    const [state, dispatch] = useReducer(reducer, { age: 42 });

    return (
        <>
            <div>
                <h2>Using Reducer</h2>

                <Button onClick={() => {
                    dispatch({ type: "increment" })
                }}>
                    Increment age
                </Button>
                <p>Hello! You are: {state.age}</p>
            </div>
        </>
    );
}