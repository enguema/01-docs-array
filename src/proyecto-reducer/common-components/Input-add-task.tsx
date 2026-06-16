import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface AddTaskProps {
    onClick: (text: string) => void;
}

export default function AddTask({ onClick }: AddTaskProps) {
    const [name, setName] = useState("");
    return (
        <>
            <div className="div-md">
                <Input className="w-100"
                    value={name}
                    onChange={e => setName(e.target.value)}
                >
                </Input>
                <Button onClick={() => {
                    setName(name), setName("")
                }}
                >Añadir</Button>
            </div>
        </>
    );
}


