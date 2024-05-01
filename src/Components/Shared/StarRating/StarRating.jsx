 export const StarRating = ({ rating, onChange }) => {
    const handleClick = (value) => {
      onChange(value);
    };
  
    return (
      <div>
        {[...Array(5)]?.map((_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={index}
              onClick={() => handleClick(starValue)}
              style={{ cursor: 'pointer', color: starValue <= rating ? '#FF9D00' : '#C7C7C7' }}
            >
              ★
            </span>
          );
        })}
      </div>
    );
  };