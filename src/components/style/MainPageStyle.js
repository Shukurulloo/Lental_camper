import styled from "styled-components";




export const ContainerMain = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
overflow-x: hidden;



h2{ 
    color: var(--text, #373737);
    font-family: Gilroy;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-bottom: 2px solid red;
}
`
export const ImgWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
width: 100%;
margin-top: 100px;


h4{

color: var(--text, #373737);
font-family: Gilroy;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
border-bottom: 3px solid #FF7A00;
margin-bottom: 80px;
}

`

export const VideosWrap = styled.div`
display: grid;
grid-template-rows:${({gridrw}) => gridrw || ''};
grid-template-columns:${({gridcl}) => gridcl || ''} ;
gap: 20.1px;
width: 100%;
margin-top:40px;
padding-left:${({pdleft}) => pdleft || '1.3%'};
margin-bottom:${({mgbt}) => mgbt || '0%'};



img{
    width:100%;
}

`
export const BlogsWrap = styled.div`
display: flex;
flex-direction: column;
width:100%;
align-items: center;
justify-content: center;
`
export const LoremWrapLeft = styled.div`
display:flex;
flex-direction:column;
align-items: left;
justify-content: start;
flex:1;
height: 550px;
margin-left: 2%;

h1{
    color: #000;
font-family: Montserrat;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.red{
    color: var(--sariq, #FF7A00);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin:35px 0 10px 0;
}
p{
    color: #000;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 380px;

}

`
export const LoremWrapRight = styled.div`
display:flex;
align-items:center;
justify-content: center;
flex:1;
`

