import React from 'react';
import './about.css';
import lions from "../../../images/lionsMane2.webp"
import coral from "../../../images/CoralTooth2.webp"


const About = () => {
  return (
    <div>
    <section className="about-section">
      <div className="container">
        <h2>About Lion's Mane NZ: A Gateway to Mushroom Magic</h2>
        <img src={lions} alt="Portrait" className="portrait-image" />
        <p>
        Welcome to Lion's Mane NZ, your comprehensive resource for understanding the wonders of Lion's Mane mushrooms. Our primary focus is on the majestic Lion's Mane, also known as Hericium erinaceus. However, our fascination extends to the entire spectrum of beneficial fungi, including the special variant found here in NZ, the Pekepeke-kiore.
        </p>
        <p>
        The Lion's Mane mushroom, celebrated for its distinct shaggy appearance reminiscent of a lion's majestic mane, intrigues researchers and health-conscious individuals alike for its potential health-enhancing properties. While not native to New Zealand, this beneficial mushroom has established a presence here and in many other parts of the world.
        </p>
        <p>
        In the forests of New Zealand, we find a close relative, the Pekepeke-kiore. While both the Lion's Mane and the Pekepeke-kiore share many attributes, there are subtle differences due to their unique adaptations to the local environments. Pekepeke-kiore, also known as the NZ Lion's Mane mushroom, has captivated local enthusiasts with its unique features and growth patterns.
        </p>
        <p>
        <img src={coral} alt="Portrait" className="portrait-image-2" />
          In various cultures, the Lion's Mane mushroom, including the NZ Lion's Mane mushroom, has been revered for its potential medicinal properties. Celebrated for its potential cognitive and neurological benefits, studies suggest it supports brain health, enhancing aspects like memory, focus, and mental clarity. These benefits may be attributed to the compounds hericenones and erinacines, thought to stimulate nerve growth factor (NGF) production – a crucial component in nerve cell maintenance and regeneration.
          </p>
        <p>
        Additionally, Lion's Mane mushroom is potentially a formidable ally for immune health. With its abundance of bioactive substances, including polysaccharides and antioxidants, it potentially fortifies the immune system and boosts overall wellness.
        </p>
        <p>
        At Lion's Mane NZ, we are dedicated to offering reliable information and the highest quality Lion's Mane products. We are equally passionate about exploring and sharing the incredible world of beneficial mushrooms, including our native NZ Lion's Mane.
        </p>
        <p>
        Whether you're intrigued by the potential cognitive benefits of Lion's Mane, seeking top-notch mushroom supplements, or simply want to learn more about the amazing world of medicinal mushrooms, we're here to guide you on your journey. Uncover nature's well-kept secrets with Lion's Mane NZ and set your path to enhanced well-being.
        </p>
      </div>
      
    </section>
    <div>
   
  </div>
  </div>
  );
};

export default About;