

// let allFoodImages = [];

// let row = document.createElement('div');
// row.className = "row";
// let column = document.createElement('div');
// column.classList.add('col-sm-6').add('col-lg-3');




// close Icon 
// $('#closeIcon').click(function(){
//     console.log("Clicked");
//     $('#sidebar').animate({width:'toggle'} , 1000);
// })

var allFoodImages = [];
var HTMLFoodImages = [];

async function getSearchAPI(){
    var response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    allFoodImages = await response.json();
    console.log(allFoodImages);
    dipslayMeals();
}



function dipslayMeals(){
    let meal = "";
    for(let i=0 ; i<allFoodImages.meals.length ;i++){
        meal = `<div class="column col-sm-6  col-lg-3">
                    <div class="foodItem ">
                        <img class="rounded-start rounded-end" src="${allFoodImages.meals[i].strMealThumb}" alt="Food Image">
            
                        <div class="mealLayer d-flex align-items-center ps-2 text-black">
                            <h2>${allFoodImages.meals[i].strMeal}</h2>
                        </div>

                    </div>
            </div>`;
        
            
    
    HTMLFoodImages.push(meal);
    }

    $('#mainPageRow').html(HTMLFoodImages);
    getmealDetails();
}

var index;

function getmealDetails(){
    for(let i=0 ; i<allFoodImages.meals.length ;i++){

        $('.foodItem').click(function(e){
            var clickedMeal = $(this).children().children().text();
            // console.log(e);
            if(allFoodImages.meals[i].strMeal == clickedMeal){
                index = i;
                displayMealDetails(index);
                console.log(i);
                console.log(clickedMeal);
            }
            
            // console.log($('.foodItem').chhi=)
        })
    }


    


}

// var tags =[];

function displayMealDetails(index){

    // tags = allFoodImages.meals[index].strTags;
    // tags = tags.split(",");
    // console.log(tags);


    let mealDetails = "";
    mealDetails = `<div class="col-md-6">
    <div class="mealDetails text-white text-center">
        <img src="${allFoodImages.meals[index].strMealThumb}" alt="Meal Image">
        <h2>${allFoodImages.meals[index].strMeal}</h2>
    </div>
</div>

<div class="col-md-6">
    <div class="mealDetailsText text-white">
        <h4>Instructions</h4>
        <p>${allFoodImages.meals[index].strInstructions}</p>

        <p><span class="fw-bolder">Area : </span>${allFoodImages.meals[index].strArea}</p>
        <p><span class="fw-bolder">Category : </span>${allFoodImages.meals[index].strCategory}</p>

        <h4>Recipes : </h4>


        <h4>Tags : </h4>
        <p class="my-4 p-1 text-center bg-dark w-25 rounded-start rounded-end">${allFoodImages.meals[index].strTags}</p>


        <a href="${allFoodImages.meals[index].strSource}" class="btn btn-success">Source</a>
        <a href="${allFoodImages.meals[index].strYoutube}" class="btn btn-danger">Youtube</a>
    </div>
</div>`;


    $('#mainPageRow').html(mealDetails);

}




// var offsetHeight = document.querySelector('body').offsetHeight;
// document.querySelector('.closeSection').setAttribute("style",`height:${offsetHeight}`);
// $('.sidebar').innerHeight = offsetHeight;






getSearchAPI();

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

