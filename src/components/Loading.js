import styled from 'styled-components';

import loading from './../assets/images/loading.gif';

export default function Loading() {
    return (
        <LoadingImg>
            <img src={loading} alt='' />
        </LoadingImg>
    );
}

const LoadingImg = styled.div`
    position: fixed;
    top: 67px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 300px;
        height: 150px;
    }
`;