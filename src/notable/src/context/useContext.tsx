import React from "react";
import { NotableContextValues } from "../../types";
import NotableContext from "./context";

export default function useNotableContext(): NotableContextValues {
    const context = React.useContext(NotableContext);
    if (!context)
        throw new Error(
            "Unable to access Notable context. Make sure you are using the Notable component",
        );
    return context;
}
