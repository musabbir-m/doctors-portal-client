import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Reviews from "./Reviews";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Henry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      image: people1,
    },
    {
      _id: 2,
      name: "Winson Henry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      image: people2,
    },
    {
      _id: 3,
      name: "Winson Henry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      image: people3,
    },
  ];
  return (
    <section className="my-16">
      <div className="flex justify-between font-bold">
        <div>
          <h4 className="text-primary text-xl">Testimonials</h4>
          <h2 className="text-4xl">What our patients says</h2>
        </div>
        <figure>
          <img className="w-24 lg:w-48 " src={quote} alt="" />
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <Reviews key={review._id} review={review}></Reviews>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
