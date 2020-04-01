import React from 'react'
import Layout from '../layouts/Main'

import ContainerBanner from '../components/ContactBanner'

import CardContent from "../components/ContentCard";

function Page() {
    return <Layout>
        <div className="jumbotron " style={{backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg')"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <h2 className="animated fadeInLeft delay-01s display-3">Hello, world!</h2>
                        <p className="animated fadeInLeft delay-01s ">This is a template for a simple marketing or informational website. It includes a large callout
                            called a jumbotron and three supporting pieces of content. Use it as a starting point to create
                            something more unique.</p>
                        <p>
                            <a className="animated fadeIn delay-1s btn btn-blue btn-lg" href="#" role="button">Offerte aanvragen</a>
                            <a className="animated fadeIn delay-2s btn btn-blue btn-lg" href="#" role="button">Contact</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>


        <div className="container py-1">
            <div className="row row-eq-height">

                    <CardContent
                        iconClass="fas fa-store-alt"
                        title="Webshops"
                        route="services.webshops"
                        subText="Verhoog uw omzet met een prachtige webshop, conform de laatste trends en technieken."
                    />

                    <CardContent
                        title="Websites"
                        iconClass="fas fa-globe-europe"
                        route="services.websites"
                        subText="Van laptops tot telefoons, wij zorgen dat uw website op ieder apparaat responsive is."
                    />

                    <CardContent
                        title="Content ontwikkeling"
                        iconClass="fas fa-chart-line"
                        route="services.content-ontwikkeling"
                        subText="Het schrijven van content is niet genoeg voor uw website of webshop. Wij helpen u ook met foto's, video's en infographics."
                    />

                    <CardContent
                        title="Internet marketing"
                        iconClass="fas fa-search-location"
                        route="services.internet-marketing"
                        subText="Een succesvolle website of webshop staat of valt met online vindbaarheid. Internet marketing is essentieel hierbij."
                    />

                    <CardContent
                        title="Websoftware"
                        iconClass="fas fa-code"
                        route="services.websoftware"
                        subText="Wenst u met maatwerk voor uw website of webwinkel? Ga het gesprek met ons aan voor websoftware op maat."
                    />

                    <CardContent
                        title="Web hosting"
                        iconClass="fas fa-server"
                        route="services.web-hosting"
                        subText="Wenst u met maatwerk voor uw website of webwinkel? Ga het gesprek met ons aan voor websoftware op maat."
                    />

            </div>
        </div>

        <ContainerBanner
            title=""
            backgroundImange=""
        />
    </Layout>
}

export default Page