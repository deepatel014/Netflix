import React from "react";

import JumbotronContainer from "../containers/jumbotron";
import FaqsContainer from "../containers/faqs";
import FooterContainer from "../containers/footer";
import HeaderContainer  from "../containers/header";
import { OptForm } from "../components";
import Feature from "../components/feature";

export default function Home(){
    return(
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>
                    Unlimited films, TV programes and more.
                </Feature.Title>
                <Feature.SubTitle>
                    Watch anywhere. Cancel at any time.
                </Feature.SubTitle>
            
            <OptForm>
                <OptForm.Input placeholder = "Enter Email Address Here...."/>
                <OptForm.Button>Try It Now</OptForm.Button>
                <OptForm.Break/>
                <OptForm.Text>Ready to Watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>
            </Feature>
        </HeaderContainer>
        <JumbotronContainer/>
        <FaqsContainer/>
        <FooterContainer/>
        </>
    )
}