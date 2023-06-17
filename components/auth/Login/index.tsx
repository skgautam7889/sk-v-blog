import { useRouter } from "next/router";
import React, { useState } from "react"
import { auth } from "../../../firebase";
interface loginForm {
    email: string,
    password: string
}
export default function Login() {
    const [loginForm, setLoginForm] = useState<loginForm>({
        email: '',
        password: '',
    })
    const router=useRouter()
    const [dis, setDis] = useState(false);
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target;
        console.log("name===>",name);
        console.log("name===>",value);
        setLoginForm((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    }
    const onsub=async(e:any)=>{
        e.preventDefault()
        setDis(true)
        try{
            const result = await auth.signInWithEmailAndPassword(loginForm.email,loginForm.password)
          if(result.user)
          {
            
            alert(`Welcome ${result.user.displayName}`)
            router.push('/createblog')
            setDis(false)
          }
          
          }catch(err){
              
           alert(err) 
           setDis(false)  
          }
          
    }

    console.log("loginForm====>", loginForm);
    return (
        <div className="card p-3">
            <h4 className="text-center">Login Now</h4>
            <form onSubmit={onsub}>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="email" placeholder="Enter Email" name="email" className="form-control" value={loginForm.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input type="password" placeholder="Enter Password" name="password" className="form-control" value={loginForm.password} onChange={handleInputChange} />
                </div>
                <div className="text-center">
                    {/* <button className="btn btn-success">Submit</button> */}
                    <button className={dis ? "btn btn-success disable" : "btn btn-success"} disabled={dis}>Submit</button>
                </div>
            </form>
        </div>
    )
}

function setRechargeForm(arg0: (prevProps: any) => any) {
    throw new Error("Function not implemented.");
}
