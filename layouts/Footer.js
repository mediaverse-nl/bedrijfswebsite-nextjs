import {Container} from 'react-bootstrap';
import {Link} from '../routes'
import React from "react";

const Footer = () => (
    <footer className="page-footer font-small pt-4">
        <style jsx>{` 
            .list-group-item{
                background: transparent;
                padding: .25rem .75rem;
                border: none;
            }
            .list-group-item::before{
                margin-right:5px;
                font-family: "Font Awesome 5 Free";
                font-weight: 900; 
                content: "\f105"; 
            } 
        `}</style>
        <div className="container text-center text-md-left pb-5">

            <div className="row">
                <div className="col-sm-6 col-md-3 mt-md-0 mt-3 text-center">

                </div>
                <div className="col-sm-6 col-md-3">
                    <h3>Contact</h3>
                    <ul className="list-group list-unstyled">
                        <li className="list-gro up-item"><b>Tel</b>: 085 – xxxxxx</li>
                        <li className="list-gro up-item"><b>E-mail</b>: info@bedrijfsnaam.nl</li>
                        <li className="list-gro up-item"><b>KvK</b>: xxxxxx</li>
                        <li className="list-gro up-item"><b>BTW</b>: xxxxxx</li>
                        <li className="list-grou p-item">Storingen kunnen gemeld worden via helpdesk@bedrijfsnaam.nl</li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-3">
                    <h3>Diensten</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Link route="services.webshops">
                                <a>Webshops</a>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link route="services.websites">
                                <a>Websites</a>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link route="services.web-hosting">
                                <a>Web Hosting</a>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link route="services.websoftware">
                                <a>Websoftware</a>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link route="services.content-ontwikkeling">
                                <a>Content Ontwikkeling</a>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link route="services.internet-marketing">
                                <a>Internet Marketing</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-3">
                    <h3>Over ons</h3>
                    <p children="lead">
                        Mediaverse is een strategisch webbureau voor bedrijven in regio Uden, Den Bosch en Eindhoven. Als strategen denken wij verder. Met alles onder één dak behaalt u maximaal resultaat op het internet.
                    </p>
                </div>
                <div className="col-xs-12">
                    {/*<Link href='/'><a>Home</a></Link> |*/}
                    {/*<Link href='/about'><a>About</a></Link> |*/}
                    {/*<Link href='/contact'><a>Contact</a></Link>*/}
                </div>
            </div>
        </div>

        <div className="footer-copyright py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 py-2">
                        © {new Date().getFullYear()} Copyright: bedrijfsnaam
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                                <img src="/img/react-logo.png" alt="my image" className="float-right img-responsive inline-block px-4" style={{height: "40px"}} />
                                <img src="/img/nextjs-logo.png" alt="my image" className="float-right img-responsive inline-block px-4" style={{height: "40px"}}  />
                                <img src="/img/laravel-logo.png" alt="my image" className="float-right img-responsive inline-block px-4" style={{height: "40px"}}  />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </footer>
)

export default Footer

