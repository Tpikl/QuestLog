import styled from 'styled-components';

const StyledEntry = styled.div`
    margin: 5px;
    display: inline-block;

    .entryBlock {
        display: flex;
        flex-direction: column;
        padding: 10px;
        border: 2px solid ${({completed}) => completed ? 'black' : 'white'};
        border-radius: 5px;
    }
    :hover .header{
        background-color: #eee;
        border-bottom: 1px black solid;
        padding-bottom: 4px;    //Cut the difference with border-bottom
    }
    :hover .hidden {   // Select all .hidden in .entry on hover
        display: block;
    }

    .header {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        transition: all 0.5s;
    }

    .controls {
        margin-left: 35px;
    }

    .hidden {
        display: none;
        transition: all 0.5s;
    }

    .description {
        padding: 5px;
    }

    ${({completed}) => completed ? `
        .entryText {
            text-decoration: line-through;
        }`
    : ''}
`;
export default StyledEntry;