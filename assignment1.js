function BMR() {
    var bmr;
    var  calories = 0;
    var Age = document.getElementById("age").value;
    var Gender = document.getElementById("gender").value;
    var inches = parseInt(document.getElementById("inches").value)||0;
    var feet = parseInt(document.getElementById("feet").value) ||0;
    var stones = parseInt(document.getElementById("stones").value) ||0;
    var pounds = parseInt(document.getElementById("pounds").value) ||0;
    
    var Height = feet * 12 + inches; 
    var Weight = stones *14 + pounds;
    
    (Gender == "Male") ? bmr = 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age) : bmr = 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age) ;
    (Gender == "Female")  ? bmr = 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age) : bmr = 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age);

    var sedentarylevel = document.getElementById("sedentarylevel");
    var lightlylevel = document.getElementById("lightlylevel");
    var moderatelylevel = document.getElementById("moderatelylevel");
    var verylevel = document.getElementById("verylevel");
    var superlevel = document.getElementById("superlevel");
    
    (sedentarylevel.checked) ? (calories = bmr * 1.2) : (calories += 0);
    (lightlylevel.checked) ? (calories = bmr * 1.375) : (calories += 0);
    (moderatelylevel.checked) ? (calories = bmr * 1.55) : (calories += 0);
    (verylevel.checked) ? (calories = bmr * 1.725) : (calories += 0);
    (superlevel.checked) ? (calories = bmr * 1.9) : (calories += 0);
    
    document.getElementById("bmr").innerHTML = bmr.toFixed(1);
    document.getElementById("tee").innerHTML = calories.toFixed(1);

}
    

function BMR2() {
    var bmr;
    var calories;
    var Age = document.getElementById("age").value;
    var Height = document.getElementById("height").value;
    var Weight = document.getElementById("weight").value;
    var Gender = document.getElementById("gender").value;

    (Gender == "Male") ? bmr = 66.5 + (13.76 * Weight ) + (5.003 * Height ) - (6.755 * Age ) : bmr = 655 + (9.563 * Weight ) + (1.850 * Height ) - (4.676 * Age);
    (Gender == "Female") ? bmr = 655 + (9.563 * Weight ) + (1.850 * Height ) - (4.676 * Age ) : bmr = 66.5 + (13.76 * Weight ) + (5.003 * Height ) - (6.755 * Age);
  
    document.getElementById("bmr").innerHTML = bmr.toFixed(1);

    var radios = document.getElementsByName("activity");
    var activity = "";
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            activity = radios[i].value;
            console.log(activity);
            break;
        }
    }

    switch (activity) {
        case "little": calories= bmr * 1.2; break;
        case "light": calories = bmr * 1.375; break;
        case "moderate":calories= bmr * 1.55; break;
        case "hard": calories = bmr* 1.725; break;
        case "super": calories = bmr * 1.9; break;
        default: calories = 0; break;
    }
    document.getElementById("tee").innerHTML = calories.toFixed(1);
}
    
 



