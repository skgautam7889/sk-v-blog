import React, { useState } from "react";
import { auth } from "../../../firebase";
import { useRouter } from 'next/router'
interface loginForm {
    name: string,
    email: string,
    password: string
}
export default function RegisterForm() {
    const [dis, setDis] = useState(false);
    const router=useRouter()
    const [loginForm, setLoginForm] = useState<loginForm>({
        name: '',
        email: '',
        password: '',
    })
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target;
        console.log("name===>", name);
        console.log("name===>", value);
        setLoginForm((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    }
    const handleRegistrationForm = async (event: any) => {
        event.preventDefault();
        setDis(true)
        try {
            const result:any = await auth.createUserWithEmailAndPassword(loginForm.email, loginForm.password)
            await result?.user.updateProfile({
                name: loginForm.name
            })
            console.log("result===>",result);
            // alert(`Welcome ${result.user.name}`)
            setDis(false)
              router.push('/login')

        } catch (err) {

            alert(err)
            setDis(false)
        }
        
    }
    return (
        <>
            <div className="card p-3">
                <h4 className="text-center">Register Now</h4>
                <form onSubmit={handleRegistrationForm}>
                    <div className="form-group">
                        <label htmlFor="">Name:</label>
                        <input type="text" placeholder="Enter Name" name="name" className="form-control" value={loginForm.name} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email:</label>
                        <input type="email" placeholder="Enter Email" name="email" className="form-control" value={loginForm.email} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password:</label>
                        <input type="password" placeholder="Enter Password" name="password" className="form-control" value={loginForm.password} onChange={handleInputChange} />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-success">Submit</button>
                        {/* <button className={dis ? "btn btn-success disable" : "btn btn-success"} disabled={dis}>Submit</button> */}
                    </div>
                </form>
            </div>
        </>
    )
}