import axios from 'axios'
import './style.css'
import React, {useState } from 'react';

const Login = ({onLogin}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const  handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here
    try{
        const response = await axios.post('https://localhost:7033/api/Login',{userId,password});
      console.log(response);
      const aceesToken=response.data;
      localStorage.setItem("acessToken",aceesToken);
      
      onLogin();
    }
    catch(error){
     console.log("err");
    }
     
      
  };

  return (
      <>  
      <div className='login templete d-flex justify-content-center align-items-center 100-w vh-100 bg-primary '>
      <div className='form_container p-5 rounded bg-white'>
        <form className="row g-1" onSubmit={handleLogin}>
            <h3 className='text-center'>Sign In</h3>
                  <div className="mb-2">
                    <label htmlFor="userId" className="form-label">UserId</label>
                    <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)} className="form-control" id="userId" placeholder='Enter your User Id'/>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="password" placeholder='Enter your Password '/>
                  </div>
                 <div className="mb-2">
                  <div className="form-check">
                    <input className="custom-control custom-checkbox" type="checkbox" id="gridCheck"/>
                    <label className="custom-input-label ms-2" htmlFor="gridCheck">
                      Remember me
                    </label>
                </div>
                </div>
                  <div className="mb-2">
                    <button type="submit" className="btn btn-primary mt-3">Login</button>
                  </div>
           </form>
        </div>
    </div>
    </>
  );
};
 
export default Login;