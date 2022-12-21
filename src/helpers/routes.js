import React from "react";
import {Outlet, Navigate} from "react-router-dom";
import * as ROUTES from '../constants/routes';

// const auth = false;

export  function IsUserRedirect(auth){
    // const navigate = useNavigate()
    return(
        auth ? <Navigate to = {ROUTES.BROWSE}/> : <Outlet/>
    )
}

export function ProtectedRedirect(auth){
    // const [auth,setAuth] = useState(false);
    return(  
        auth ? <Outlet/> : <Navigate to={ROUTES.SIGN_IN}/>
    )
}