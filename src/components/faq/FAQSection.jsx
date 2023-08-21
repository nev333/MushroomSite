import React, { useState } from 'react';
import './faqSection.css';

const FAQSection = () => {
  const [expandedQuestionIndex, setExpandedQuestionIndex] = useState(null);

  const faqData = [
    {
      question: 'Can I grow my own Lions Mane mushrooms in NZ',
      answer: 'Yes you can! There are several New Zealand based websites that sell grow kits for Lions Mane mushrooms, and many more medicinal and culinary mushrooms'
    },
    {
      question: 'What other medicinal mushrooms are there?',
      answer: 'There are many medicianl and culinary mushrooms available to us here in New Zealand'
    },
    {
        question: 'How is Pepeke Kiore (New Zealands Lion Mane) different to Hericium Erinaceus?',
        answer: "Hericium erinaceus, or lion's mane mushroom, grows in a single, large clump with long, shaggy spines giving it a distinctive 'mane-like' appearance, while Hericium coralloides, the coral tooth fungus, features multiple branching structures with smaller spines, resembling ocean coral rather than a mane"
      },
    // add as many questions as you need
  ];

  const handleQuestionClick = (index) => {
    setExpandedQuestionIndex(index === expandedQuestionIndex ? null : index);
  };

  return (
    <section className="FAQSection">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <article key={index} className={`FAQItem ${expandedQuestionIndex === index ? 'active' : ''}`}>
          <h3>{faq.question}</h3>
          <span 
            className="readMore" 
            onClick={() => handleQuestionClick(index)}
          >
            Read More
          </span>
          <p>{expandedQuestionIndex === index && faq.answer}</p>
        </article>
      ))}
    </section>
  );
};

export default FAQSection;
