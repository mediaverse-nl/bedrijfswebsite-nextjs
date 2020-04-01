import React from "react";
import absoluteUrl from 'next-absolute-url'
import Layout from '../layouts/Main'
import IntroBanner from "../components/IntroBanner"
import ReferenceCard from "../components/ReferenceCard";

import { getReferences } from '../api/reference/index'

function Page({data, origin}) {
    console.log("origin", origin)

    return <Layout>

        <IntroBanner title="Referenties"/>

        <div className="container pt-2 pb-5">
            <div className="row">
                {data.map(function(key, index) {
                    return (
                        <div className="col-md-4" key={index}>
                            <ReferenceCard
                                title={key.title}
                                service={key.service}
                                description={key.description}
                                backgroundImage={key.image}
                            />
                        </div>
                    )
                })}

            </div>
        </div>

    </Layout>
}

export async function getInitialProps ({req, res}) {
// export async function getStaticProps({req, res}) {

    // console.log('test test test 1', res);
    // console.log('test test test 2', req);

    // const {origin} = absoluteUrl(req);

    const origin = req ? `${req.protocol}://${req.get('Host')}` : ''
    console.log("origin", req.protocol)

    const resp = await fetch(`${origin}/proxy/api/auth/reference`)
    const json = await resp.json()
    const data = json.data
    return { props: { data , origin} }
}

export default Page