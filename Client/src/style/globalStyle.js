import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle
`
    html {
        background-color: ${({theme}) => theme.primaryLight};
    }
    h1, h2, h3, h4, h5 {
        margin: 0;  // No header is gonna have rogue margins in my projects!
    }

    .addBtn {
        color: ${({theme}) => theme.primaryGreen};
    }
    .deleteBtn {
        color: ${({theme}) => theme.primaryRed};
    }

    .titleHeader {
        display: flex;
        padding: 5px 1px;
        transition: all 0.5s;
    }.titleHeader:hover {
        background-color: #AAA;
    }
`;

export default GlobalStyle;