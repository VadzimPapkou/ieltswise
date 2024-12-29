"use server";

import classes from "./Reviews.module.scss";
import moment from "moment/moment";
import React from "react";
import {apiUrl} from "../../axiosClient";
import {Review} from "./Review";

export const ReviewsList = async () => {
    const reviews = await fetchReviews();

    return (
        <>
            <div className={classes.blank}></div>
            {reviews.map((review) => (
                <Review review={review}>
                    <div className={classes.reviewHeader}>
                        <div className={classes.reviewAvatar}>{review.name[0].toUpperCase()}</div>
                        <div className={classes.reviewText}>
                            <h3 className={classes.reviewName}>{review.name}</h3>
                            <p className={classes.reviewCreated}>{moment(review.created).format("MMMM DD, YYYY")}</p>
                        </div>
                    </div>
                    <p className={classes.reviewValue}>“{review.value}”</p>
                </Review>
            ))}
        </>
    );
};

async function fetchReviews() {
    try {
        const responsePromise = fetch(apiUrl + "/comments", {cache: "no-cache"});
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(reject, 1000);
        });
        const response = await Promise.race([responsePromise, timeoutPromise]);
        if (!response.ok) throw new Error("Comments response returned error");
        const reviews = await response.json();
        return reviews.sort((a, b) => (a.id > b.id ? -1 : 1));
    } catch (e) {
        return [];
    }
}
