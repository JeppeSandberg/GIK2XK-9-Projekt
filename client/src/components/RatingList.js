
function RatingList({ ratings }) {
    return (
      <>
        {ratings &&
          ratings.map((rating, i) => (
            <div>
              
                <p key={`ratingId_${i}`}>{rating.description}</p>
                <p key={`ratingId_${i}`}>{rating.rating}</p>
            </div>
          ))}
      </>
    );
  }
  
  export default RatingList;
  