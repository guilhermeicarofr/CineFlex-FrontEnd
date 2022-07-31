import styled from 'styled-components';

export default function SessionFooter({img, title, ...otherProps}) {
    return (
        <SessionFooterContainer>
            <div>
                <img src={img} alt='' />
            </div>
            <span>
                <h3>{title}</h3>
                <h3>{otherProps.weekday}{otherProps.weekday ? ' - ' : ''}{otherProps.time}</h3>
            </span>
        </SessionFooterContainer>
    );
}

const SessionFooterContainer = styled.footer`
    width: 100%;
    height: 115px;
    position: fixed;
    bottom: 0px;
    background-color: #DFE6ED;
    border-top: 1px solid #9EADBA;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 14px 10px;
    div {
        width: 64px;
        height: 89px;
        padding: 8px;
        background-color: #FFFFFF;
        border-radius: 2px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 14px;
        img {
            width: 48px;
            height: 72px;
        }
    }
    h3 {
        font-size: 26px;
        font-weight: 400;
    }
`;