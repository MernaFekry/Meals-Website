


// let element = `<div class="col-sm-6 col-lg-3">
// <div class="areaItem">
//     <i class="fa-solid fa-utensils fa-3x mb-3"></i>
//     <h2>American</h2>
// </div>
// </div>`;


// $('.areaRow').html(element);

var allAreas = [];
var HTMLAreas = [];

var areaMeals = [];

// strArea
// meals


async function getAreaApi(){
    // var request = new XMLHttpRequest();
    // request.open('GET','https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    // request.send();
    // request.addEventListener('loadend',function(){
    //     if(request.status==200){
    //         allAreas = JSON.parse(request.response);
    //         console.log(allAreas);
    //         console.log(allAreas.meals[1].strArea);
    //         displayAreas(allAreas);
    //         // displayCategories();
    //     }
    //     else{
    //         console.log("error");
    //     }
    // })     


    var response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    allAreas = await response.json();
    // console.log(allAreas);
    displayAreas();



    // var response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    // areaMeals = await response.json();
    // console.log(areaMeals);
    
    // console.log(allAreas);
}

getAreaApi();


function displayAreas(){
    let area = "";

    for(let i=0;i<allAreas.meals.length ; i++){
        area = `<div class="col-md-6 col-lg-3">
            <div class="areaItem">
                <i class="fa-solid fa-utensils fa-3x mb-3"></i>
                <h2>${allAreas.meals[i].strArea}</h2>
            </div>
        </div>`;
        HTMLAreas.push(area);
    }


    $('.areaRow').html(HTMLAreas);

    diplayAreaMeals();
}



async function getareaMealsAPI(area){
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    areaMeals = await response.json();
    // console.log(areaMeals);
    return areaMeals;
    // diplayAreaMeals();
}


var mealsOfSameArea = [];

function diplayAreaMeals(){

    // console.log("Hello");

    // let areaMeals = [];


    


    $('.areaItem').click(function(e){
        var clickedArea = $(this).children(1).text();
        console.log(e.target);
        // console.log(clickedArea);

        areaMeals = getareaMealsAPI(clickedArea);

        // console.log(areaMeals);

        for(let i=0; i<areaMeals.length ; i++){
            if(clickedArea == areaMeals[i].strArea){
                console.log(clickedArea);
                console.log(areaMeals[i].strArea);
                
                let mealArea = `<div class="col-sm-6  col-lg-3">
                                    <div class="areaMealItem ">
                                        <img class="rounded-start rounded-end" src="${areaMeals[i].strMealThumb}" alt="Meal Image">

                                        <div class="areaMealLayer d-flex align-items-center ps-2 text-black">
                                            <h2>${areaMeals[i].strMeal}</h2>
                                        </div>
                                    </div>
                                </div>`;
                mealsOfSameArea.push(mealArea);
            }
        }

        $('.areaRow').html(mealsOfSameArea);


        // console.log();
    })

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


