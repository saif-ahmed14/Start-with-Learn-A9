import React from 'react';
import StarRatings from 'react-star-ratings';

const CourseItem = (props) => {
    const { title, institute, rating, totalRate, lebel, price, imgUrl } = props.course;
    return (
        <article className='row course-container border-bottom my-4'>
            <div className='d-flex align-items-center my-3'>
                <div className='me-3'>
                    <img src={imgUrl} className='img-fluid' alt="" />
                </div>
                <div className='w-100'>
                    <h1>{title}</h1>
                    <p><small>Offer by: {institute}</small></p>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <p>Ratings: <StarRatings rating={rating} starRatedColor='gold' starEmptyColor='#000' starDimension="16px" starSpacing="1px"></StarRatings> <strong>{rating}</strong> || Total Enrolled <strong>{totalRate}</strong></p>
                            <h6>Lebel: {lebel}</h6>
                        </div>
                        <div>
                            <button className='btn btn-outline-warning'>Enroll Now</button>
                        </div>
                    </div>
                    <p><strong>Course Fee:</strong> ${price}</p>
                </div>

            </div>

        </article>
    );
};

export default CourseItem;