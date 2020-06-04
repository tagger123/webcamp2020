
if (window.innerWidth<461){
function toggleDisplay(d)
{
var onediv = document.getElementById(d);
var divs=['footer1','footer2','footer3','footer4'];
    for (var i=0;i<divs.length;i++)
    {
        document.getElementById(divs[i]).style.display='none';    
    }
    onediv.style.display = 'block';
}
}

frm = document.getElementById('size');
sel = document.getElementById('selectSize');

frm.addEventListener("submit", validate);

function validate(evnt){

    if(sel.value === "0"){

        event.preventDefault();
        event.stopPropagation();
        console.log("PROSZĘ WYBIERZ ROZMIAR JAKI CHCIAŁBYŚ KUPIĆ");
        document.getElementById("selectSize2").style.display = "block";
    }
    else{        
        
        event.preventDefault();
        event.stopPropagation();
        console.log("wszystko ok!");
        document.getElementById("selectSize3").style.display = "block";
        
    }
    
}

function closeSize1(){
    document.getElementById("selectSize2").style.display = "none";
}
function closeSize2(){
    document.getElementById("selectSize3").style.display = "none";
}