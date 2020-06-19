const section = document.querySelector('section');

let requestURL = '../popup.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function(){
    const popup = request.response;
    showPopUp(popup);
}
function showPopUp(jsonObj) {
    const heroes = jsonObj['popUp'];
      const name = document.getElementById('name');
      const img1 = document.getElementById('img1');
      const img2 = document.getElementById('img2');
      const img3 = document.getElementById('img3');
      const price = document.getElementById('price');
  
      name.textContent = heroes[0].name;
      price.textContent = heroes[0].price;
      img1.textContent = heroes[0].img;
      img2.textContent = heroes[0].img;
      img3.textContent = heroes[0].img;
      img1.setAttribute('src', heroes[0].img);
      img2.setAttribute('src', heroes[0].img);
      img3.setAttribute('src', heroes[0].img);
}
