import styled from 'styled-components';

export const StyledEntryList = styled.div
`
    .entryList {
        margin: 1px;
        padding-bottom: 15px;
    }.entryList:hover {
        margin: 0;
        border: 1px solid #AAA;
    }
    .entries {
        padding:  0 10px;
        display: flex;
        flex-wrap: wrap;
    }

    //DELETE SOON
    ${({boldTitle}) => boldTitle ? `
        .title {
            font-weight: bold;
        }`
    : '' }}
`;