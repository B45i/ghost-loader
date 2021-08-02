import { useState } from 'react';
import Ghost from '../../../shared/components/Ghost';

import './Article.css';

const Article = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleBtnClick = () => {
        setIsLoading(prv => !prv);
    };

    const item = {
        title: `Lorem ipsum, dolor sit amet consectetur adipisicing
        elit.`,
        auther: 'John Doe',
        date: '02, August, 2021',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo, facilis quae dolores quod officiis nobis,
        possimus vitae distinctio ab voluptate facere dolorum hic
        maiores vel consectetur ex itaque nemo tempora est
        accusantium nesciunt. Quis quia officia quos repudiandae?
        Tenetur ipsam saepe alias quo dolores esse explicabo!
        Necessitatibus laudantium soluta accusantium deleniti,
        dolore consequatur animi error maxime molestias ipsam iure
        cumque quis asperiores, nesciunt ad tempora blanditiis,
        praesentium sunt natus. Ratione, culpa! Minus dolores nisi
        unde nostrum quae impedit quod minima? Ad, nemo omnis nobis
        fuga iusto unde ex eos, provident, eaque magnam et quia
        facere natus necessitatibus veniam eligendi voluptates?`,
    };

    return (
        <div>
            <button onClick={handleBtnClick}>
                {isLoading ? 'Stop Loading' : 'Start Loading'}
            </button>

            <div className="article">
                <h1 className="article-heading">
                    {isLoading ? <Ghost height="100%" /> : item.title}
                </h1>

                <h3 className="article-auther">
                    {isLoading ? <Ghost /> : item.auther}
                </h3>
                <h3 className="article-about">
                    {isLoading ? <Ghost /> : item.date}
                </h3>
                <span className="article-text">
                    {isLoading ? (
                        <>
                            {' '}
                            <Ghost count="4" /> <Ghost width="50%" />{' '}
                        </>
                    ) : (
                        item.text
                    )}
                </span>
            </div>
        </div>
    );
};

export default Article;
