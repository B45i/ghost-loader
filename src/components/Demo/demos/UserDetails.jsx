import { useState } from 'react';
import Ghost from '../../../shared/components/Ghost';

import './UserDetails.css';

const UserDetails = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleBtnClick = () => {
        setIsLoading(prv => !prv);
    };

    const user = {
        img: 'https://robohash.org/amal%20shajan',
        name: 'Amal Shajan',
        description: 'JavaScript Developer',
        isFollowed: Math.random() < 0.5,
    };

    return (
        <div>
            <button onClick={handleBtnClick}>
                {isLoading ? 'Stop Loading' : 'Start Loading'}
            </button>

            <div className="user-card">
                <Ghost
                    isLoading={isLoading}
                    width="5rem"
                    height="5rem"
                    style={{ borderRadius: '1rem' }}
                >
                    <img src={user.img} className="user-card-img" />
                </Ghost>

                <div className="user-card-details">
                    <Ghost isLoading={isLoading} width="75%">
                        <h4 className="user-name">{user.name}</h4>
                    </Ghost>

                    <Ghost isLoading={isLoading}>
                        <div className="user-description">
                            JavaScript Developer
                        </div>
                    </Ghost>
                </div>

                <Ghost isLoading={isLoading} width="4rem" height="2rem">
                    <button>{user.isFollowed ? 'Unfollow' : 'Follow'}</button>
                </Ghost>
            </div>
        </div>
    );
};

export default UserDetails;
