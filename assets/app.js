// N1
const btnSelect = document.querySelector(".btn");
const sectionSelect = document.querySelector("#images-list");
const myButton = document.querySelector("#seeMore");

const seeMore = document.getElementById("see")
    btnSelect.addEventListener("click",(e) => {
    btnSelect.remove();
});

// N2

const imgTagInset = document.createElement("img");
imgTagInset.setAttribute("src","https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8");
imgTagInset.setAttribute("alt","street");
btnSelect.insertAdjacentElement("afterend" , imgTagInset);
imgTagInset.classList.add("secondTask");


// N3 + N4


function renderResultJs() {
    const imagesFromJs = results.map((ress)=> {
        return `
            <div class="card">
                <div class="imgContainer">
                    <img  src="${ress.webImage.url}">
                </div>
                <div class="txt">
                    <h3>${ress.title}</h3>
                    <p class="longTitle">${ress.longTitle}</p>
                </div>
                <div class="buttons">
                    <button class="green" id="seeMore">see more details</button>
                    <button class="pink">remove card</button>
                </div>
            </div>
        `;
    });
 
    sectionSelect.innerHTML = imagesFromJs.join("");


    const removeCardButtons = document.querySelectorAll(".pink");
    removeCardButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const cardElement = event.target.closest(".card");
        cardElement.remove(); 
      });
    });


    const addTitle = document.querySelectorAll(".green");
        addTitle.forEach((button, index) =>{
            button.addEventListener("click",()=> {
                window.location.href = results[index].links.web;
            })
        })
  }

  renderResultJs();