window.onload = function()
{

     function pButton()
     {

          var price = document.getElementById("price").value;
          var weight = document.getElementById("weight").value;
          var percent = document.getElementById("percent").value;
          var mg = weight*percent/100*1000;
          var dpg = price/weight;
          var dpoz = price/(weight/28.35);
          var dpmg = price/mg;

          document.getElementById("a").innerHTML = price;
          document.getElementById("b").innerHTML = weight;
          document.getElementById("c").innerHTML = percent;
          document.getElementById("d").innerHTML = mg.toFixed(3);
          document.getElementById("e").innerHTML = dpg.toFixed(3);
          document.getElementById("f").innerHTML = dpoz.toFixed(3);
          document.getElementById("g").innerHTML = dpmg.toFixed(3);

     }

     document.getElementById("calculatebutton").addEventListener ("click", pButton, false);

}
