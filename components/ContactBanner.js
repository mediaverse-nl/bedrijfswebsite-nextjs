import React from 'react'

const defaultProps = {
    title: "Een website is meer dan alleen een visitekaartje",
    subTitle: "Kom in contact met ons of vraag direct een offerte aan.",
    backgroundImage: "https://mdbootstrap.com/img/Photos/Others/architecture.jpg",
}

export default class Container extends React.Component {
    render () {
        return (
            <div className="streak streak-photo streak-md py-3 mt-5" style={{backgroundImage: `url('${!this.props.backgroundImage ? defaultProps.backgroundImage : this.props.backgroundImage}')`, color: '#000000'}}>
                <div className="flex-center mask rgba-gradient">
                    <div className="container my-5">
                        <h3 className="text-center pb-3 font-weight-bold wow fadeIn" data-wow-delay="0.2s" style={{visibility: "visible", animationName: "fadeIn", animationDelay: "0.2s"}}>
                            <strong>{!this.props.title ? defaultProps.title : this.props.title}</strong>
                        </h3>
                        <h6 className="text-center pb-4 font-weight-bold wow fadeIn" data-wow-delay="0.2s" style={{visibility: "visible", animationName: "fadeIn", animationDelay: "0.2s"}}>
                            {!this.props.subTitle ? defaultProps.subTitle : this.props.subTitle}
                        </h6>
                        <div className="row flex-center">
                            <a className="btn btn-white btn-rounded btn-lg blue-text font-weight-bold ml-0 wow fadeIn waves-effect waves-light" data-wow-delay="0.2s" style={{visibility: "visible", animationName: "fadeIn", animationDelay: "0.2s"}}>
                                <i className="fas fa-search-dollar pr-2" aria-hidden="true"></i> Offerte aanvragen
                            </a>
                            <a className="btn btn-white btn-rounded btn-lg blue-text font-weight-bold wow fadeIn waves-effect waves-light" data-wow-delay="0.2s" style={{visibility: "visible", animationName: "fadeIn", animationDelay: '0.2s'}}>
                                <i className="fas fa-phone pr-2" aria-hidden="true"></i> Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}