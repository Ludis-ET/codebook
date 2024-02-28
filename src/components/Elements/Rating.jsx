export const Rating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const tolerance = 0.1; // Adjust the tolerance as needed

    for (let i = 1; i <= 5; i++) {
      if (i <= rating - tolerance) {
        // Full star
        stars.push(
          <i
            key={i}
            className="text-lg bi bi-star-fill text-yellow-500 mr-1"
          ></i>
        );
      } else if (i - 0.5 <= rating + tolerance) {
        // Half star
        stars.push(
          <i
            key={i}
            className="text-lg bi bi-star-half text-yellow-500 mr-1"
          ></i>
        );
      } else {
        // Empty star
        stars.push(
          <i key={i} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
        );
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};
