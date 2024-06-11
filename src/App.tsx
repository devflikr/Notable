import NotableEditor from "./notable/src/editor";

function App() {
    return (
        <div className="h-screen grid grid-cols-[1fr_auto_1fr]">
            <div className="">
                <NotableEditor
                    defaultValue={[
                        {
                            key: "0",
                            type: "H1",
                            value: "Hello, World!",
                        },
                        {
                            key: "1",
                            type: "P",
                            value: "This is a paragraph.",
                        },
                        {
                            key: "2",
                            type: "UL",
                            value: [
                                {
                                    key: "0",
                                    type: "LI",
                                    value: "Item 1",
                                },
                                {
                                    key: "1",
                                    type: "LI",
                                    value: "Item 2",
                                },
                                {
                                    key: "2",
                                    type: "LI",
                                    value: "Item 3",
                                },
                            ],
                        },
                        {
                            key: "3",
                            type: "OL",
                            value: [
                                {
                                    key: "0",
                                    type: "LI",
                                    value: "Item 1",
                                },
                                {
                                    key: "1",
                                    type: "LI",
                                    value: "Item 2",
                                },
                                {
                                    key: "2",
                                    type: "LI",
                                    value: "Item 3",
                                },
                            ],
                        },
                        {
                            key: "4",
                            type: "A",
                            link: {
                                href: "https://example.com",
                                text: "Example.com",
                                target: "_blank",
                            },
                        },
                    ]}
                />
            </div>
            <span className="w-1 bg-gray-200" />
            <div className="">World</div>
        </div>
    );
}

export default App;
