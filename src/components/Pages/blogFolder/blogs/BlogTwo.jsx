import React from "react";
import './blogPost.css';
import Chef from '../../../../images/Chef.png';
import nzMush2 from '../../../../images/nzMush2.jpg';

const BlogTwo = () => {
  return (
    <div className="blog-post">
      <h1>Lion's Mane Mushrooms: A Delicious and Healthy Addition to Your Cooking</h1>
      <div className="content">
        <h2>Introduction</h2>
        <p>
          Lion's Mane mushrooms (Hericium erinaceus) are a type of fungus that is known for their health benefits. They are a good source of antioxidants, and they have been shown to improve cognitive function, reduce anxiety and depression, and boost the immune system.
        </p>
        <img className="blog-image" src={Chef} alt="description 1"/>
        <h2>How to Cook Lion's Mane Mushrooms</h2>
        <p>
          Lion's Mane mushrooms are a versatile ingredient that can be cooked in a variety of ways. They can be sauteed, roasted, steamed, or even eaten raw.
        </p>
        <div className="flex-container">
          <img className="blog-image-small" src={nzMush2} alt="description 2"/>
          
            <ul>
              <li>When sauteing, start with a hot pan and a small amount of oil. Cook the mushrooms over medium heat until they are browned on all sides.</li>
              <li>When roasting, preheat your oven to 400 degrees Fahrenheit. Toss the mushrooms with a little olive oil and your favorite seasonings. Roast for 20-25 minutes, or until the mushrooms are tender.</li>
              <li>When steaming, place the mushrooms in a steamer basket and steam for 5-7 minutes, or until the mushrooms are tender.</li>
            </ul>
          
          <h2>
            Recipes
          </h2>
          <ul>
            <li>
              <strong>Lion's Mane Mushroom Stir-Fry</strong>
              This is a quick and easy stir-fry that is perfect for a weeknight meal. Simply saute some onions, carrots, and bell peppers in a pan. Add the mushrooms and cook until they are browned. Serve over rice or noodles.
            </li>
            <li>
              <strong>Lion's Mane Mushroom Soup</strong>
              This is a hearty and comforting soup that is perfect for a cold winter day. Sauté some onions and garlic in a pot. Add the mushrooms and cook until they are browned. Add vegetable broth, salt, and pepper. Bring to a boil, then reduce heat and simmer for 20 minutes. Serve with your favorite toppings, such as croutons or grated Parmesan cheese.
            </li>
            <li>
              <strong>Lion's Mane Mushroom Risotto</strong>
              This is a luxurious and decadent risotto that is perfect for a special occasion. Sauté some onions and garlic in a pot. Add arborio rice and cook until the rice is coated in the oil. Add white wine and cook until the wine is absorbed. Add vegetable broth, a ladleful at a time, stirring constantly until the broth is absorbed. Continue adding broth until the rice is cooked through, about 20 minutes. Stir in the mushrooms and Parmesan cheese. Serve immediately.
            </li>
          </ul>
        </div>
        <h2>Conclusion</h2>
        <p>
          Lion's Mane mushrooms are a delicious and healthy addition to your cooking. They can be cooked in a variety of ways, and they are perfect for a variety of dishes. So next time you're looking for a new recipe to try, be sure to give Lion's Mane mushrooms a try!
        </p>
      </div>
    </div>
  );
};

export default BlogTwo;