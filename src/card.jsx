import React, { useEffect, useState } from 'react';
import './card.css';

const CardInfo = ({url, data}) => {
    return (
        <>
            <img src={url} alt="img" />
            <h1>Random advice</h1>
            <p>{data}</p>
        </>
    )
}

const Card = () => {
    const [flip, setFlip] = useState(false);
    const [url, setUrl] = useState('');
    const [data, setData] = useState('');

    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(res => setData(res.slip.advice));

    function getRandomPixelAvatar() {
        const num = Math.floor(Math.random() * 9999);
        setUrl(`https://avatars.dicebear.com/api/male/${num}.svg?b=%23000000&mood[]=happy`)
    }

    useEffect(() => {
        getRandomPixelAvatar();
    }, [flip]);

    console.log(url);

    return (
        <div className="container">
            <div 
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}>
                <div className="front">
                    <CardInfo url={url} data={data}/>
                </div>
                <div className="back">
                    <CardInfo url={url} data={data}/>
                </div>
            </div>
        </div>
    );
};

export default Card;