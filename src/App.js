
import './App.css';
// import {Alert} from './Components/Alert';
import {Navbar} from './Components/Navbar';
import { Route, BrowserRouter as  Router,Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';

const App=()=> {

  const[isLoggedIn,setIsLoggedIn]=useState(false);


  const handleLogin=()=>{
    setIsLoggedIn(true);
  }

  
  // const [mode,setMode]=useState('light');
  // //whether dark mode is enable or not...

  // const [alert, setAlert] = useState(null);

  // const toggleMode=()=>{
  //   if(mode==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor='#6f6969';
      
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor="white";
    
  //   }
  // }
  return (

    <>
    
    {!isLoggedIn?(
      <Login onLogin={handleLogin}/>
    ):(
      <Router>
        
      <Navbar title={"StudentAttendance"} />
        <div className="container my-3">

        <Routes>
          
          {/* /users-->Component-1
          /users/home-->-->Component-2 */}

          
        
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Login" element={<Login/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        
          
        </Routes>

           </div>     
        
      </Router>

)};

      {/* <Navbar title="Details" mode={mode} toggleMode={toggleMode}/> */}
    
      {/* <Alert alert={"This is Alert message"}/> */}

    

    </>
  );
}

export default App;
