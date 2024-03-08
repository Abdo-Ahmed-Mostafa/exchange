let myInput = document.querySelector(".myInput");
let mySelect1 = document.querySelector(".sel1");
let mySelect2 = document.querySelector(".sel2");
let myBtn = document.querySelector(".myBtn");
let myH1 = document.querySelector(".myH1");
let name_contry = Object.values(COUNTRY_NAMES);
let keys_contry = Object.keys(COUNTRY_NAMES);
let myImge1 = document.querySelector(".contre-logo1");
let myImge2 = document.querySelector(".contre-logo2");
let myIcon = document.querySelector(".myChange");

for (var x in COUNTRY_NAMES) {
  var myOption = `
  <option  value ="${x}"   class = "text-light bg-dark " > ${
    x + " || " + COUNTRY_NAMES[x]
  }</option>
  `;

  mySelect1.innerHTML += myOption;
  mySelect2.innerHTML += myOption;
}
mySelect1.addEventListener("change", () => {
  var myImg = `https://flagsapi.com/${mySelect1.value.slice(
    0,
    -1
  )}/shiny/32.png`;
  myImge1.src = myImg;
});

mySelect2.addEventListener("change", () => {
  var myImg = `https://flagsapi.com/${mySelect2.value.slice(
    0,
    -1
  )}/shiny/32.png`;
  myImge2.src = myImg;
});

myBtn.addEventListener("click", () => {
  fetch(
    `https://v6.exchangerate-api.com/v6/9ea7a2d2514dd5c9542f0362/latest/${mySelect1.value}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
     
      var mony = data.conversion_rates[mySelect2.value];
      // console.log(mony);
      if (myInput.value == "") {
        myH1.innerHTML = ` ${1 + " " + mySelect1.value} = ${
          mony.toFixed(2) + " " + mySelect2.value
        } `;
      } else {
        myH1.innerHTML = ` ${myInput.value + " " + mySelect1.value} = ${
          (myInput.value * mony).toFixed(2) + " " + mySelect2.value
        } `;
      }
    });
});
myIcon.addEventListener("click", () => {
  let mySelect = mySelect1.value;
  mySelect1.value = mySelect2.value;
  mySelect2.value = mySelect;
  let hma = `https://flagsapi.com/${mySelect1.value.slice(
    0,
    -1
  )}/shiny/32.png`;
  myImge1.src = hma
  let hmaa = `https://flagsapi.com/${mySelect2.value.slice(
    0,
    -1
  )}/shiny/32.png`;
  myImge2.src = hmaa

});