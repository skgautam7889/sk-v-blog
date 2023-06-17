import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import RegisterForm from "../components/auth/RegisterForm";
export default function Register() {
    return (
        <>
            <MainLayout title='Register ! User Register Form'>
                <br />
                <div className="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-10 col-12 mx-auto">
                                <RegisterForm />
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
            </MainLayout>
        </>
    )
}
