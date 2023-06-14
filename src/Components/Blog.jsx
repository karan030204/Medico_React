import React from "react";
import "../Elements/Blog.css";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";

const Blog = () => {
  const card_details = [
    {
      card_image: `${card1}`,
      question:
        "What's the difference between diabetic shoes and orthopedic shoes?",
      answer:
        "In general, therapeutic shoes are specifically designed to keep your feet healthy if you have neuropathy, nerve damage, or an existing foot injury.",
      link: "",
    },
    {
      card_image: `${card2}`,
      question: "Are diabetic shoes good for neuropathy?",
      answer:
        "Diabetic shoes can be designed with impressive features that can help relieve neuropathy symptoms.One important feature is stretchable uppers which is an ideal feature for those experiencing...",
      link: "",
    },
    {
      card_image: `${card3}`,
      question: "Who should wear diabetic shoes?",
      answer:
        "Diabetics, or people who have diabetes, are at a significantly increased risk for foot disease and injury. The importance of Diabetic Shoes can provide both protection and comfort.",
      link: "",
    },
  ];

  return (
    <div className="Blog">
      <div className="blog-title">
        <h1>Blog</h1>
      </div>
      <div className="cards-section">
        {card_details.map((card)=>(
        <div class="card">
          <img src={card.card_image} alt="Avatar" style={{ width: "100%" }} />
          <div class="container">
            <h4>
              <b >{card.question}</b>
            </h4>
            <p>{card.answer}</p>
          </div>
          <div className="read-btn">
            <button >Read More</button>
          </div>
        </div>
        ))
        }
      </div>
    </div>
  );
};

export default Blog;
