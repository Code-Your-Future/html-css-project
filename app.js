const myLinkCity = document.querySelectorAll("main a");
const myCityName = document.querySelector("#city-name");
const myCityDisc = document.querySelector(".desc");
const myInfoCity = document.querySelectorAll(".info");
const myFamousCity = document.querySelectorAll(".famous");

myLinkCity.forEach(lin => {
  lin.addEventListener("click", () => {
    myCityName.textContent = lin.textContent;
    myFeth(lin.textContent);
  });
});

function myFeth(discreption) {
  fetch("city.json")
    .then(res => {
      return res.json();
    })
    .then(data => {
      data.map(data => {
        if (data.id == discreption) {
          let i = 0;
          myCityDisc.textContent = "";
          var t = setInterval(() => {
            myCityDisc.textContent += data.disc[i];

            if (i == data.disc.length - 1) {
              clearInterval(t);
            }
            i++;
          }, 100);
        }
      });
    });
}

myFamousCity.forEach(d => {
  d.addEventListener("mouseover", () => {
    d.firstElementChild.className += " over";
  });
});
myFamousCity.forEach(d => {
  d.addEventListener("mouseleave", () => {
    d.firstElementChild.classList.remove("over");
  });
});
