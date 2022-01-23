import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --green-text: #1abc9c;
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
        color: black;
    }
`;

export default GlobalStyle;