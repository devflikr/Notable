import React from "react";
import NotableContext from "./context";
import {
    NotableContextWrapperProps,
    NotableTheme,
    NotableValue,
} from "../../types";

function NotableContextWrapper({
    children,
    defaultValue,
    theme: defaultTheme,
}: NotableContextWrapperProps) {
    const [value, setValue] = React.useState<NotableValue>(defaultValue || []);

    const [theme, setTheme] = React.useState<NotableTheme>(
        defaultTheme || "light",
    );

    return (
        <NotableContext.Provider
            value={{
                value,
                theme,
                setValue,
                setTheme,
            }}
        >
            {children}
        </NotableContext.Provider>
    );
}

export default NotableContextWrapper;
