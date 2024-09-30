import React, {useState} from 'react'

const Form = () => {
    const [fname, setFname]= useState('arbaz')
    const [lname, setLname]= useState('Arif')
    const [password, setPassword]= useState('')
    const [cpassword, setCpassword]= useState('')
    const [email, setEmail]= useState('arbaz@123')
    const [phone, setPhone]= useState('0343663667')
    const [postal, setPostal]= useState('0532')
    
    
    const formData = {
        first_name:fname,
        last_name:lname,
        password:password,
        c_password:cpassword,
        e_mail:email,
        phone:phone,
        postal:postal,
    }
    const Submitform=() =>{
        console.log("Form Data", formData)
    }
  return (
    <div className="wrapper">
    <div className="title">
      Registration Form
    </div>
    <div className="form">
      <div className="inputfield">
        <input type="text" className="input" placeholder="First Name" required  value={fname} onChange={(e)=>setFname(e.target.value)}/ >
      </div>  
      <div className="inputfield">
        <input type="text" className="input" placeholder="Last Name" value={lname} onChange={(e)=>setLname(e.target.value)} required />
      </div>  
      <div className="inputfield">
        <input type="password" className="input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
      </div>  
      <div className="inputfield">
        <input type="password" className="input" placeholder="Confirm Password" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} required />
      </div> 
      
      <div className="inputfield">
        <input type="text" className="input" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} required />
      </div> 
      <div className="inputfield">
        <input type="text" className="input" placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)} optional />
      </div> 
      <div className="inputfield">
        <input type="text" className="input" placeholder="Postal Code" value={postal} onChange={(e)=>setPostal(e.target.value)} />
      </div> 
      <div className="inputfield">
        <textarea className="textarea" placeholder="Address" defaultValue={""} />
      </div> 
      <div className="inputfield terms">
        <label className="check">
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
        <p>Agreed to terms and conditions</p>
      </div> 
      <div className="inputfield">
     <button onClick={Submitform}>Submit</button>
      </div>
    </div>
  </div>

  )
}

export default Form