var angle = 0;
function galleryspin(sign) { 
    if (document.getElementById("activityPhoto").style.display !=='none') {
        if (!sign) { 
            angle = angle + 90; } 
        else { 
            angle = angle - 90; }
        spinner90.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
    }

    else if (document.getElementById("travelPhoto").style.display !=='none') {
        if (!sign) { 
            angle = angle + 90; } 
        else { 
            angle = angle - 90; }
        spinner90.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
    }

    else if (document.getElementById("volunteerPhoto").style.display !=='none') {
        if (!sign) { 
            angle = angle + 60; } 
        else { 
            angle = angle - 60; }
        spinner60.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
    }

    else {
        if (!sign) { 
            angle = angle + 45; } 
        else { 
            angle = angle - 45; }
        spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
    }
}