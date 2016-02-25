function resetForm(form) {
    // clearing inputs
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i<inputs.length; i++) {
        switch (inputs[i].type) {
            // case 'hidden':
            case 'text':
                inputs[i].value = '';
                break;
            case 'radio':
            case 'checkbox':
                inputs[i].checked = false;   
        }
    }

    // clearing selects
    var selects = form.getElementsByTagName('select');
    for (var i = 0; i<selects.length; i++)
        selects[i].selectedIndex = 0;

    // clearing textarea
    var text= form.getElementsByTagName('textarea');
    for (var i = 0; i<text.length; i++)
        text[i].innerHTML= '';

    return false;
}

function gEleValue(element) {
    for (var i=1; i<11; i++) {
        if (element == i) {
            var ele = document.getElementById(element).value;
            var len = ele.length;
            if (len < 1) {
                return "Eitohi";
            }
            if (len == 1 && ele === " ") {
                return "";
            }
        }
        
    }
    return document.getElementById(element).value;
}

function submitForm(form) {
    if (validateForm(form)) {
        return true;
    } else {
        resetForm(form);
        return false;
    }
}

function validateForm(form) {
    var un = gEleValue("1") + gEleValue("2") + gEleValue("3")+ gEleValue("4")+ gEleValue("5");
    var pw = gEleValue("6") + gEleValue("7") + gEleValue("8")+ gEleValue("9")+ gEleValue("10");
    
    var username = "asd@asd.ee"; 
    var password = "asd";
    shuffle();
    if ((un == username) && (pw == password)) {
        return true;
    }
    else {
        alert ("Tubli katse! Proovi uuesti!");
        return false;
    }
}

function shuffle() {
    var rand = Math.floor(Math.random() * 5) + 1;
    console.log(rand);
    for (var i = 1; i<6; i++) {
        document.getElementById("but" + i).onclick = function(){ resetForm(form); };
        document.getElementById("but" + i).type = "button";
    }
    document.getElementById("but" + rand).onclick = "";
    document.getElementById("but" + rand).type = "submit";
    
}