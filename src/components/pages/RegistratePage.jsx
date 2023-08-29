import React from 'react'
import { Button, CheckBox, ContainerSignIn, WrapCheck, WrapIcons, WrapInput, WrapRightSn, WrapSignIn } from '../style/SignInPage.style'
import { LiaTimesSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'




const RegistratePage = () => {
  return (
    <ContainerSignIn >
        <WrapSignIn style={{height:'53%'}}>
            <WrapInput>
       <div style={{display:'flex', justifyContent:'space-between'}}> <h1>REGISTRATE</h1> <Link to='/signin'><LiaTimesSolid style={{fontSize:'30px'}}/></Link> </div>
            <p>Email</p>
        <input type="email" placeholder='Your email' />
        <p>Password</p>
        <input type="password" placeholder='Your password' />
        <p>Repeat your password</p>
        <input type="password" placeholder='Your password' />
        </WrapInput>
        <WrapCheck>
            <CheckBox>
                <input 
                 type="checkbox" />
                <label htmlFor=""> Keep me logged in</label>
                </CheckBox> 
          
        </WrapCheck>
   


            <Button >REGISTRATE</Button>
        </WrapSignIn>
    </ContainerSignIn>
  )
}

export default RegistratePage