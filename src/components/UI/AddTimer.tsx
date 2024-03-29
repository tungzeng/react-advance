import { useRef } from "react";
import Form, { FormHandle } from "../Form";
import Input from "../Input";
import Button from "../Button";
import { useTimersContext } from "../store/timers-context";

export default function AddTimer() {
    const form = useRef<FormHandle>(null);
    const { addTimer } = useTimersContext();

    function handleSaveTimer(data: unknown) {
        const extractedData = data as { name: string; duration: string };
        // + convert type string to number
        addTimer({ name: extractedData.name, duration: +extractedData.duration });
        console.log(extractedData);
        form.current?.clear();
    }

    return (
        <Form ref={form} onSave={handleSaveTimer} id="add-timer">
            <Input type="texrt" label="Name" id="name" />
            <Input type="number" label="Duration" id="duration" />
            <p>
                <Button>Add Timer</Button>
            </p>
        </Form>
    );
}