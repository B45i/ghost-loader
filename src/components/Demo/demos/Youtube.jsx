import { useState } from 'react';
import Ghost from '../../../shared/components/Ghost';

import './Youtube.css';

const Youtube = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleBtnClick = () => {
        setIsLoading(prv => !prv);
    };

    const video = {
        thumb: 'https://i.imgur.com/RRM5uEG.jpg',
        logo: 'https://i.imgur.com/gSr0aB6.jpg',
        title: 'Nothing Ear(1) Review: See Through the Hype!',
        desc: '2.3M views - 3 days ago',
    };
    return (
        <div>
            <button onClick={handleBtnClick}>
                {isLoading ? 'Stop Loading' : 'Start Loading'}
            </button>

            <div className="youtube">
                <Ghost isLoading={isLoading} width="100%" height="197px">
                    <img className="thumb" src={video.thumb} alt="Thumnail" />
                </Ghost>
                <div className="video-info">
                    <Ghost
                        isLoading={isLoading}
                        type="circle"
                        height="60px"
                        width="60px"
                    >
                        <img
                            className="logo"
                            src={video.logo}
                            alt="Channel logo"
                        />
                    </Ghost>
                    <div className="info-text">
                        <Ghost isLoading={isLoading} width="100%">
                            <div>{video.title}</div>
                        </Ghost>
                        <Ghost isLoading={isLoading} width="50%">
                            <div className="pt-1">{video.desc}</div>
                        </Ghost>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Youtube;
