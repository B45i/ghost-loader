import { useState } from 'react';
import Ghost from '../../../shared/components/Ghost';

import './Youtube.css';

const Youtube = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleBtnClick = () => {
        setIsLoading(prv => !prv);
    };

    const video = {
        thumb: 'https://i.ytimg.com/an_webp/6E9cdgMvQT0/mqdefault_6s.webp?du=3000&sqp=CIWInogG&rs=AOn4CLAi_aBYB0pbZF7UhhA1HDavL5_aRw',
        logo: 'https://yt3.ggpht.com/ytc/AKedOLR-pT_JEsz_hcaA4Gjx8DHcqJ8mS42aTRqcVy6P7w=s176-c-k-c0x00ffffff-no-rj-mo',
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
                    <img className="thumb" src={video.thumb} />
                </Ghost>
                <div className="video-info">
                    <Ghost
                        isLoading={isLoading}
                        type="circle"
                        height="60px"
                        width="60px"
                    >
                        <img className="logo" src={video.logo} />
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
