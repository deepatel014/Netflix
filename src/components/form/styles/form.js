import styled from "styled-components/macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div``;

export const Base = styled.div``;

export const Error = styled.div``;

export const Title = styled.h1``;

export const TextSmall = styled.p``; 

export const Text = styled.p``; 

export const Link  = styled(ReachRouterLink)`
    color:white;
    text-decoration: none;

    &hover {
        text-decoration: underline;
    }
`; 

export const Input  = styled.div``; 

export const Submit = styled.div``;