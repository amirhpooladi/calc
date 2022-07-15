
function show(num){
 b=document.getElementById("paste").value+=num;
 return b;
} 
function doing(amal){
    return document.getElementById("paste").innerHTML=amal;
}
function equal(){
    var p = document.getElementById("paste").value;
    var q = eval(p);
    document.getElementById("paste").value = q;
  
}


function clean(){
    return document.getElementById("paste").value=" ";
}
