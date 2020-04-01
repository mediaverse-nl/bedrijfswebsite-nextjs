import React from 'react'

const defaultProps = {
    backgroundImage: "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg",
    title: "",
    description: "",
    service: ""
}

export default class ReferentieCard extends React.Component {
    render () {
        return (
            <div className="wow animated flipInY delay-1s my-3 card card-image mb-3" style={{height:"200px", overflow:"hidden", borderRadius: "4px", backgroundImage: `url('${!this.props.backgroundImage ? defaultProps.backgroundImage : this.props.backgroundImage}')`, color: '#000000'}}>
                <div class="text-white text-center d-flex align-items-center rgba-black-light py-4 px-3 h-100">
                    <div className="mx-auto" >
                        <h5 class="blue-text">
                            {/*<i class="fas fa-chart-pie"></i> */}
                            <strong>{this.props.service}</strong></h5>
                        <h3 class="card-title pt-2"><strong>{this.props.title}</strong></h3>
                        <p>{this.props.description}</p>
                    </div>
                </div>


                {/*<div className="text-white text-center d-flex align-items-center img-gradient-overlay py-5 px-4">*/}
                {/*    <h5 className="orange-text"><i className="fas fa-desktop"></i> {this.props.service}</h5>*/}
                {/*    <h3 className="card-title pt-2"><strong>{this.props.title}</strong></h3>*/}
                {/*    <p>{this.props.description}</p>*/}
                {/*    /!*<a className="btn btn-deep-orange waves-effect waves-light">*!/*/}
                {/*    /!*    <i className="far fa-clone left"></i>*!/*/}
                {/*    /!*    Bekijk project*!/*/}
                {/*    /!*</a>*!/*/}
                {/*</div> */}
            </div>
        )
    }
}