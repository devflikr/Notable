import React from "react";
import NotableContextWrapper from "../context";
import { NotableEditorProps } from "../../types";
import Editor from "./Editor";

function NotableEditor({ defaultValue, onChange, theme }: NotableEditorProps) {
    return (
        <NotableContextWrapper defaultValue={defaultValue} theme={theme}>
            <Editor onChange={onChange} />
        </NotableContextWrapper>
    );
}

export default NotableEditor;
