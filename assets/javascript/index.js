/*const cardsDeck = [
 
    {symbol: "star",
     img: "img/star.png",
    },

    {symbol: "bolt",
    img: "img/bolt.png",
   },  
   {symbol: "heart",
     img: "img/heart.png",
    },
    {symbol: "key",
     img: "img/key.png",
    },
    {symbol: "smile",
     img: "img/smile.png",
    },
    {symbol: "sun",
     img: "img/sun.png",
    },
]

const game = document.getElementById('game')
const grid = document.createElement('section')
grid.setAttribute('class','grid')
game.appendChild (grid)
*/
let numberCards = [1,1,2,2,3,3,4,4,5,5,6,6];
let cardsContent = [];
let stateofCards = [0,0,0,0,0,0,0,0,0,0,0,0];
let flipCard = [];
let score = 0;

let img_cards = document.getElementById("cards").getElementsByTagName("img")

for (let i = 0; i<img_cards.length; i++) 
{
  
img_cards[i] num_card= i;
img_cards[i].onclick = function() {
  controleGame =(this.num_card);};
}

function nb_random(nb)
{
  let number = Math.floor(Math.random() * nb);
  return number;
}