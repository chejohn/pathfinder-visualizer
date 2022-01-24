import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --green-text: #1abc9c;
        --cell-border-blue: rgb(175, 216, 248);
        --visited-primary: #00BEDABF;
        --visted-secondary: #b243ffbf;
        --path-color: rgb(255, 254, 106);
        --wall-color: #0C3547;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Lato", Helvetica, Arial, sans-serif;
    }

    body {
        max-width: 1280px;
        min-width: 800px;
        color: #34495e;;
    }
`;

export default GlobalStyle;