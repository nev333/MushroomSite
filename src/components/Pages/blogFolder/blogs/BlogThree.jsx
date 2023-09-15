import React from "react";
import './blogPost.css';
// import lionsMane2 from '../../../../images/lionsMane2.webp';
import ReactPlayer from 'react-player';
import LM2 from '../../../../images/lionsMane2.webp'

const BlogThree = () => {
  return (
    <div className="blog-post">
      <h1>Growing Lion's Mane Mushrooms in New Zealand</h1>
      <div className="content">
        <h2>Introduction</h2>
        <p>
          Lion's Mane mushrooms (Hericium erinaceus) are a type of fungus that is known for their health benefits. They are a good source of antioxidants, and they have been shown to improve cognitive function, reduce anxiety and depression, and boost the immune system.
        </p>
        <p>
          Lion's Mane mushrooms are native to North America, Europe, and Asia, but they can also be grown in New Zealand. In fact, New Zealand is a great place to grow Lion's Mane mushrooms because the climate is cool and humid, which are ideal conditions for these mushrooms.
        </p>
        <img className="blog-image" src={LM2} alt="description 1"/>
        <h2>How to Grow Lion's Mane Mushrooms in New Zealand</h2>
        <p>
          There are a few different ways to grow Lion's Mane mushrooms in New Zealand. One way is to grow them on logs. This is a traditional method of growing mushrooms, and it is a relatively easy way to do it. To grow Lion's Mane mushrooms on logs, you will need to find a suitable log. The log should be a hardwood log that is at least 6 inches in diameter and 2 feet long. You will also need to drill holes in the log, about 1 inch deep and 2 inches apart. Once you have drilled the holes, you can inoculate the log with Lion's Mane mushroom spawn.
        </p>
        <div className="youtube-container">
        <ReactPlayer url='https://youtu.be/dIDlf2Zs-xg' controls={true} width="100%" height="auto" />
        </div>
        <p>
          Another way to grow Lion's Mane mushrooms in New Zealand is to grow them in bags. This is a more modern method of growing mushrooms, and it is a more efficient way to do it. To grow Lion's Mane mushrooms in bags, you will need to purchase a mushroom grow bag. These bags come pre-sterilized, so you can simply add the mushroom spawn and water. The mushrooms will then grow in the bag.
        </p>
        <h2>Conclusion</h2>
        <p>
          Growing Lion's Mane mushrooms in New Zealand is a great way to get your hands on these delicious and healthy mushrooms. There are a few different ways to grow them, so you can choose the method that is best for you. With a little care and attention, you can be enjoying homegrown Lion's Mane mushrooms in no time!
        </p>
      </div>
    </div>
  );
};

export default BlogThree;