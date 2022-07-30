import styled from 'styled-components';

export default function Movie({img}) {
    return (
        <MovieContainer>
            <img src={img} alt='' />
        </MovieContainer>
    );
}

const MovieContainer = styled.li`
    
    width: 145px;
    max-height: 290px;
    padding: 8px;
    margin: 11px 15px;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.2);
    img {
        width: 129px;
        height: 193px;
    }
`;