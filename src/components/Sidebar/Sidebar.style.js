import styled from "styled-components";


export const SideBarStyle = styled.div`
flex: 1;
color: var(--text, #373737);
padding: 85px 28px 0 0;

`

export const Col = styled.div`
display: flex;
flex-direction: column;
padding-left: 13px;


label{
    font-size: 14px;
    font-weight: 500;
    line-height: 100%; /* 14px */
}

input{
    width:91px;
    height:36px;
    border-radius: 10px;
    border: 1px solid rgba(55, 55, 55, 0.60);

}
`

export const Text = styled.div`
font-size: 18px;
font-weight: 600;
padding-bottom: 15px;
line-height: 100%; /* 18px */
border-bottom: 1px solid rgba(55, 55, 55, 0.30);
`
export const Line = styled.div`
margin-top: 15px;
border-bottom: 1px solid rgba(55, 55, 55, 0.30);
`
export const Form = styled.div`
padding-top: 15px;






`

export const FormGroup = styled.div`
  display: flex;
    align-items: center;
    margin: 10px 0;

input{
    width: 22px;
    height: 25px;
    border-radius: 8px;
    border: 1px solid #666;
    background: #FFF;
    
}
label{
    margin-left: 10px;
    color: var(--text, #373737);
    font-size: 14px;
    font-weight: 500;
    line-height: 100%; /* 14px */
    
}
`
export const Button = styled.button`
width: 115.804px;
height: 38.968px;
flex-shrink: 0;
color: #FFF;
font-weight: 700;
font-size: 16px;
border:none;
border-radius: 60px;
background: ${({bg})=>bg || 'var(--sariq, #FF7A00)'} ;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
margin-top:20px;
cursor: pointer;

&:hover{
    opacity:0.9;
    transform: scale(0.98);
    color: black;
}
`
export const WrCompare = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin-top:20%;


h4{
    color: var(--blue, #006DAB);
font-family: Open Sans;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding-left: 10px;
}
div{
    display: flex;
align-items: flex-start;
justify-content: center;
  
}
img{

}
`