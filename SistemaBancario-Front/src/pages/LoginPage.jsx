import axios from 'axios'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../Index'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Swal from 'sweetalert2'

export const LoginPage = () => {

    const navigate = useNavigate();
    const { setLoggedIn, setDataUser, dataUser } = useContext(AuthContext);
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const login = async (e) => {
        try {
            e.preventDefault()
            const { data } = await axios.post('http://localhost:3200/user/login', form)
            if (!data.username || !data.password) {
                Swal.fire({
                    icon: 'error',
                    title: 'Check that all fields are complete'
                })
            }
            if (data.token) {
                setLoggedIn(true)
                localStorage.setItem('token', data.token)
                setDataUser({
                    id: data.userLogged.id,
                    name: data.userLogged.name,
                    username: data.userLogged.username,
                    DPI: data.userLogged.DPI,
                    adress: data.userLogged.adress,
                    phone: data.userLogged.phone,
                    email: data.userLogged.email,
                    work: data.userLogged.work,
                    salary: data.userLogged.salary,
                    role: data.userLogged.role
                })
                Swal.fire({
                    icon: 'success',
                    title: data.message,
                })
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: err.response.data.message,
            })
        }
    }

    useEffect(() => {
        if (dataUser.role == 'ADMIN') {
            navigate('/home')
        } else if (dataUser.role == 'CLIENT') {
            navigate('/home')
        }
    }, [dataUser])
    
    return (
        <>
            <div className="split-screen a b">
                <div className="left">
                    <section className="copy">
                        <h1 style={{ fontSize: 80 }}>CashTrust</h1>
                        <p style={{ fontSize: 30 }} >Sistema Bancario</p>
                    </section>
                </div>
                <div className="right">
                    <form action="">
                        <section className="copy">
                            <h2>Login</h2>
                            <div className="login-container">
                            </div>
                        </section>
                        <div className="input-container name">
                            <label htmlFor="username">Email / Username</label>
                            <input onChange={handleChange} type="text" id='username' name='username' />
                        </div>
                        <div className="input-container password">
                            <label htmlFor="password">Password</label>
                            <input onChange={handleChange} type="password" id='password' name='password' />
                        </div>
                        <button onClick={(e) => login(e)} className="signin-btn" type='submit'>Sign In</button>
                        <section className="copy legal">
                            <p><span className="small">By continuing, you agree to accept our <br />
                                <a href="#">Privacy Policy </a>
                                &amp;
                                <a href="#"> Terms of Services</a>.
                            </span></p>
                        </section>
                    </form>
                </div>
            </div>
        </>
    )
}