import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useReducer } from "react";

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'increment_age': {
            //calcula y devuelve el siguiente estado
            return { name: state.name, age: state.age + 1 }
        }

        case 'changed_name': {
            return { name: action.nextName, age: state.age }
        }
    }

    throw Error('Accion desconocida');
    /*if (action.type === 'increment') {
        return { age: state.age + 1 }
    }*/
}

export default function MyreducerComponent() {
    const [state, dispatch] = useReducer(reducer, { age: 42 });

    function handleButtonClick() {
        dispatch({ type: "increment_age" });
    }

    function handleInputChange(e) {
        dispatch(
            { type: 'changed_name', nextName: e.target.value }
        );
    }

    return (
        <>
            <div>
                <h2>Using Reducer</h2>

                <Input
                    onChange={handleInputChange}
                    value={state.name}
                />
                <Button onClick={handleButtonClick}>
                    Increment age
                </Button>

                <p>Hello {state.name}! You are: {state.age}</p>
            </div>
        </>
    );
}