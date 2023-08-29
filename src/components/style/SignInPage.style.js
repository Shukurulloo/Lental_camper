import { styled } from "styled-components";


export const ContainerSignIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: #FAFAFA;
`
export const WrapSignIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
 

    width: 32%;
    height: 62%;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    padding: 45px  ;


.divider {
    margin-top: 20px;
    color: #6D6D6D;
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    align-items: center;
  }
  
  .divider::before, .divider::after {
    flex: 1;
    content: '';
    padding: 1px;
    background: rgba(55, 55, 55, 0.15);
    margin: 5px 14px 5px;
    
  }

`


export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 27px;
    border: none;
    border-radius: 10px;
    background-color: ${({bg}) => bg || "var(--blue, #006DAB)"};
    height: 50px;

    color: ${({cl}) => cl || '#FFF'};
    border: ${({br}) => br || 'none'} ;
    font-family: Open Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
        transform: scale(0.98);
    }
`

export const WrapInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    

    h1{
    color: var(--text, #373737);
    font-family: Open Sans;
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 25px;
}
p{
    color: rgba(55, 55, 55, 0.80);
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0 0 10px 10px;
}
input{
    margin-bottom: 19px;
    border: none;
    padding-left: 13px;
    border-radius: 10px;
    height: 50px;
    background: rgba(55, 55, 55, 0.10);

    color: rgba(55, 55, 55, 0.60);
    font-family: Open Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}


`

export const WrapCheck = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    
`
export const CheckBox = styled.div`
    display: flex;
    width: 100%;
  

input{
    width: 23px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 5px;
    background: rgba(55, 55, 55, 0.15);
    cursor: pointer;
}
label{
    color: #373737;
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 5px;
}
`
export const WrapRightSn= styled.div`
    display: flex;
    justify-content: right;
    width: 100%;
  
h4{
    color: #373737;
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`
export const WrapIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 20px;
div{
    &:hover{
        opacity: 0.9;
        transform: scale(0.95);
        cursor: pointer;
    }
}
.bgNaver{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    background-color: #039600;
    border-radius: 50%;
}
.bgGoogle{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    background-color: #BC0000;
    border-radius: 50%;
    margin-left: 12px;
}
.bgKakao{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    background-color: #FFC700;
    border-radius: 50%;
    margin-left: 12px;
}
     `