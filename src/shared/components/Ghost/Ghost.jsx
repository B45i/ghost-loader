import './Ghost.css';

// type of ghost
// size: height / widh
// custom class and style
// add prop types
//  font size
//  paragraph count
// is loading
// ghost wrapper to sync animation ?

const Ghost = props => {
    const { loading, count, type, className, height, width, style, children } =
        props;

    if (!loading) {
        return children;
    }

    const ghostStyles = {
        height,
        width,
        ...style,
    };

    // const elements = new Array(count || 10).fill(<span>Hello</span>); // use type props default
    // return elements;

    return <span className={`ghost `} style={ghostStyles}></span>;
};

export default Ghost;

//  todo export from index.js
