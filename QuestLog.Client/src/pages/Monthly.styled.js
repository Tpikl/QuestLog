import styled from 'styled-components';

const StyledMonthly = styled.div`

    .monthList {
        padding: 5px;
        margin: 0 100px;
        max-height: 75vh;
        overflow-y: auto;
        border-left: 2px solid black;
        border-right: 2px solid black;
    }
    .monthList::-webkit-scrollbar {
        width: 10px;
    }
    .monthList::-webkit-scrollbar-track {
        background: transparent;
    }
    .monthList::-webkit-scrollbar-thumb {
        border-radius: 20px;
        border: 1px solid black;
        background-color: darkolivegreen;
    }
`;
export default StyledMonthly;