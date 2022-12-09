import React, {useState} from "react";
import FooterContainer from "../containers/footer";
import HeaderContainer  from "../containers/header";
import { Form } from "../components";

export default function Signin(){
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    // check form input elements are valid
    // email and password 

    return(
        <>
        <HeaderContainer>Hello from the signin!</HeaderContainer>
        <Form>
            <Form.Title>Sign IN</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
        </Form>
        <FooterContainer/>
        </>
    )
}