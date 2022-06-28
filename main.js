array=[];
function submit(){
   var display=[];
   for(var i=1;i<=4;i++){
       var name=document.getElementById("student"+i).value ;
       array.push(name);
       console.log(array);
   }
   var length=array.length-1;
   for(var j=0;j<=length;j++){
   display.push("<h4>NAME IS "+array[j]+" </h4>")
    console.log(display);
}
document.getElementById("displaywithcommas").innerHTML=display;
var remove=display.join(" ");
document.getElementById("displaywithoutcommas").innerHTML=remove;
document.getElementById("submitbutton").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
    array.sort();
    var display=[];
    var length=array.length;
    for(var j=0;j<length;j++){
        display.push("<h4>NAME IS "+array[j]+" </h4>")
         console.log(display);
     }
     document.getElementById("displaywithcommas").innerHTML=display;
     var remove=display.join(" ");
     document.getElementById("displaywithoutcommas").innerHTML=remove;
}
function newupdate(){
    document.getElementById("displaywithoutcommas").innerHTML="<h1>"+array+"</h1>";
}