import styled from "styled-components";

export const Container = styled.div`
padding: 10px 0px;
width: 100%;
position: relative;
/* display: flex;
justify-content: space-between;
align-items: center; */

.media-container{
    display: grid;
    grid-template-columns: auto auto auto auto;
    /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
    gap: 23px;
    width: 100%;
    justify-content: space-evenly;
    

    .media{
      
        width: 421px;
        height: 292px;
        border-radius: 20px;
        overflow: hidden;
        cursor: pointer;
    }

    .media :is(video, img) {
        height:100%;
        width:100%;
        object-fit: cover;
        transition: all 0.3s linear;

        &:hover{
            transform: scale(1.1);
        }
    }    
}

.popup-media{
    position:fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;

    :is(video, img) {
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    border-radius: 15px;
    max-width: 100%;
    min-height: 75%;
    object-fit: contain;


    }

    span{
        position: absolute;
        top: 5px;
        right: 20px;
        font-size: 50px;
        font-weight: bolder;
        z-index: 100;
        cursor: pointer;
        color: #fff;
        user-select: none;
    }
}


`