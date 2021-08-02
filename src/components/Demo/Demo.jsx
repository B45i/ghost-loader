import Youtube from './demos/Youtube';
import Article from './demos/Article';
import UserDetails from './demos/UserDetails';

import './Demo.css';

const Demo = () => {
    return (
        <div>
            <div className="demo">
                <div className="demo-tile">YouTube</div>
                <div className="demo-container">
                    <Youtube />
                </div>
            </div>

            <div className="demo">
                <div className="demo-tile">User Card</div>
                <div className="demo-container">
                    <UserDetails />
                </div>
            </div>

            <div className="demo">
                <div className="demo-tile">Article</div>
                <div className="demo-container">
                    <Article />
                </div>
            </div>
        </div>
    );
};

export default Demo;
