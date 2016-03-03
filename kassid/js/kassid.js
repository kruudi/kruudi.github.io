function gEleValue(element) {
    return document.getElementById(element).value;
}

function validateForm(form){
    var name = gEleValue("name");
    var year = gEleValue("year");
    
    if (name.length < 1) {
        alert ("Kassi nimi ei saa olla tühi!");
        return false;
    }
    
    if (year < new Date().getFullYear() - 50) {
        alert ("Tädi maali kass nii vanaks ei ela!");
        return false;
    } else  if (year > new Date().getFullYear()) {
        alert ("Sündimata kasside registreerimisega me ei tegele!");
        return false;
    }
    
    return true;
}

function checkSubmit(e) {
   if(e && e.keyCode == 13) {
      document.getElementById("form").submit();
   }
}