import React from 'react'
import { useNavigate } from "react-router-dom";

function First() {
    const navigate = useNavigate();
    const handlesubmit=()=>{
        navigate("/AddEmployee");
    }
  return (
    <div style={{marginLeft:"80%"}}>
      <button type="submit"  className="btn btn-primary"onClick={handlesubmit}>Create</button>
      
      <button type="submit" className="btn btn-primary" onClick={()=>navigate ("/update")}>Modify</button>
      
      <button type="submit" className="btn btn-primary">Query</button>
      
    </div>
  )
}

export default First