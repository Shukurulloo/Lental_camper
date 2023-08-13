import styled from 'styled-components'


export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;



select{
    width:177px;
    height:35px;
    border:1px solid #373737;
    border-radius: 5px;
    cursor:pointer;
}
h2{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`


export const WrapItems = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;

border-bottom: 1px solid rgba(55, 55, 55, 0.15);


`
export const  ItemMini  = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid rgba(55, 55, 55, 0.15);
width: 100%;
padding: 30px 0;

h3{
    color: rgba(55, 55, 55, 0.80);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 2.5px;
}
h4{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
h5{
    color: rgba(55, 55, 55, 0.70);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 15px;
}
p{
    color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 16.5px; 
}
`
export const WrapLeft = styled.div`
display: flex;
flex-direction: column;
flex: 3;
padding-bottom: 60px;


div{
    display: flex;
    flex-direction: column;
border-bottom: 1px solid rgba(55, 55, 55, 0.30);
padding: 25px 25px 10px ;
width: 90%;
;
}
p{
    
    color: rgba(55, 55, 55, 0.50);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
h3{
    color: #373737;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

`
export const WrapRight = styled.div`
display: flex;
flex-direction: column;
flex: 2;
padding: 0px 0 30px 20px;

div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid rgba(0, 109, 171, 0.10);
    background: #FFF;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
}
h1{
    color: var(--text-color, #023047);
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 31.2px */
margin-bottom: 15px;
}
input{
    width: 85%;
    height: 50px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--text, #373737);
    opacity: 0.05;
    background: var(--text, #373737);
    color: red;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
    margin-top: 10px;
}
textarea{
    margin-top: 10px;
    width: 85%;
    height: 120px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--text, #373737);
    opacity: 0.05;
    background: var(--text, #373737);
}

`



export const QuestionsLeft = styled.div`
display: flex;
flex-direction: column;
flex: 3;

div{
    display: flex;
    align-items: center;
width: 90%;
height: 60px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
justify-content: space-between;
margin-top: 20px;
}
h3{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding-left: 20px;
}


`
export const QuestionsRight = styled.div`
display: flex;
flex-direction: column;
flex: 2;
padding: 20px 0 30px 0;

div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid rgba(0, 109, 171, 0.10);
    background: #FFF;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
}
h1{
    color: var(--text-color, #023047);
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 31.2px */
margin-bottom: 15px;
}
input{
    width: 85%;
    height: 50px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--text, #373737);
    opacity: 0.05;
    background: var(--text, #373737);
    color: red;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
    margin-top: 10px;
}
textarea{
    margin-top: 10px;
    width: 85%;
    height: 120px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--text, #373737);
    opacity: 0.05;
    background: var(--text, #373737);
}


`
export const MapLeft = styled.div`
display: flex;
align-items: center;
flex-direction: column;
flex: 3;
margin-right: 69px;
img{
    width: 800px;
 
}
.left{
    padding: 15px 0 25px 24px;
    display: flex;
flex-direction: column;
flex: 1; 
height: 109px;
flex-shrink: 0;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
}
.right{
    padding: 15px 0 21px 24px;
    margin-left: 30px;
    display: flex;
flex-direction: column;
flex: 1; 
height: 109px;
flex-shrink: 0;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
}

p{
    color: #666;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 18.2px */
}
h4{
    margin-top: 9px;
    color: var(--txt-color, #1E1C1C);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 130%; /* 23.4px */
}
`
