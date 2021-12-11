

let allRecapies = [];

let recapieDetails = [];

let searchInput = document.getElementById("searchInput");

let searchBtn = document.getElementById("searchBtn");


async function getRecapies(term)
{
    let response = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`);
    allRecapies = await response.json();
    allRecapies = allRecapies.recipes;
    console.log(allRecapies);
    displayRecapies()
}


async function getRecapieDetails(id)
{
    console.log("gfg");
    let response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    recapieDetails = await response.json();
    recapieDetails = recapieDetails.recipe;
    displayRecapieDetails()
    console.log(recapieDetails);
    
}


function displayRecapies()
{
    let container = ``;

    for(let i=0; i<allRecapies.length ; i++)
    {
        container += `   <div class="col-md-4">
        <div class="item" onclick="getRecapieDetails(${allRecapies[i].recipe_id})">
         <img src="${allRecapies[i].image_url}" class="w-100" alt="">
         <h5 class="p-2 color-mine">${allRecapies[i].title}</h5>
         <p>${allRecapies[i].publisher}</p>
        </div>
      </div>`;
    }

   
    document.getElementById("myRow").innerHTML = container;
};



function displayRecapieDetails()
{
    let containerLi =``;


    

    for(let i=0;i<recapieDetails.ingredients.length;i++)
    {
        containerLi += `<li>${recapieDetails.ingredients[i]}</li>`
    }

    document.getElementById("recapieRow").innerHTML = `
    
    <img src="${recapieDetails.image_url}" class="w-100" alt="">
    <h4 class="py-4 color-mine">${recapieDetails.title}</h4>
    <ul>
    ${containerLi}
 
    </ul>`;
}



searchBtn.addEventListener("click",function(){

    
    getRecapies(searchInput.value);
    console.log();
});

