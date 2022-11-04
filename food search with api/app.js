const searchBtn = document.getElementById("search-btn")
const mealsBody = document.getElementById("meals")
const mealContent = document.querySelector(".meal-desc")
const closeBtn = document.getElementById("button-close")
const FilledState = document.querySelector(".result")

// url=`https://api.edamam.com/api/recipes/v2/q=${searchInput}?app_id=${app_id}&app_key=${app_key}`;
searchBtn.addEventListener("click",(e)=>{
    e.preventDefault()
let searchInputText = document.getElementById("search-input").value;
fetchDataAPI(searchInputText)
});
async function fetchDataAPI(searchInput){
    app_id= '3ce6291a';
    app_key='a838066c27b32ea630cbab1c95287d74';
  
    // url=`https://api.edamam.com/api/recipes/v2/?q=${searchInput}?app_id=${app_id}&app_key=${app_key}&type=public`;
url=`https://api.edamam.com/search?q=${searchInput}&app_id=${app_id}&app_key=${app_key}`;
result= await fetch(url);
data=await result.json()
console.log(data)
Generatehtml(data.hits)
}
function Generatehtml(results){
    let showhtml='';
    results.map(result=>{
        showhtml += `
//             <div class="meal-item}">
//             <div class="meal-image">
//                 <img src="${result.recipe.image}" alt="food">
//             </div> 
//              <div class="meal-title">
//                 <p>${result.recipe.label}</p>
//                 <a href="#"class="meal-btn">Get Reciepe</a>
//             </div> 
//          </div>`  
    })

}
// searchBtn.addEventListener("click",getMeal);
// mealsBody.addEventListener("click", getInstruction);function getMeal(){
//     let searchInputText = document.getElementById("search-input").value;
//     if(searchInputText.length == 0){
//         result.innerHTML = `<h3>Input Field cannot be empty</h3>`
//     }
//     else{
//         url="https://api.edamam.com/api/recipes/v2"
//        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
//     .then(response=>response.json())
//     .then(data=>{
//         let html = "";
//         if(data.meals){
//             // console.log(data.meals)
//             data.meals.forEach(meal => {
//                      html += `
//             <div class="meal-item data-id=${meal.idMeal}">
//             <div class="meal-image">
//                 <img src="${meal.strMealThumb}" alt="food">
//             </div> 
//              <div class="meal-title">
//                 <p>${meal.strMeal}</p>
//                 <a href="#"class="meal-btn">Get Reciepe</a>
//             </div> 
//          </div>` 
//             });
//             mealsBody.classList.remove("not-seen");
//             result.innerHTML=`<h3></h3>`
//             // mealContainer.classList.remove('.meal-container:before');
            

//         }else{
//             html = "Sorry, Meal Unavailable at the moment.";
//            mealsBody.classList.add("not-seen");
//         }
//          mealsBody.innerHTML = html
//     });
    
//     }
   
// }

// function getInstruction(e){
//     e.preventDefault();
//     if(e.target.classList.contains('meal-btn')){
//         let mealItem = e.target.parentElement.parentElement; 
//         fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
//         .then(response => response.json(mealRecipeModal(response.meals)))
//         // .then(data => mealRecipeModal(data.meals));
//     }
// }

// function mealRecipeModal(meal){
//    meal =[];  
//     let html = `
//         <h2 class = "meal-heading">${meals.strMeal}</h2>
//         <p class = "meal-category">${meal.strCategory}</p>
//         <div class = "meal-instruction">
//             <h3>Instructions:</h3>
//             <p>${meal.strInstructions}</p>
//         </div>
//         <div class = "meal-desc-image">
//             <img src = "${meal.strMealThumb}" alt = "">
//         </div>
//         <div class = "order">
//             <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
//         </div>
//     `;
//     mealContent.innerHTML = html;
//     mealContent.parentElement.classList.add('show-details');
// }
 