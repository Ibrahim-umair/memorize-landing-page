import React from 'react';

const testimonialsData = [
    {
        name: "Aisha Khan",
        feedback: "Memorize has transformed my Quran learning experience. The structured lessons and supportive community are invaluable!",
        rating: 5
    },
    {
        name: "Mohammed Ali",
        feedback: "I love the interactive features and the ability to track my progress. Highly recommend it to anyone looking to memorize the Quran.",
        rating: 4
    },
    {
        name: "Fatima Zahra",
        feedback: "The resources provided are top-notch. I appreciate the dedication of the instructors and the flexibility of the platform.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>User Testimonials</h2>
            <div className="testimonial-list">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.feedback}</p>
                        <p>Rating: {testimonial.rating} / 5</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;