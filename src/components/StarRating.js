import {useState, useEffect } from 'react'
import Star from './Star'

function StarRating({ ratings }) {
    const MAX_STARS = 5;
    const numbers = [...Array(MAX_STARS)];
    const [selectedStars, setSelectedStars] = useState(new Array(MAX_STARS).fill(false));
    const [textRating, setTextRating] = useState('Your rating');

    const handleStarClick = (index) => {
      const updatedStars = selectedStars.map((_, i) => i <= index);
      setSelectedStars(updatedStars);
      setTextRating(ratings[index]);
    };

    useEffect(() => {
    }, [selectedStars]);
  
    return (
      <div className='StarRating'>
        <div className='flex'>
          {numbers.map((star, index) => (
            <Star
              key={index}
              selected={selectedStars[index]}
              onClick={() => handleStarClick(index)}
            />
          ))}
        </div>
        <div>
            <p>{textRating}</p>
        </div>
      </div>
    );
  }
  
  export default StarRating;


