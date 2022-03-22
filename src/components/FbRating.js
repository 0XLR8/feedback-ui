
const FbRating = ({rating, handleRating}) => {

    const formatRating = () => {
        let ratingArray = [];
        for(let i=1; i<=10; i++){
            ratingArray.push(
                <div key={i} className="mb-4">
                    <input 
                        id={`num${i}`} 
                        type="radio" 
                        name="rating" 
                        checked={rating === i} 
                        value={i} 
                        onChange={() => handleRating(i)} 
                    />
                    <label htmlFor={`num${i}`} className={rating === i ? "active" : ""} >{i}</label>
                </div>
            )
        }
        return ratingArray;
    }

    return(
        <div className="fb-rating d-flex flex-row justify-content-center">
            {formatRating()}
        </div>
    )
}

export default FbRating;