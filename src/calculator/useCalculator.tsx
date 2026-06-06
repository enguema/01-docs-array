import { useState } from "react";

export type OperationType = "+" | "-" | "×" | "÷" | null;
export  function useCalculator() {
    /**
     * ESTADOS DE LA CALCULADORA
     */

    const [display, setDisplay] = useState<string>("0");
    const [previousValue, setPreviousValue] = useState<string | null>(null);
    const [operation, setOperation] = useState<OperationType>(null);

    // clearOnNext: Si es 'true', el próximo número que presione el usuario 
    // reemplazará el valor actual en lugar de concatenarse (ej. después de presionar '+').
    const [clearOnNext, setClearOnNext] = useState<boolean>(false);

    /**
     * ACCIONES / MÉTODOS
     */

    //Añade digito o punto decimal a la pantalla actual
    const appendNumber = (num: string) => {
        if (display === "0" || clearOnNext) {
            if (num === ".") {
                setDisplay("0.");
            } else {
                setDisplay(num);
            }
            setClearOnNext(false);
        } else {
            if (num === "." && display.includes(".")) return;
            if (display.length >= 12) return;

        }
    }

    //Configurar la operación matemática actual y resguarda el valor previo
    const chooseOperation = (op: OperationType) => {

        // Si el usuario presiona un operador pero ya había uno pendiente (ej. "5 + 5" y luego presiona "*"),
        // calculamos primero el resultado parcial antes de encadenar la siguiente operación.
        if (operation && previousValue && !clearOnNext) {
            executeCalculation();
        }

        // Guardamos el valor actual como el "anterior" para liberar la pantalla
        setPreviousValue(display);
        // Registramos cuál operación se va a ejecutar
        setOperation(op);
        // Activamos la bandera para que el siguiente número limpie la pantalla
        setClearOnNext(true);
    }

    /**
   * Resetea todos los estados a su valor inicial (Botón AC).
   */
    const clear = () => {
        setDisplay("0");
        setPreviousValue(null);
        setOperation(null);
        setClearOnNext(false);
    };


    /**
   * Función interna privada encargada de procesar las matemáticas.
   * Modifica los estados internos según la operación guardada.
   */
    const executeCalculation = () => {
        if (!operation || !previousValue) return;

        // Convertimos las strings de la pantalla a números reales de JavaScript
        const current = parseFloat(display);
        const prev = parseFloat(previousValue);

        let result = 0;

        // Procesamos según el operador matemático activo
        switch (operation) {
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "×":
                result = prev * current;
                break;
            case "÷":
                // Regla de negocio: Controlar la división por cero para evitar el valor 'Infinity'
                if (current === 0) {
                    setDisplay("Error");
                    setPreviousValue(null);
                    setOperation(null);
                    setClearOnNext(true);
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }

        // Formateamos el resultado para evitar problemas de flotantes largos en JS
        const formattedResult = Number(result.toPrecision(12)).toString();

        setDisplay(formattedResult);
        setPreviousValue(null); // Reseteamos el valor previo ya procesado
        setOperation(null);     // Limpiamos la operación actual
        setClearOnNext(true); // Si vuelve a presionar un número, inicia una nueva operación
    };

    // Retornamos la API pública de nuestro hook para que la UI (Fase 3) pueda consumirla fácilmente
    return {
        display,
        appendNumber,
        chooseOperation,
        clear,
        calculate: executeCalculation, // Exponemos la función con un nombre semántico para el botón "="
    };
}