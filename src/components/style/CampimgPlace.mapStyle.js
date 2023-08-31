import { styled } from "styled-components";


export const ContainerMap = styled.div`
display: flex;
align-items: center;
width: 100%;
flex-direction: column;
height: 100%;
`

export const WrapImg = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 40px 60px 40px 70px;
`
export const LocationWrap = styled.div`
display: flex;
align-items: left;
justify-content: center;
width: 100%;
flex-direction: column;
padding: 0 70px;


h1{
    color: #000;
    font-family: Montserrat;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.borderBottom{
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    border-bottom: 1px solid  rgba(55, 55, 55, 0.20);
    padding-bottom: 15px;
    margin: 15px 0 ;
    h4{
        color: var(--blue, #006DAB);
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-right: 20px;
    }
    button{
        border-radius: 5px;
        border: 1px solid var(--sariq, #FF7A00);
        padding: 4px 18px;
        background: #FAFAFA;


        color: var(--sariq, #FF7A00);
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
}
`
export const AddressWrap = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    width: 100%;


.left{
    display: flex;
    align-items: left;
    flex-direction: column;

 }
h3{
    text-align:center;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 10px;
}
a{
    text-align:center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 10px;
}

.right{
    margin-left: 100px;
    display: flex;
    align-items: left;
    flex-direction: column;
}
h4{
        color: var(--blue, #006DAB);
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-top: 20px;
    }
p{
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
    margin-bottom: 50px;

    
}
`
