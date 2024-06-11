import React from "react";
import { NotableValueItem } from "../../types";

function Line({ value }: { value?: NotableValueItem }) {
    if (!value) return null;

    if (typeof value === "string") return <div>{value}</div>;

    let Elem = "div";

    if (value.type === "H1") Elem = "h1";
    else if (value.type === "H2") Elem = "h2";
    else if (value.type === "H3") Elem = "h3";
    else if (value.type === "H4") Elem = "h4";
    else if (value.type === "H5") Elem = "h5";
    else if (value.type === "H6") Elem = "h6";
    else if (value.type === "P") Elem = "p";
    else if (value.type === "SPAN") Elem = "span";
    else if (value.type === "UL") Elem = "ul";
    else if (value.type === "OL") Elem = "ol";
    else if (value.type === "LI") Elem = "li";
    else if (value.type === "BLOCKQUOTE") Elem = "blockquote";
    else if (value.type === "CODE") Elem = "code";
    else if (value.type === "HR") Elem = "hr";
    else if (value.type === "IMG") Elem = "img";
    else if (value.type === "A") Elem = "a";

    return React.createElement(
        Elem,
        null,
        typeof value.value === "string"
            ? value.value
            : value.value.map((item) => <Line key={item.key} value={item} />),
    );
}

export default Line;
