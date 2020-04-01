import ActiveLink from "../components/ActiveLink";

const Nav = () => (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top lighten-4">
        <style jsx>{`
            background-color: white;
            .nav-item {
              padding: 7px 7px;
            } 
            a{
                color:#212529 ;
            }
            .btn-blue{
                color: white !important;
            }
            .icon-bar{
                background-color: #212529 !important;
            }
            .active{
                background-color: rgba(0,0,0,0.1);
            }
            .active{
                background-color: rgba(0,0,0,0.1);
                color:#000;
            } 
            .dropdown-primary{
                border-radius: 0px !important;
                padding: none !important;
                margin-top:7px;
            }
            .dropdown-menu{
                padding:0px;
            }
        `}</style>
        <ActiveLink route="home">
            <a className="navbar-brand" href="#">Bedrijfsnaam</a>
        </ActiveLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <ActiveLink activeClassName='active' route="home">
                        <a className="nav-link">Home</a>
                    </ActiveLink>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Diensten
                    </a>
                    <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                        <ActiveLink activeClassName='active' route="services.webshops">
                            <a className="dropdown-item">Webshops</a>
                        </ActiveLink>
                        <ActiveLink activeClassName='active' route="services.websites">
                            <a className="dropdown-item">Websites</a>
                        </ActiveLink>
                        {/*<ActiveLink route="services.web-hosting">*/}
                        {/*    <a className="dropdown-item">Web Hosting</a>*/}
                        {/*</ActiveLink>*/}
                        {/*<ActiveLink route="services.websoftware">*/}
                        {/*    <a className="dropdown-item">Websoftware</a>*/}
                        {/*</ActiveLink>*/}
                        {/*<Link route="services.content-ontwikkeling">*/}
                        {/*    <a className="dropdown-item">Content Ontwikkeling</a>*/}
                        {/*</Link>*/}
                        {/*<ActiveLink route="services.internet-marketing">*/}
                        {/*    <a className="dropdown-item">Internet Marketing</a>*/}
                        {/*</ActiveLink>*/}
                    </div>
                </li>
                <li className="nav-item">
                    <ActiveLink activeClassName='active' route="references.index">
                        <a className="nav-link">Referenties</a>
                    </ActiveLink>
                </li>
        {/*        /!*<li className="nav-item">*!/*/}
        {/*        /!*    <Link route="category.index">*!/*/}
        {/*        /!*        <a className="nav-link">Support</a>*!/*/}
        {/*        /!*    </Link>*!/*/}
        {/*        /!*</li>*!/*/}
                <li className="nav-item">
                    <ActiveLink activeClassName='active' route="over-ons">
                        <a className="nav-link">Over Ons</a>
                    </ActiveLink>
                </li>
                <li className="nav-item">
                    <ActiveLink activeClassName='active' route="contact">
                        <a className="nav-link">Contact</a>
                    </ActiveLink>
                </li>
                <li className="nav-item">
                    <ActiveLink activeClassName='active' route="offerte-aanvraag">
                        <a className="nav-link btn btn-default btn-sm btn-blue">Offerte Aanvraag</a>
                    </ActiveLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-default btn-sm btn-blue" href="tel:0621651053">+31 (06) 21651053</a>
                </li>
            </ul>
        </div>
    </nav>
)

export default Nav