import React from "react";
import NotableContext from "../context/context";
import { NotableValue } from "../../types";
import Line from "./Line";

function Editor({ onChange }: { onChange?: (value: NotableValue) => void }) {
    const { value } = React.useContext(NotableContext);

    React.useEffect(() => {
        if (onChange) {
            onChange(value);
        }
    }, [value, onChange]);

    return (
        <div>
            {value.map((item) => (
                <Line key={item.key} value={item} />
            ))}
        </div>
    );
}

export default Editor;
