import React, { useState } from 'react'
import { useRouter } from 'next/router'
import MainLayout from '../components/Layouts/MainLayout'
import Login from '../components/auth/Login'
// interface loginForm{
//     email:String,
//     password:String
// }
const login = () => {
    // const [loginForm, setLoginForm] = React.useState<loginForm>({
    //     email:'',
    //     password:'',
    // })
    return (
        <>
            <MainLayout title='Login ! User Login'>
                <br />
                <div className="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-10 col-12 mx-auto">
                               <Login />
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