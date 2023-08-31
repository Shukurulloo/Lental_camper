import styled from "styled-components";

export const Title = styled.div`
display: flex;
justify-content: center;
font-weight: 600;
padding-top: 40px;
margin-bottom: 30px;

h2{
    font-size:35px;
    color:'#373737';
    padding-bottom: 5px;
    border-bottom: 3px solid #FF7A00;
}
`

export const Flex = styled.div`
display: flex;
padding: 30px 129px 72px 70px;

`
export const FlexLeft = styled.div`
display: flex;
flex: 5;

`

export const FlexRight = styled.div`
display: flex;
flex-direction: column;
flex: 2;
overflow-y: scroll;
height: 550px;
`

export const DescriptionTitle = styled.div`
padding-top: 30px;
line-height: normal;



h2{
    color: var(--text, #373737);
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 15px;
}

span{
    font-size: 17px;
    font-weight: 500;    
}

p{
    font-size: 15px;
    font-weight: 400;
    margin: 10px 0 155px;
}
`

export const FormAccount = styled.div`

`

export const FormCard = styled.div`

`

export const Text = styled.div`
    color: #000;
    font-size: 25px;
    font-weight: 600;
    line-height: normal;
    margin: 50px 0 30px;
`
export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
    line-height: normal;

label{
    color: rgba(55, 55, 55, 0.80);
    font-size: 16px;
    font-weight: 600;
    padding-left: 10px;
}

input{
    width: 311px;
    height: 50px;
    color: rgba(55, 55, 55, 0.60);
    font-size: 15px;
    font-weight: 400;
    border-radius: 10px;
    background: rgba(55, 55, 55, 0.10);
    border: none;
    margin: 10px 0 20px;
    padding-left: 20px;

}

select{
    width: 311px;
    height: 50px;
    color: rgba(55, 55, 55, 0.60);
    font-size: 15px;
    font-weight: 400;
    border-radius: 10px;
    background: rgba(55, 55, 55, 0.10);
    border: none;
    margin: 10px 0 20px;
    padding: 0 20px;
}
`
export const CarouselWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 811px;
    height: 476px;
    padding: 0 20px;
    border-radius: 10px;
    background: #FFF;
    /* btn sh */
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

`
export const ArrowLeft = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
background: #006DAB;
border-radius: 50%;
`
export const CarouselInner = styled.div`
    height: 90%;
    width: 90%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: end;
    justify-content:center;
`
export const CostTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    width: 350px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    background: rgba(95, 55, 55, 0.10);
    /* btn sh */
    box-shadow: 10px 0px 5px 0px rgba(0, 0, 0, 0.10);

h5{
    color: var(--text, #373737);
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin-right: 10px;
}
`

export const ArrowRight = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #006DAB;
    border-radius: 50%;
`