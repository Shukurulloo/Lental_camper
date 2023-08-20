import styled from "styled-components";

export const CarouselItems = styled.div`
display: flex;
flex-direction: column;
color: var(--text, #373737);
line-height: normal;
align-items: center;
justify-content: center;
cursor: pointer;


h5{
    color: var(--text, #373737);
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    margin: 15px 0;
}

select{
    font-size: 16px;
    font-weight: 500;
    border: none;
    background-color: transparent;
    margin-top: 15px;
    cursor: pointer;
    width: 170px;
}

`

export const WrapNew = styled.div`
display: flex;
margin-left: 250px;
align-items: center;
justify-content: center;
background-color:#ff9800;
font-size: 14px;
padding: 4px;
text-align: center;
position: absolute;
border-radius: 25px;
color: white;
width: 54px;
height: 54px;
flex-shrink: 0;


`

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 299px;
height: 45px;
background-color:#006DAB;
clip-path: polygon(13% 0, 87% 0, 82% 100%, 8% 100%);
border: none;


a{
    text-align: center;
    position: relative;
    color: #FFF;
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    transition: 0.5s;
    padding-right: 12px;

}
`