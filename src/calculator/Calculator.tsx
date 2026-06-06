import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCalculator } from "./useCalculator";
import { Button } from "@/components/ui/button";

export default function Calculator() {
    const {
        display,
        appendNumber,
        chooseOperation,
        clear,
        calculate
    } = useCalculator();

    // Configuración de los botones para mapearlos más fácilmente
    const buttons = [
        { label: "AC", action: clear, variant: "destructive" as const },
        { label: "÷", action: () => chooseOperation("÷"), variant: "secondary" as const },
        { label: "×", action: () => chooseOperation("×"), variant: "secondary" as const },
        { label: "-", action: () => chooseOperation("-"), variant: "secondary" as const },

        { label: "7", action: () => appendNumber("7") },
        { label: "8", action: () => appendNumber("8") },
        { label: "9", action: () => appendNumber("9") },

        { label: "+", action: () => chooseOperation("+"), variant: "secondary" as const },

        { label: "4", action: () => appendNumber("4") },
        { label: "5", action: () => appendNumber("5") },
        { label: "6", action: () => appendNumber("6") },

        { label: "=", action: calculate, className: "row-span-2 h-full bg-primary text-primary-foreground hover:bg-primary/90" },

        { label: "1", action: () => appendNumber("1") },
        { label: "2", action: () => appendNumber("2") },
        { label: "3", action: () => appendNumber("3") },

        { label: "0", action: () => appendNumber("0"), className: "col-span-2" },
        { label: ".", action: () => appendNumber(".") },
    ];

    return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
            {/* Contenedor principal usando Card de shadcn */}
            <Card className="w-full max-w-xs shadow-lg border-zinc-200 dark:border-zinc-800">
                <CardHeader className="pb-2">
                    <CardTitle className="text-center text-xs tracking-widest text-muted-foreground uppercase">
                        Calculadora
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* Pantalla de la calculadora */}
                    <div className="bg-muted px-4 py-6 rounded-lg text-right text-3xl font-mono font-bold tracking-tight overflow-x-auto whitespace-nowrap">
                        {display}
                    </div>

                    {/* Rejilla de botones (Grid de Tailwind) */}
                    <div className="grid grid-cols-4 gap-2">
                        {buttons.map((btn, index) => (
                            <Button
                                key={index}
                                onClick={btn.action}
                                variant={btn.variant || "outline"}
                                // Combinamos las clases dinámicas con las por defecto de shadcn
                                className={`text-lg font-semibold h-12 ${btn.className || ""}`}
                            >
                                {btn.label}
                            </Button>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}