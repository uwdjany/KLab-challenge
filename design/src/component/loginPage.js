import React from "react";
import "./style.css"

const LoginPage =()=>{
    return(
        <>
<div>
<div >
<p>Learn to code by</p>
<p>watching others</p>

</div>
<div className="top-link">
<label className="btn-top"><span>Try it 7 days, </span>then $20/mo. thereafter/</label>
</div>
 

        <div className="input-text">
    
            <input placeholder="Jonathan"/>
            
            
            <input placeholder="Last Name"/>
            
            
            <input placeholder="Email Adrres"/>
        
            <input placeholder="Password"/>

            <button style={{padding:"20px", marginLeft:"1%",background:"green",width:"60%"}}> CLAIM YOUR FREE TRIAL</button>
            <p style={{marginLeft:"1%",color:"gray",marginTop:"2rem"}} >by Click the button you are agreeing to ours?<span style={{color:"red"}}>Terms and services</span></p>
            </div>
            </div>
        </>
    )
}

export default LoginPage