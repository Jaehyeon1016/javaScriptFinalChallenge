const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img"); //js에서 html에 추가하는 작업을 할 수 있음 여기같은 경우 <img>를 추가한거임
bgImage.src = `img/${chosenImage}`; //<img src = "img/1.jpg">이런식으로 만든거임

document.body.appendChild(bgImage); //위에껄 body안에 넣어야되는데 appendChild가 가능하게 함
