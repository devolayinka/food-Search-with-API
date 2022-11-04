const searchBtn = document.getElementById("search-btn")
const mealsBody = document.getElementById("meals")
const mealContent = document.querySelector(".meal-desc")
const closeBtn = document.getElementById("button-close")
const result = document.querySelector(".result")
// const mealContainer =document.querySelector(".container")
searchBtn.addEventListener("click",getMeal);
mealsBody.addEventListener("click", getInstruction);

closeBtn.addEventListener('click', () => {
    mealContent.parentElement.classList.remove('show-details');
    mealContainer.classList.remove('meal-container:before');
});

function getMeal(){
    let searchInputText = document.getElementById("search-input").value;
    if(searchInputText.length == 0){
        result.innerHTML = `<h3>Input Field cannot be empty</h3>`
    }
    else{
       fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
    .then(response=>response.json())
    .then(data=>{
        let html = "";
        if(data.meals){
            // console.log(data.meals)
            data.meals.forEach(meal => {
                     html += `
            <div class="meal-item data-id=${meal.idMeal}">
            <div class="meal-image">
                <img src="${meal.strMealThumb}" alt="food">
            </div> 
            <div class="meal-title">
                <p>${meal.strMeal}</p>
                <a href="#"class="meal-btn">Get Reciepe</a>
            </div> 
         </div>` 
            });
            mealsBody.classList.remove("not-seen");
            result.innerHTML=`<h3></h3>`
            // mealContainer.classList.remove('.meal-container:before');
            

        }else{
            html = "Sorry, Meal Unavailable at the moment.";
           mealsBody.classList.add("not-seen");
        }
         mealsBody.innerHTML = html
    });
    
    }
   
}

function getInstruction(e){
    e.preventDefault();
    if(e.target.classList.contains('meal-btn')){
        let mealItem = e.target.parentElement.parentElement; 
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json(mealRecipeModal(response.meals)))
        // .then(data => mealRecipeModal(data.meals));
    }
}

function mealRecipeModal(meal){
   meal =[];  
    let html = `
        <h2 class = "meal-heading">${meals.strMeal}</h2>
        <p class = "meal-category">${meal.strCategory}</p>
        <div class = "meal-instruction">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "meal-desc-image">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "order">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
    mealContent.innerHTML = html;
    mealContent.parentElement.classList.add('show-details');
}
 