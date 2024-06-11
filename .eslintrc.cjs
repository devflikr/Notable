{
    "root": true,
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "react-app",
        "plugin:react-hooks/recommended"
    ],
    "ignorePatterns": [
        "dist",
        ".eslintrc.cjs"
    ],
    "parser": "@typescript-eslint/parser",
    "rules": {
        // add new line above comment
        "lines-around-comment": [
            "error",
            {
                "beforeLineComment": true,
                "beforeBlockComment": true,
                "allowBlockStart": true,
                "allowClassStart": true,
                "allowObjectStart": true,
                "allowArrayStart": true
            }
        ],
        // add new line above return
        "newline-before-return": "error",
        // add new line below import
        "import/newline-after-import": [
            "error",
            {
                "count": 1
            }
        ] //,
        // "@typescript-eslint/ban-types": [
        //     "error",
        //     {
        //         "extendDefaults": true,
        //         "types": {
        //             "{}": false
        //         }
        //     }
        // ]
        //
    },
    "plugins": [
        "import"
    ],
    "settings": {
        "import/parsers": {
            "@typescript-eslint/parser": [
                ".ts",
                ".tsx"
            ]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true,
                "project": [
                    "./tsconfig.json"
                ]
            }
        }
    }
}