//var t=alert("finek")
//var name=prompt("ahla bike")
//var a=confirm("jayy")
document.querySelector(".haja").style.backgroundColor ="yellow";
document.querySelector(".haja").style.fontSize="50px";

var button = document.getElementById('test');
var para = document.getElementById('para');

/*tton.addEventListener('click', function(){
    para.style.backgroundColor="yellow";
})*/
document.getElementById("img").setAttribute("src","res/image.jpg")
document.getElementById("self").innerHTML="i am here"
function youahh(){
    //alert('you ahh');
}
setTimeout(youahh,2000);
setInterval(youahh,100000)

//var mot = prompt('ecrire mot');

function hello(t){
    //alert(t);
}
hello('mot');

$("p").css("back-ground","yallow");

$("button").click(function(){
    $("h6").html("koli 3ada");
});

$('#mariem').click(function(){
    $('h6').css("background-color","pink");
});
$(function(){
    $("#demo").append("i wish i had one");

});
//.prepend //.after//.before
$("#toto").append("2");
$("#toto").prepend('3');
$(function(){
$("#lala").before("hi");
$("#lala").after("hola");})
$(function(){
    alert($("#kolo").css("background-color"));
    $("#kolo").css("background-color","green")
});
$(function(){
    $("#opps").click(function(){
        $("#zizo").toggleClass("red");
    });
});
$("#btn").click(function(){
    $("#here").val("New Value");
});
//mafhemtech el val

