//mobile footer menu
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
//select size validate
frm = document.getElementById('size');
sel = document.getElementById('selectSize');

frm.addEventListener("submit", validate);

function validate(evnt){

    if(sel.value === "0"){

        event.preventDefault();
        event.stopPropagation();
        document.getElementById("selectSize2").style.display = "block";
    }
    else{        
        
        event.preventDefault();
        event.stopPropagation();
        document.getElementById("selectSize3").style.display = "block";
        
    }
    
}
///hamburger menu
if (window.innerWidth<461){
    function toggleDisplay(d)
    {
        var onediv = document.getElementById(d);
        var divs=['menu1','menu2','menu3','menu4','menu5','menu6','menu7','menu8'];
            for (var i=0;i<divs.length;i++)
            {
                document.getElementById(divs[i]).style.display='none';    
            }
            onediv.style.display = 'block';
        }
}
function hamburger(){
    var doc = document.getElementById('nav');
    if (doc.style.display === 'block'){
        doc.style.display = 'none';
    } else {
        doc.style.display = 'block';
    }
}

function popUp(){
    document.getElementById("popUp").style.display = "block";
}
function closeSize1(){
    document.getElementById("selectSize2").style.display = "none";
}
function closeSize2(){
    document.getElementById("selectSize3").style.display = "none";
}
function closePopUp(){
    document.getElementById("popUp").style.display = "none";
}