
// var searchResult = [];
// var HTMLMeals = [];

var searchByName = [];
// var HTMLsearchByName = [];

async function getMealByNameAPI(meal){
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
    searchByName = await response.json();
    // console.log(searchByName);
}

displaySearchByMealName();

function displaySearchByMealName(){
    document.querySelector('#searchByName').addEventListener('input',function(e){

        let enteredName = e.target.value ;

        console.log(enteredName);

        searchByName = getMealByNameAPI(enteredName);

        setTimeout(() => {
            var HTMLsearchByName = [];
            for(let i=0 ; i<searchByName.meals.length ; i++){
                let meal = "";
                meal = `<div class="col-sm-6  col-lg-3">
                    <div class="categoryItem ">
                        <img class="rounded-start rounded-end" src="${searchByName.meals[i].strMealThumb}" alt="Food Image">

                        <div class="categoryHover d-flex align-items-center ps-2 text-black">
                        <h2>${searchByName.meals[i].strMeal}</h2>
                        </div>
                    </div>
                </div>`;
                HTMLsearchByName.push(meal);

            }
            $('#searchRow').html(HTMLsearchByName);

            console.log("hey");
        }, 1000);


    })
}


var searchByLetter = [];


async function getMealByLetterAPI(letter){
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    searchByLetter = await response.json();
}

displaySearchByFirstLetter();

function displaySearchByFirstLetter(){
    var regex = /^[a-z]$/i;

    document.querySelector('#searchByFirstLetter').addEventListener('input',function(e){
        var enteredchar = e.target.value;

        if(regex.test( enteredchar) && enteredchar.length == 1){
            console.log("true");
            searchByLetter = getMealByLetterAPI(enteredchar);
            setTimeout(() => {
                var HTMLsearchByLetter = [];
                for(let i=0 ; i<searchByLetter.meals.length ; i++){
                    
                    let meal = "";
                    meal = `<div class="col-sm-6  col-lg-3">
                    <div class="categoryItem ">
                        <img class="rounded-start rounded-end" src="${searchByLetter.meals[i].strMealThumb}" alt="Food Image">

                        <div class="categoryHover d-flex align-items-center ps-2 text-black">
                        <h2>${searchByLetter.meals[i].strMeal}</h2>
                        </div>
                    </div>
                </div>`;
                    HTMLsearchByLetter.push(meal);
                }
                console.log(searchByLetter);
                
                $('#searchRow').html(HTMLsearchByLetter);
            }, 1000);
            
        }
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
