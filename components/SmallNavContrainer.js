import React from 'react'
import ActiveLink from "./ActiveLink";

const SmallNavContrainer = ({}) => (
    <div>
        <style jsx>{` 
            h4 {
                color: #393939;
                font-size: 18px;
                font-weight: 500;
                line-height: 1.2em;
                margin-bottom: 8px;
                margin-top: 0;
            }
            li {
                border: none;
                color: #717171;
                display: block;
                font-size: 14px;
                padding: 4px 0;
                -webkit-transition: color .3s;
                transition: color .3s;
            }
            li::before{
                font-family: 'Font Awesome 5 Free';
                font-weight: 900;
                content: " \f105 ";
                margin-right: 7px;
                margin-left: 5px;
            }
            ul {
                padding: 0 8px;
            } 
            a.active{
                color:#212529 !important;
                font-weight: normal;
            }
        `}</style>
        <h4>Diensten</h4>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <ActiveLink activeClassName="active" route='services.webshops'>
                    <a className="blue-text">Webshop</a>
                </ActiveLink>
            </li>
            <li className="list-group-item">
                <ActiveLink activeClassName="active" route='services.websites'>
                    <a>Website</a>
                </ActiveLink>
            </li>
            <li className="list-group-item">
                <ActiveLink activeClassName="active" route='services.web-hosting'>
                    <a>Webhosting</a>
                </ActiveLink>
            </li>
            <li className="list-group-item">
                <ActiveLink activeClassName="active" route='services.websoftware'>
                    <a>Websoftware</a>
                </ActiveLink>
            </li>
            <li className="list-group-item">
                <ActiveLink activeClassName="active" route='services.content-ontwikkeling'>
                    <a>Content ontwikkeling</a>
                </ActiveLink>
            </li>
            <li className="list-group-item">
                <ActiveLink activeClassName="active" route='services.internet-marketing'>
                    <a>Internet marketing</a>
                </ActiveLink>
            </li>
        </ul>

    </div>
)

export default SmallNavContrainer