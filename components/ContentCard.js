import { Link } from '../routes'
import classNames from 'classnames'

const defaultProps = {
    title: "This is the card title",
    subText: "test test",
    iconClass: "fas fa-store-alt",
    backgroundImage: "",
    // backgroundImage: "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg",
}


export default class Container extends React.Component {
    render () {
        const Classes = classNames(
            `${!this.props.iconClass ? defaultProps.iconClass : this.props.iconClass}`,
            'animated pulse delay-1s slower'
        )

        return (
            <div className="py-3 col-md-4 animated zoomIn delay-1s wow">
                <Link route={this.props.route}>
                    <div className="card " style={{height:"100%"}}>
                        <div className="card-body text-center">
                            <span className="blue-text" style={{ padding: "50px"}} >
                                <i className={Classes} style={{fontSize:"60px", marginBottom: "20px"}}></i>
                            </span>
                            <br/>
                            <h4 className="card-title">{!this.props.title ? defaultProps.title : this.props.title}</h4>
                            <p className="card-text">{!this.props.subText ? defaultProps.subText : this.props.subText}</p>
                            <a className="btn blue-gradient center-block btn-blue fixed-bottom position-relative">Lees meer</a>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}


// {/*<div className="py-3">*/}
//  {/*    <div className="card card-image"*/}
//  {/*         style={{backgroundImage: `url('${!this.props.backgroundImage ? defaultProps.backgroundImage : this.props.backgroundImage}')`}}>*/}
//  {/*        <style jsx>{`  */}
//  {/*            .pink-text i{*/}
//  {/*                font-size: 70px !important;*/}
//  {/*            }*/}
//  {/*        `}</style>*/}
//  {/*        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">*/}
//  {/*            <div className="text-white text-center align-items-center">*/}
//  {/*                <span className="pink-text">*/}
//  {/*                    <i className="fas fa-chart-pie"></i>*/}
//  {/*                </span>*/}
//  {/*                <h3 className="card-title pt-2">*/}
//  {/*                    <strong>{!this.props.title ? defaultProps.title : this.props.title}</strong>*/}
//  {/*                </h3>*/}
//  {/*                <p>{!this.props.subText ? defaultProps.subText : this.props.subText}</p>*/}
//  {/*                <a className="btn btn-pink">lees meer</a>*/}
//  {/*            </div>*/}
//  {/*        </div>*/}
//  {/*    </div>*/}
//  {/*</div>*/}