import React from 'react'

const defaultProps = {
    backgroundImage: "https://mdbootstrap.com/img/Photos/Others/architecture.jpg" ,
}

export default class ServiceIntroBanner extends React.Component {
    render () {
        return (
            <div className="jumbotron" style={{backgroundImage: `url('${!this.props.backgroundImage ? defaultProps.backgroundImage : this.props.backgroundImage}')`, color: '#000000'}}>
                <div className="container">
                    <h2 className="display-3 text-center">{this.props.title}</h2>
                </div>
            </div>
        )
    }
}