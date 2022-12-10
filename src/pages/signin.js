import React, {useState} from "react";
import FooterContainer from "../containers/footer";
import HeaderContainer  from "../containers/header";
import { Form } from "../components/index";

export default function Signin(){
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    // check form input elements are valid
    const isInvalid = password === '' || emailAddress === '';
    const handleSignIn = (event) => {
        event.preventDefault();
        // Firebase work in here
    }
    // email and password 
    

    return(
        <>
        <HeaderContainer>Hello from the signin!
        <Form>
            <Form.Title>Sign IN</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit = {handleSignIn} method = "POST">
                <Form.Input 
                    placeholder= "Email Address"
                    value = {emailAddress}
                    onChange = {({target}) => setEmailAddress(target.value)} />
                <Form.Input 
                    placeholder= "Password"
                    type = "password"
                    autoComplete = "off"
                    value = {password}
                    onChange = {({target}) => setPassword(target.value)} />
                <Form.Submit disabled = {isInvalid} type= "submit" >Sign IN</Form.Submit>
            </Form.Base>
        </Form>
        </HeaderContainer>
        
        <FooterContainer/>
        </>
    )
}