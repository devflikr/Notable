export type NotableTheme = "light" | "dark";

export type NotableContextWrapperProps = {
    children: React.ReactNode;
    defaultValue?: NotableValue;
    theme?: NotableTheme;
};

export type NotableContextValues = {
    value: NotableValue;
    theme: NotableTheme;
    setValue: React.Dispatch<React.SetStateAction<NotableValue>>;
    setTheme: React.Dispatch<React.SetStateAction<NotableTheme>>;
};

export type NotableValueItem =
    | ({ key: string } & {
          type: "A";
          a: {
              href: string;
              target?: string;
          };
      })
    | {
          type: "IMG";
          img: {
              type: "IMG";
              src: string;
              alt: string;
          };
      }
    | {
          type:
              | "H1"
              | "H2"
              | "H3"
              | "H4"
              | "H5"
              | "H6"
              | "P"
              | "SPAN"
              | "UL"
              | "OL"
              | "LI"
              | "BLOCKQUOTE"
              | "CODE"
              | "HR";
          value: string | NotableValueItem[];
      };

export type NotableValue = NotableValueItem[];

export type NotableEditorProps = {
    defaultValue?: NotableValue;
    onChange?: (value: NotableValue) => void;
    theme?: NotableTheme;
};
