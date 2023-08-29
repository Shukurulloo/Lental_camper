import React from 'react'
import { Button, CheckBox, ContainerSignIn, WrapCheck, WrapIcons, WrapInput, WrapRightSn, WrapSignIn } from '../style/SignInPage.style'
import { SiNaver } from "react-icons/si";
import { BsGoogle} from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
import { Link } from 'react-router-dom';



const SignInPage = () => {
  return (
    <ContainerSignIn>
        <WrapSignIn>
            <WrapInput>
        <h1>Sign in</h1>
            <p>Email</p>
        <input type="email" placeholder='Your email' />
        <p>Password</p>
        <input type="password" placeholder='Your password' />
        </WrapInput>
        <WrapCheck>
            <CheckBox>
                <input 
                 type="checkbox" />
                <label htmlFor=""> Keep me logged in</label>
                </CheckBox> 
            <WrapRightSn> <h4>Forget your password ?</h4></WrapRightSn>
        </WrapCheck>
        <Button>SIGN IN</Button>
        <div class="divider">OR</div>

        <WrapIcons>
            <div className='bgNaver'>  
            <SiNaver style={{color:'white' , width:'28.7px', height:'18.4px'}}/>
            </div>
            <div className='bgGoogle'>
            <BsGoogle style={{color:'white' , width:'28.7px', height:'23.4px'}}/>
             </div>
            <div className='bgKakao'> 
            <RiKakaoTalkFill style={{ width:'32px', height:'33px'}}/> 
            </div>
        </WrapIcons>
            <Link to='/registrate' style={{textDecoration:'none'}}><Button cl='#006DAB' bg='#fff' br='1px solid #006DAB'>CREATE ACCOUNT</Button></Link>
        </WrapSignIn>
    </ContainerSignIn>
  )
}

export default SignInPage