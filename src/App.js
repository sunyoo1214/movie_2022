import React from 'react';
import Potato from './Potato';

function Food({name}) {
return <h1> I like {name} </h1> ;
}

const foodLike = [
{
 name : 'Kimchi',
 image : 'https://www.google.co.kr/url?sa=i&url=https%3A%2F%2Fwww.maangchi.com%2Frecipe%2Ftongbaechu-kimchi&psig=AOvVaw1qa737OufSAzmce9Jbvn67&ust=1671199717850000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKi1rqPm-_sCFQAAAAAdAAAAABAD',
},
{
  name : 'SamgYeopsal',
  image : 'https://www.google.co.kr/url?sa=i&url=https%3A%2F%2Fwww.honestfoodtalks.com%2Fsamgyeopsal-korean-grilled-pork-belly%2F&psig=AOvVaw0RNRzNMp_4ap3QE9Qez6y8&ust=1671199756265000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjDlLHm-_sCFQAAAAAdAAAAABAD',
},
{
  name : 'Bibimbap',
  image : 'https://www.google.co.kr/url?sa=i&url=https%3A%2F%2Fwww.maangchi.com%2Frecipe%2Fbibimbap&psig=AOvVaw2R_w46mG0LUzEJM3Q-t1s_&ust=1671199774335000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICLtrnm-_sCFQAAAAAdAAAAABAH',
},
{
  name : 'Doncasu',
  image : 'https://www.google.co.kr/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fhashtag%2F%25EC%259D%25B4_%25ED%2595%25B4%25EC%258B%259C%25EB%25A5%25BC_%25EB%25B4%25A4%25EB%258B%25A4%25EB%25A9%25B4_%25EA%25B3%2584%25EC%25A0%2595_%25EC%25A3%25BC%25EC%25A0%259C_%25EB%25A7%2590%25ED%2595%2598%25EA%25B8%25B0&psig=AOvVaw32PM7d_4dkzW4rmbBJ3WXO&ust=1671199795204000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjB-8Pm-_sCFQAAAAAdAAAAABAQ',
},
{
  name : 'Kimbap',
  image : 'https://www.google.co.kr/url?sa=i&url=https%3A%2F%2Fwww.lafujimama.com%2Fblta-kimbap%2F&psig=AOvVaw2Okh987Ya-4_fDDz_VhfL6&ust=1671199823472000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMj3vNLm-_sCFQAAAAAdAAAAABAD',
}
];


function App() {
return (
<div>
 {foodLike.map(dish => (<Food name = {dish.name} />))}
</div>
);
}

export default App;