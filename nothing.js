function calculate()
{
    var score = 0 ;
   var options = document.getElementsByClassName("answer") ;
   
   for(var i = 0 ; i< options.length ; i++){
       if( options[i].checked == true )
       score++ ;
   }
   document.getElementById("d").innerHTML = score ;
}