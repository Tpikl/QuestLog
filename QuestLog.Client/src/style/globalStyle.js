import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        background-color: ${({theme}) => theme.primaryLight};
    }
    h1, h2, h3, h4, h5 {
        margin: 0;  // No header is gonna have rogue margins in my projects!
    }

    // Flex things
    .flexCenter {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .fancyBtn {
        padding:0.35em 1.2em;
        color:#000;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 3px;
        text-align:center;
        text-decoration:none;
        font-size: 13px;
        transition: all 0.5s;
    }
    .fancyBtn:hover {
        color:#FFF;
        background-color:darkgreen;
        border: 1px solid darkgreen
    }

    // Other
    .pointer {
        cursor: pointer;
    }
    .pillar {
        height: 100%;
        margin: 40px 10% 0;
    }

`;

export default GlobalStyle;