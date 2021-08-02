import Youtube from './demos/Youtube';

import './Demo.css';

const Demo = () => {
    return (
        <div className="demos">
            <div className="demo-tile">YouTube</div>
            <div className="demo-container">
                <Youtube />
            </div>
        </div>
    );
};

export default Demo;
