var allIngredients = [];
var HTMLIngredients = [];


var ingredientsMeals = [];
var HTMLingredientsMeals = [];


getIngredientApi();

async function getIngredientApi(){
    var response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    allIngredients = await response.json();
    console.log(allIngredients);
    displayIngredients();
}

async function getIngrediantMealAPI(clickedingredient){
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${clickedingredient}`);
    ingredientsMeals = await response.json();
}

function displayIngredientMeals(){

    $('.ingredientItem i ,.ingredientItem h2,.ingredientItem p').click(function(e){
        let clickedIngredient = $('.ingredientItem h2').html();
        console.log(clickedIngredient);


        ingredientsMeals = getIngrediantMealAPI(clickedIngredient);

        setTimeout(() => {
            
            for(let i=0 ; i<ingredientsMeals.meals.length; i++){

                let ingredientMeal = "";
                ingredientMeal = `<div class="col-sm-6  col-lg-3">
                                    <div class="ingredientItem ">
                                        <img class="rounded-start rounded-end" src="${ingredientsMeals.meals[i].strMealThumb}" alt="Food Image">

                                            <div class="ingredientHover d-flex align-items-center ps-2 text-black">
                                            <h2>${ingredientsMeals.meals[i].strMeal}</h2>
                                            </div>
                                    </div>
                                </div>`;


                                HTMLingredientsMeals.push(ingredientMeal);
                    
                // console.log(categoryMeals.meals[i]);
            }
            $('#ingredientsRow').html(HTMLingredientsMeals);




        }, 1000);


        $('.ingredientItem').click(function(){
            console.log("hello");
        })



    })
}

function displayIngredients(){
    let ingredient = "";


    for(let i=0;i<20 ; i++){
        let description = allIngredients.meals[i].strDescription;
        if(description.length>130) description=description.slice(0,121);


        ingredient = `<div class="col-md-6 col-lg-3">
                        <div class="ingredientItem p-2">
                            <i class="fa-solid fa-utensils fa-3x mb-3"></i>
                            <h2>${allIngredients.meals[i].strIngredient}</h2>
                            <p>${description}</p>
                        </div>
                    </div>`;

    HTMLIngredients.push(ingredient);

    }


    $('#ingredientsRow').html(HTMLIngredients) ;

    displayIngredientMeals();
}



sidebarMenu ();

function sidebarMenu (){
    $('#closeIcon').click(function(){
    
        console.log("Clicked");
    })
    
    let sidebarWidth = $('.sidebar').innerWidth();
    var closeOpenIcon = `<i class="fa-sharp fa-solid fa-bars fa-2x " id="menuIcon"></i>`;
    
    $('.closeOpenIcon').html(closeOpenIcon);
    
    $('.closeOpenIcon').click(function(){
    
        if( $('.sidebar').css("left") == "0px" ){
            $('.sidebar').animate({left : sidebarWidth },1000);
            closeOpenIcon = `<i class="fa-solid fa-xmark fa-2x text-center" id="closeIcon"></i>`;
            $('.closeOpenIcon').html(closeOpenIcon);
        }
        else{
            $('.sidebar').animate({left : 0 },1000);
            closeOpenIcon = `<i class="fa-sharp fa-solid fa-bars fa-2x " id="menuIcon"></i>`;
            $('.closeOpenIcon').html(closeOpenIcon);
        }
    
    
    
        // $('.sidebar').animate({left : "200px" },1000);
        console.log("Clicked");
    })
}
