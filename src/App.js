import React from "react";
import { Route,Routes  } from "react-router-dom";
import { Home , Browse, Signin,Signup } from "./pages/index";
import * as ROUTES from './constants/routes';
import {IsUserRedirect, ProtectedRedirect} from './helpers/routes';
import {useAuthListener} from './hooks';

function App() {
  const {user} =useAuthListener();
  console.log(user);
  return (
    
        <Routes>
            
           <Route element={<IsUserRedirect auth={user}/>}>
              <Route exact path={ROUTES.SIGN_IN} element = {<Signin/>}/>
              <Route exact path={ROUTES.SIGN_UP} element = {<Signup/>}/>
              <Route user={user} path={ROUTES.HOME} element={<Home/>} />
           </Route>
            
            <Route element={<ProtectedRedirect auth={user}/>}>
            <Route path={ROUTES.BROWSE} element={<Browse/>} exact/>
            </Route>
           
            
           
        </Routes>
      
      
  );
}

export default App;
