import React, { useState } from 'react'
import { auth } from '../firebase'
import { useRouter } from 'next/router'
import MainLayout from '../components/Layouts/MainLayout'
interface loginForm{
    email:String,
    password:String
}
const login = () => {
    // const [loginForm, setLoginForm] = React.useState<loginForm>({
    //     email:'',
    //     password:'',
    // })
    return (
        <>
            <MainLayout>
                <br />
                <div className="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-10 col-12 mx-auto">
                                <div className="card p-3">
                                    <h4 className="text-center">Login Now</h4>
                                    <form >
                                        <div className="form-group">
                                            <label htmlFor="">Email:</label>
                                            <input type="email" placeholder="Enter Email" className="form-control" value="sk" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Password:</label>
                                            <input type="password" placeholder="Enter Password" className="form-control" value="ss" />
                                        </div>
                                        <div className="text-center">
                                            <button>Submit</button>
                                            {/* <button className={dis ? "btn btn-success disable" : "btn btn-success"} disabled={dis}>Submit</button> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
            </MainLayout>


        </>
    )
}

export default login