import styled from 'styled-components';

const StyledEntryList = styled.div`
    .entryList {
        margin: 1px;
        padding-bottom: 5px;
    }
    .entryList:hover {
        margin: 0;
        border: 1px solid #AAA;
    }

    .titleHeader {
        display: flex;
        padding: 5px 1px;
        transition: all 0.5s;
    }
    .titleHeader:hover {
        background-color: #AAA;
    }

    .entries {
        padding:  0 10px;
        display: flex;
        flex-wrap: wrap;
    }

    ${({boldTitle}) => boldTitle ? `
        .title {
            font-weight: bold;
        }`
    : '' }
`;
export default StyledEntryList;