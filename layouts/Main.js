import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

export default ({ children, title = 'This is the default title' }) => (
    <div>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content="not now"/>
            <meta name="author" content="john doe"/>
            <meta name="generator" content="test"/>

            <title>{title}</title>
        </Head>

        <header>
            <Nav />
        </header>

        <main className="animated fadeIn delay-03s">
            <style jsx global>{`
                body {
                    font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
                    padding: 70px 0px 0px 0px; 
                    margin: 0 auto;
                    background: #FFFFFF; 
                }                 
                @media (max-width: 768px) {
                 body {
                    padding: 50px 0px 0px 0px;
                 }
                } 
                footer{
                    background: #343a40 !important;
                    color: #adb5bd;
                }
                footer h3{
                    color:#868e96
                } 
                .bottom-container{
                    background: #212529;
                }
                input, textarea{
                    background: #eee !important; 
                    border-radius: 0px !important; 
                    border: 0px !important; 
                    padding: 10px !important; 
                }
            `}</style>
            { children }
        </main>

        <Footer className="animated fadeIn delay-03s">
            Footer
        </Footer>

    </div>
)