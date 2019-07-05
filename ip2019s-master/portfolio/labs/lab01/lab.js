/*

*/


function start(e) {
var name = [
{
    char:'吳',
   big5: 'A764',
   cns:'1-4946',
   unicode:'5433'
},
{
    char:'宗',
   big5: 'A976',
   cns:'1-4C78',
   unicode:'5B97'
},
{
    char:'遠',
   big5: 'BBB7',
   cns:'1-6B3F',
   unicode:'9060'
}

];

 var ele = document.getElementById("div1")

 for (var i = 0; i< 3 ; i++) {
    ele.innerHTML += name[i].char;
    ele.innerHTML +='big5=';
    ele.innerHTML += name[i].big5;
    ele.innerHTML +='cns=';
    ele.innerHTML += name[i].cns;
    ele.innerHTML +='unicode=';
    ele.innerHTML += name[i].unicode;
    ele.innerHTML +='<br>';

 }
}
/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
