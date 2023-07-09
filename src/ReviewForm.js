import React from "react";
import StarRating from "./StarRating";


export default function ReviewForm() {

    return (
      <form className="form">
         <textarea rows = "2" cols = "20" name = "review" placeholder="Leave review here..." id="reviews">
         </textarea><br/>
         <StarRating /><br/>
         <button className="btn btn-primary">Submit</button>
      </form>
    )
  }

 