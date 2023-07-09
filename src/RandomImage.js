import React, { useState, useEffect } from 'react';

const RandomImage = () => {
    const [randomImage, setRandomImage] = useState('');

    useEffect(() => {
        const fetchRandomImage = async () => {
            try {
                const response = await fetch('https://source.unsplash.com/random');
                setRandomImage(response.url);
            } catch (error) {
                console.error('Error fetching random image:', error);
            }
        };

        fetchRandomImage();
    }, []);

    return (
        <div className="random-image">
            {randomImage && <img src={randomImage} alt="Random" />}
        </div>
    );
};

export default RandomImage;
