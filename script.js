window.onload = function()
{

     function pButton()
     {

          var price = document.getElementById("price").value;
          var weight = document.getElementById("weight").value;
          var percent = document.getElementById("percent").value;

          document.getElementById("calculatedprice").innerHTML = (price/(weight*1000*percent/100)).toFixed(3);
     }

     document.getElementById("calculatebutton").addEventListener ("click", pButton, false);

}
