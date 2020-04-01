import React from 'react'

const defaultProps = {
    backgroundImage: "https://mdbootstrap.com/img/Photos/Others/architecture.jpg" ,
}

export default class Container extends React.Component {
    render () {
        return (
            <div className="view mb-5 animated fadeIn slower">
                <div src="https://www.intrige.eu/wp-content/uploads/2019/02/Hosting-compressor.jpg" style={{backgroundImage: `url('${!this.props.backgroundImage ? defaultProps.backgroundImage : this.props.backgroundImage}')`, height:"230px"}} alt="" />
                <div className="mask blue-gradient-rgba flex-center">
                    <p className="text-center text-white">
                        <h2 className="display-md-3 text-white text-center">{this.props.title }</h2>
                    </p>
                </div>
                <style jsx>{` 
                    h2 {
                     font-size: 4rem;
                   }
                   @media (max-width: 575.98px) {
                     h2 {
                       font-size: 3rem !important;
                     }
                   }
                   @media (min-width: 576px) and (max-width: 767.98px) {
                     h2 {
                       font-size: 3rem !important;
                     }
                   }
                   @media (min-width: 768px) and (max-width: 991.98px) {
                     h2 {
                       font-size: 4rem !important;
                     }
                   }
                   @media (min-width: 992px) and (max-width: 1199.98px) {
                     h2 {
                       font-size: 4rem !important;
                     }
                   }
                   @media (min-width: 1200px) {
                     h2 {
                       font-size: 4rem !important;
                     }
                   }
                `}</style>
            </div>
        )
    }
}