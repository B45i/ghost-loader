import PropTypes from 'prop-types';
import './Ghost.css';

const Ghost = props => {
    const {
        isLoading,
        count,
        type,
        className,
        height,
        width,
        style,
        children,
    } = props;

    if (!isLoading) {
        return children;
    }

    const ghostStyles = {
        height,
        width,
        ...style,
    };

    return Array.from({ length: count }, (_, index) => (
        <span
            className={`ghost ${type} ${className || ''}`}
            style={ghostStyles}
            key={index}
        ></span>
    ));
};

Ghost.propTypes = {
    type: PropTypes.oneOf(['circle', 'rect']),
    width: PropTypes.string,
    height: PropTypes.string,
    count: PropTypes.number,
    isLoading: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
};

Ghost.defaultProps = {
    type: 'rect',
    count: 1,
    isLoading: true,
    width: '100%',
    height: '1rem',
};

export default Ghost;
