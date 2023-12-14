import React, { useState } from 'react'
import { SiberBar } from '../components/Sidebar/SiberBar'
import { useNavigate } from 'react-router-dom'
import { ModalTransder } from '../components/Modal/ModalTransder';
import { Link } from 'react-router-dom';
import backgrHead from '../assets/images/FADD.png';
import logo from '../assets/images/CashLogo.png';
import AboutU from '../assets/images/Au3.png'
import divisa from '../assets/images/divisa.png'
import users from '../assets/images/users.png'
import transc from '../assets/images/trans.png'
import { AuthContext } from '../Index';
import { useContext } from 'react';

export const AdminPage = () => {
    const navigate = useNavigate();

    const { dataUser } = useContext(AuthContext)

    const [showModalTransfer, setShowModalTransfer] = useState(false);

    const handleOpenModal = () => {
        setShowModalTransfer(true);
        console.log(showModalTransfer);
    }
    const handleCloseModal = () => {
        setShowModalTransfer(false);
    }

    return (
        <>
            {
                dataUser.role == "ADMIN" ? (
                    <>
                        <SiberBar />
                    </>
                ) : <></>
            }
            <main style={{ paddingTop: '5%' }}>
                <div style={{ backgroundImage: `url(${backgrHead})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: ' right' }}>
                    <div>
                        <h1 id='aXD' style={{ color: "#fff", fontSize: "5rem", marginBottom: "1rem", paddingLeft: '500px' }}>
                            CA$H TRUST <img id='aXD' src={logo} height='100em'></img>
                        </h1>
                        {
                            dataUser.role == 'CLIENT' ? (
                                <>
                                    <h2 style={{ color: "#fff", fontSize: "2rem", marginBottom: "2rem" }}>
                                        Justo, personal y sencillo!!
                                    </h2>
                                </>
                            ) : <></>
                        }
                        {
                            dataUser.role == 'ADMIN' ? (
                                <>
                                    <h2 style={{ color: "#fff", fontSize: "2rem", marginBottom: "2rem" }}>
                                        Welcome, Admin!!!!!!
                                    </h2>
                                    <div className="containerLog">
                                        <div>
                                            <Link to={'/create'} id='buttonn' className="btn log"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                            </svg></Link>
                                        </div>
                                    </div>
                                </>
                            ) : <></>
                        }
                    </div>
                </div>
            </main >
            <section id="about" className="py-5">
                <div className="container">
                    <div className="row">
                        <h2 style={{ fontSize: '3em' }} className="mb-4 text-center ">¿Quiénes somos?</h2>
                        <div className="col-md-6">
                            <p style={{ fontSize: '1.5em' }} className="lead mb-4">Somos una institución financiera en línea dedicada a brindar servicios bancarios seguros y convenientes. Nuestro objetivo es ofrecer a nuestros clientes una experiencia bancaria moderna, ágil y adaptada a sus necesidades en el mundo digital.</p>
                            <p style={{ fontSize: '1.5em' }} className="lead mb-4">Nos respalda un equipo de profesionales altamente capacitados y comprometidos con la excelencia en el servicio al cliente. Valoramos la confianza que depositas en nosotros y nos esforzamos por brindarte soluciones financieras confiables y eficientes.</p>
                        </div>
                        <div className="col-md-6">
                            <img src={AboutU} alt="Imagen de nosotros" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="containerOptions">
                    <div class="columns">
                        <div class="content">
                            <h2 style={{ fontSize: '3em' }} >Realiza Divisas</h2>
                            <img src={divisa}></img>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="content">
                            <h2 style={{ fontSize: '3.5em' }} >Gestiona Cuentas</h2>
                            <img src={users}></img>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="content">
                            <h2 style={{ fontSize: '3em' }} >Haz Depósitos</h2>
                            <img src={transc}></img>
                        </div>
                    </div>
                </div>
            </section>

            <ModalTransder isOpen={showModalTransfer} onClose={handleCloseModal} />
        </>
    )
}
