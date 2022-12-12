import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import { FirebaseContext} from "../context/firebase";
import FooterContainer from "../containers/footer";
import HeaderContainer  from "../containers/header";
import { Form } from "../components/index";
import * as ROUTES from "../constants/routes";

export default function Signin(){
    const history = useNavigate();
    const {firebase} = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // check form input elements are valid
    const isInvalid = password === '' || emailAddress === '';
    const handleSignIn = (event) => {
        event.preventDefault();
        // Firebase work in here

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress,password)
            .then(()=>{
                // push to browse page
                history(ROUTES.BROWSE);
            })
            .catch((error)=>{
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
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
                <Form.Text>
                    New to netflix? <Form.Link to="/signup">Sign up now!</Form.Link>
                </Form.Text>
                <Form.TextSmall>This page is protected by google reCAPTCHA to ensure you're not a bot. Learn More.</Form.TextSmall>
            </Form.Base>
        </Form>
        </HeaderContainer>
        
        <FooterContainer/>
        </>
    )
}