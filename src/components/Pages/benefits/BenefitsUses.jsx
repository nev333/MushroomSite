import React, { useEffect } from 'react';
import './BenefitsUses.css';
import { TbMoodCheck } from 'react-icons/tb';
import { BiBrain } from 'react-icons/bi';
import { GiBrainStem, GiStomach } from 'react-icons/gi';
import { LuChefHat } from 'react-icons/lu';
import AOS from 'aos'; // <-- AOS import
import 'aos/dist/aos.css'; // <-- AOS CSS import

const benefitsData = [
  {
    title: "Cognitive Health Boost",
    icon: <BiBrain className='icon' />,
    link: "/cognitive-health-link",
    description: "Research suggests that Lion's Mane mushrooms may help boost cognitive health. They contain two special compounds, hericenones and erinacines, that may stimulate the growth of brain cells. While more extensive human trials are needed, early studies are promising, showing potential improvements in mild cognitive impairment."
  },
  {
    title: "Support for the Nervous System",
    icon: <GiBrainStem className='icon' />,
    link: "/cognitive-health-link",
    description: "The unique compounds found in Lion's Mane mushrooms may not only stimulate the growth of brain cells but may also help with the regeneration of nerves. This could potentially be beneficial in the treatment and recovery of nervous system injuries, although more research is required in this area."
  },
  {
    title: "Gut Health Ally",
    icon: <GiStomach className='icon' />,
    link: "/cognitive-health-link",
    description: "Traditional use and some preliminary research indicate that Lion's Mane might support gut health by fighting inflammation and aiding in the repair of gastric ulcers. However, more comprehensive studies in humans are needed to substantiate these claims."
  },
  {
    title: "Mood and Stress Regulator",
    icon: <TbMoodCheck className='icon' />,
    link: "/cognitive-health-link",
    description: "Early research shows that Lion's Mane could have potential mental health benefits, including reducing symptoms of anxiety and depression. These studies suggest that the mushroom might impact the functioning of the hippocampus, a region of the brain responsible for emotional responses."
  },
  {
    title: "Culinary Delight",
    icon: <LuChefHat className='icon' />,
    link: "/cognitive-health-link",
    description: "Beyond their potential health benefits, Lion's Mane mushrooms are a culinary treat. With a flavor and texture often compared to seafood, like crab or lobster, they are a fantastic addition to many dishes. You can sauté them in butter, bake, or grill them, add them to soups, pasta, or stir-fries. They are not only delicious but also a great source of protein and fiber."
  },
];

const BenefitsUses = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        offset: 200,
        once: false,
      });
    }, []);
  
    return (
      <div className="benefits-section">
        <h2>Benefits and Uses of Lion's Mane Mushrooms</h2>
        {benefitsData.map((benefit, index) => (
          <div 
            className={`benefit-box ${index % 2 === 0 ? 'left' : 'right'}`} 
            key={index}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} // AOS attributes
            data-aos-anchor-placement="top-center" // when the animation is triggered
          >
            <div className="icon-container">{benefit.icon}</div>
            <div className="text-container">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
              {/* <a href={benefit.link} className="read-more">Read more</a> */}
            </div>
          </div>
        ))}
       
        <p className='bottom-text'>Always source Lion's Mane mushrooms from reputable suppliers to ensure safety and quality. <br />Happy mushrooming!</p>
      </div>
    );
  }
  
  export default BenefitsUses;
