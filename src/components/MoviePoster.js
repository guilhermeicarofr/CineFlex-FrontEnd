import styled from 'styled-components';

export default function MoviePoster({img}) {
    return (
        <PosterContainer>
            <img src={img} alt='' />
        </PosterContainer>
    );
}

const PosterContainer = styled.li`
    width: 145px;
    max-height: 290px;
    padding: 8px;
    margin: 10px 15px;
    border: 1px solid #FFFFFF;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.2);
    img {
        width: 129px;
        height: 193px;
    }
`;