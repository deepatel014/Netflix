import React from "react";
import { Route,Navigate} from "react-router-dom";

export default function IsUserRedirect({user,loggedInPath,children,...rest}){
    return(
        <Route
            {...rest}
            render={()=>{
                if(!user){
                    return children;
                }

                if(user){
                    return(
                        <Navigate replace to={{pathname:loggedInPath,}}/>
                    );  
                }
                return null;
                }
            }   
        />
    )
}