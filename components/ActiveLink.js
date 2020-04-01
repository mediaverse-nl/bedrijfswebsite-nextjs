import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import routes, {Link} from '../routes';
import React, { Children } from 'react'

const ActiveLink = ({ children, activeClassName, ...props }) => {

    const router = useRouter()
    const child = Children.only(children)
    const childClassName = child.props.className || ''

    const isActiveRoute = (props.route === undefined) ? false : routes.findAndGetUrls(props.route, props.params).urls.as === router.asPath;

    const className = isActiveRoute
        ? `${childClassName} ${activeClassName}`.trim()
        : childClassName

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null
            })}
        </Link>
    )
}

ActiveLink.propTypes = {
    activeClassName: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
}

export default ActiveLink