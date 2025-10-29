const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const {
    validateReview, 
    isLoggedIn, 
    isReviewAuthor
}=require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//Post Review route
router.post("/", 
    isLoggedIn,
    wrapAsync(reviewController.createReview));

//Delete Reviw Route
router.delete(
    "/:reviewId",
    isReviewAuthor,
    isLoggedIn,
    wrapAsync(reviewController.destroyReview)
);

module.exports = router;