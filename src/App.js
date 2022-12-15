import React from 'react';
import Potato from './Potato';

function Food({name, picture}) {
return (
  <div>
   <h2> I like {name} </h2> 
   <img src = {picture} />
  </div>
);
}

const foodLike = [
{
 name : 'Kimchi',
 image : 'https://recipe1.ezmember.co.kr/cache/recipe/2020/10/14/954d0e47cad6ce0f6bda194b5a4075b21.jpg'
,
},
{
  name : 'SamgYeopsal',
  image : 'https://gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg'
,
},
{
  name : 'Bibimbap',
  image : 'https://file.mk.co.kr/meet/neds/2022/06/image_readtop_2022_556024_16560682015086908.jpg'
,
},
{
  name : 'Doncasu',
  image : 'https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/1648853795624783235d00c_75_75.jpeg'
,
},
{
  name : 'Kimbap',
  image : 'https://recipe1.ezmember.co.kr/cache/recipe/2016/02/21/f34c2f0fcd67513941d683d90050f3c01.jpg'
,
}
];


function App() {
return (
<div>
 {foodLike.map(dish => (<Food name = {dish.name} picture = {dish.image} />))}
</div>
);
}

export default App;