import styled from 'styled-components';

const StyledWeekly = styled.div`
    .weekSpread
    {
        display: flex;
    }
    .weekly {
        padding: 5px;
        margin-left: 25px;
        display: inline-flex;
        flex-direction: column;
        border-left: 2px solid #555;
        border-right: 1px solid #555;
        flex-basis: 100%;
    }
    .side {
        padding: 5px;
        flex-basis: 100%;
        border-left: 1px solid #555;
        border-right: 2px solid #555;
    }
`;
export default StyledWeekly;