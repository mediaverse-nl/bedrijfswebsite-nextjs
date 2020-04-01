import { withRouter } from 'next/router'
import Layout from '../layouts/Main'

import SmallContactContainer from "../components/SmallContactContrainer"
import SmallNavContrainer from "../components/SmallNavContrainer";
import IntroBanner from "../components/IntroBanner";
import React from "react";
import ActiveLink from "../components/ActiveLink";

const domains = [
    {
        extension: 'nl',
        price: '12,-'
    }, {
        extension: 'com',
        price: '17,-'
    }, {
        extension: 'net',
        price: '18,-'
    }, {
        extension: 'be',
        price: '16.00'
    }, {
        extension: 'eu',
        price: '14,-'
    }, {
        extension: 'org',
        price: '19,-'
    }, {
        extension: 'info',
        price: '19,-'
    }, {
        extension: 'nu',
        price: '37,-'
    }, {
        extension: 'de',
        price: '14,-'
    }, {
        extension: 'network',
        price: '28,-'
    }, {
        extension: 'cloud',
        price: '34,-'
    }, {
        extension: 'email',
        price: '28,-'
    }, {
        extension: 'technology',
        price: '28,-'
    },
]

function Page() {
    return <Layout>
        <IntroBanner title="Webshop"/>

        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="wpb_text_column wpb_content_element ">
                        <div className="wpb_wrapper">
                            <h1 className="h2">Een unieke webshop</h1>
                            <p>
                                Het internet is een open marktplaats en een geweldige plek om een winkel te openen, ook als je al een stenen winkel hebt. Maar hoe verovert jouw webshop nou een plek in die wirwar van online winkels? Maatwerk van Mediaverse zorgt voor de sterkste fundering van je webshop die je je maar kunt wensen. Met kop en schouders boven de rest uit. Want, bewezen: originaliteit blijft de sleutel tot succes.
                            </p>

                            <h2 className="h2">Nieuwste technieken voor uw webshop.</h2>
                            <p>
                                Mediaverse werkt met de nieuwste technieken op het gebied van programmeren en design. Eindhoven, de plek waar wij liggen, is het innovatieve en technische centrum van Nederland en daar helpen wij graag aan mee! Met ons frisse team staan we altijd voor u klaar. Bij het maken van onze webshops werken we vaak met Trello. Dit is een zeer flexibel pakket waar enorm veel mee mogelijk is. Dit sluit mooi aan op onze ideologie. Wij willen het web namelijk voor iedereen toegankelijk maken en doen dat ook onze uiterste best om dit mogelijk te maken. We gaan samen met u om de tafel zitten om eens te bekijken wat er allemaal voor mogelijkheden zijn. Wat voor producten wilt u gaan verkopen? Is het beheren van een webshop het enige doel van uw bedrijf, of is het slechts een aanvulling op uw andere diensten? En hoe wilt u eigenlijk dat uw webshop er uit komt te zien? Al deze elementen zijn even belangrijk om goed in kaart te krijgen.
                            </p>

                            <h2 className="h2">Naast een fysieke winkel ook een webshop? Jazeker!</h2>
                            <p>
                                Als u een eigen bedrijf heeft waar u spullen verkoopt, dan is een mooie, goed werkende webshop eigenlijk onmisbaar. Bij Mediaverse te Eindhoven hebben we veel verstand van en ervaring met het bouwen van webshops. Wij zorgen ervoor dat u een webshop krijgt die er niet alleen perfect uitziet, maar die ook overzichtelijk en helemaal veilig is. Als wij voor u een webshop maken, dan gaan we niet alleen maar voor u aan de slag, maar dan betrekken we u ook bij het gehele proces. Uiteindelijk gaat het om uw webshop, waar u naar alle waarschijnlijkheid vele jaren mee gaat werken. Zo willen wij ook niet met een eindresultaat komen dat eruitziet als eender welke andere webshop, maar juist met een webshop die helemaal uniek is. Daarnaast zorgen wij ervoor dat u gemakkelijk zelf uw webshop kunt bijwerken en producten kunt updaten door middel van een CRM-systeem.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <hr/>
                    <SmallNavContrainer />
                    <hr/>
                    <SmallContactContainer />
                    <hr/>
                </div>
            </div>
        </div>

        <div className="view mt-5 mb-4">
            <img src="https://www.intrige.eu/wp-content/uploads/2019/02/Hosting-compressor.jpg" className="img-fluid" style={{objectFit: "cover;", height:"220px"}} alt=""/>
            <div className="mask blue-gradient-rgba flex-center">
                <p className="text-center text-white">
                    <h2 className="dis play-3 text-white text-center">Hosting pakketten</h2>
                    Onze managed services
                </p>
            </div>
        </div>

        <div className="container py-5">
            <div className="row">
                <style jsx>{` 
                    .list-unstyled li::before{
                        font-family: 'Font Awesome 5 Free';
                        font-weight: 900;
                        content: " \f105 ";
                        margin-right: 7px;
                        margin-left: 5px;
                    }
                `}</style>
                <div className="col-md-4">
                    <div className="card text-success mb-3" style={{border: "0px !important"}}>
                        <div className="card-header text-center h4 text-white success-color-dark" style={{backgroundImage: "linear-gradient(to right, #00C851, #007E33)"}}>Managed hosting <br/><small>(basic)</small></div>
                        <div className="card-body">
                            <span className="h1 card-title pricing-card-title">&euro;10 <small>/ per maand</small></span>
                            <ul className="list-unstyled mt-3 mb-4 ">
                                <li>1 domein</li>
                                <li>1 GB opslag</li>
                                <li>MySQL database</li>
                                <li>Unlimited dataverkeer</li>
                                <li>10 e-mailadressen</li>
                                <li>Periodieke backups</li>
                                <li>Managed hosting</li>
                                <li>E-mail support</li>
                                <li>99,98% uptime</li>
                            </ul>
                            <ActiveLink route="offerte-aanvraag">
                                <a className="btn btn-outline-success btn-block waves-effect">Offerte Aanvraag</a>
                            </ActiveLink>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-warning mb-3" style={{border: "0px !important"}}>
                        <div className="card-header text-center h4 text-white warning-color-dark" style={{backgroundImage: "linear-gradient(to right, #ffbb33, #FF8800)"}}>Managed hosting <br/><small>(normal)</small></div>
                        <div className="card-body">
                            <span className="h1 card-title pricing-card-title">&euro;20 <small>/ per maand</small></span>
                            <ul className="list-unstyled mt-3 mb-4 ">
                                <li>2 domein</li>
                                <li>2 GB opslag</li>
                                <li>MySQL database</li>
                                <li>Unlimited dataverkeer</li>
                                <li>10 e-mailadressen</li>
                                <li>Periodieke backups</li>
                                <li>Managed hosting</li>
                                <li>E-mail support</li>
                                <li>99,98% uptime</li>
                            </ul>
                            <ActiveLink route="offerte-aanvraag">
                                <a className="btn btn-outline-warning btn-block waves-effect">Offerte Aanvraag</a>
                            </ActiveLink>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-danger mb-3" style={{border: "0px !important"}}>
                        <div className="card-header text-center h4 text-white" style={{backgroundImage: "linear-gradient(to right, #ff4444, #CC0000)"}}>Managed hosting <br/><small>(advanced)</small></div>
                        <div className="card-body">
                            <span className="h1 card-title pricing-card-title">&euro;30 <small>/ per maand</small></span>
                            <ul className="list-unstyled mt-3 mb-4 ">
                                <li>5 domein</li>
                                <li>5 GB opslag</li>
                                <li>MySQL database</li>
                                <li>Unlimited dataverkeer</li>
                                <li>15 e-mailadressen</li>
                                <li>Periodieke backups</li>
                                <li>Managed hosting</li>
                                <li>E-mail support</li>
                                <li>99,98% uptime</li>
                            </ul>
                            <ActiveLink route="offerte-aanvraag">
                                <a className="btn btn-outline-danger btn-block waves-effect">Offerte Aanvraag</a>
                            </ActiveLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-3">
            <div className="view">
                <img src="https://www.intrige.eu/wp-content/uploads/2019/02/Hosting-compressor.jpg" className="img-fluid" style={{objectFit: "cover;", height:"220px"}} alt=""/>
                <div className="mask rgba-black-strong flex-center">
                    <h3 className="text-center white-text">Domein kosten per extentie</h3>
                </div>
            </div>
        </div>

        <div className="container">
            <style jsx>{`
                .container{
                    padding:20px 40px;
                }
                .row {
                  color: blue;
                  padding: 20px;
                } 
                .row:hover {
                  background-color: rgba(0,0,0,0.1);
                  padding: 20px;
                  color: #1976d2 ;
                } 
            `}</style>
            {domains.map(function(key, index) {
                return (
                    <div className="row align-items-center fadeInLeft animated wow" key={index}>
                        <div className="col-md-4 col-12 text-center text-md-left">uwdomeinnaam.{key.extension}</div>
                        <div className="col-6 col-md-2 text-center">&euro; {key.price}</div>
                        <div className="col-6 col-md-2 text-center">per jaar</div>
                        <div className="col-md-4 col-12 text-center text-md-right">
                            <ActiveLink route="offerte-aanvraag">
                                <a className="btn btn-default btn-sm btn-blue">Offerte Aanvraag</a>
                            </ActiveLink>
                        </div>
                    </div>
                )
            })}
        </div>

    </Layout>
}

export default withRouter(Page)
