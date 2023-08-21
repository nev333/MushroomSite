import BlogTwo from './blogs/BlogTwo';
import BlogOne from './blogs/BlogOne'; // ensure the path is correct
import BlogThree from './blogs/BlogThree'
import Chef from '../../../images/Chef.png'
import NzMush from '../../../images/nzMush2.jpg'
import LMane2 from '../../../images/lionsMane2.jpg'

const blogPosts = [
  {
    id: '1',
    title: "Understanding the Enigmatic Connection: Lion's Mane Mushroom and New Zealand's Coral Tooth (Pekepeke-kiore)",
    content: BlogOne, // Component reference here
    image: NzMush,
    // date: '2023-07-01',
  },
  {
    id: '2',
    title: "Lion's Mane Mushrooms: A Delicious and Healthy Addition to Your Cooking",
    content: BlogTwo, // Component reference here
    image: Chef,
    // date: '2023-07-01',
  },
  {
    id: '3',
    title: "Growing Lion's Mane Mushrooms in New Zealand",
    content: BlogThree, // Component reference here
    image: LMane2,
    // date: '2023-07-01',
  },
  
];

export default blogPosts;



