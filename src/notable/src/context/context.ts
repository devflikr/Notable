import React from "react";
import { NotableContextValues } from "../../types";

const NotableContext = React.createContext<NotableContextValues>({
    value: [],
    theme: "light",
    setValue: () => {},
    setTheme: () => {},
});

export default NotableContext;
