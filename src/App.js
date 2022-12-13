import React from "react";
import { Route,Routes  } from "react-router-dom";
import { Home , Browse, Signin,Signup } from "./pages/index";
import * as ROUTES from './constants/routes';
import IsUserRedirect from './helpers/routes';

function App() {
  const user ={};
  return (
    
        <Routes>
        {/* //     <IsUserRedirect 
        //        user={user}
        //        loggedInPath={ROUTES.BROWSE}
        //        path = {ROUTES.SIGN_IN}
        //        exact
        //        >
        //       <Home/>
        //     </IsUserRedirect>  */}
           
            
                
                
          <Route exact path={ROUTES.HOME} element = {<Home/>}/>
          <Route exact path={ROUTES.BROWSE} element = {<Browse/>}/>
          <Route exact path={ROUTES.SIGN_IN} element = {<Signin/>}/>
          <Route exact path={ROUTES.SIGN_UP} element = {<Signup/>}/>
        </Routes>
      
      
  );
}

export default App;
