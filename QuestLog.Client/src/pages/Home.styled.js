import styled from 'styled-components';

const StyledHome = styled.div`
    text-align: center;

    .monthGroup {
        margin: 10px;
        padding: 5px;
        display: inline-flex;
        flex-direction: column;
        border: 2px dashed ${({theme}) => theme.primaryDark};
    }
    .monthLink {
        font-weight: bold;
        font-size: 18px;
    }
    a {
        margin: 0;
        padding: 0;
    }
`;
export default StyledHome;