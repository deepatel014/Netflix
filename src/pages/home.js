import React from "react";
import JumbotronContainer from "../containers/jumbotron";
import FaqsContainer from "../containers/faqs";
import FooterContainer from "../containers/footer";
import HeaderContainer  from "../containers/header";
import { OptForm } from "../components";
export default function Home(){
    return(
        <>
        <HeaderContainer>
            <OptForm>
                <OptForm.Input placeholder = "Enter Email Address Here...."/>
                <OptForm.Button>Try It Now</OptForm.Button>
                <OptForm.Break/>
                <OptForm.Text>Ready to Watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>
        </HeaderContainer>
        <JumbotronContainer/>
        <FaqsContainer/>
        <FooterContainer/>
        </>
    )
}