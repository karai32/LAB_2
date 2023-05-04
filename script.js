const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

var Refillable_ = ["6 месяцев - 20%", "1 год - 22%","1,5 года - 15%","2 года - 10%"];
var Term_ = ["3 месяца - 20%", "6 месяцев - 22%","9 месяцев - 23%","1 год - 24%","1,5 года - 18%", "2 года - 15%"];


function Update_Combobox_2()
{
  document.getElementById("date").options.length = 1;
  var combo1_value = document.getElementById("type-deposits").value
  //alert(combo1_value)
  //alert(typeof combo1_value)
  switch(combo1_value)
  {
    case "1":
      for(i=0;i<Refillable_.length;i++)
        {
          var opt = document.createElement("option");
          opt.text = Refillable_[i];
          document.getElementById("date").appendChild(opt);
        }
      break;
    case "2":
      for(i=0;i<Term_.length;i++)
        {
          var opt = document.createElement("option");
          opt.text = Term_[i];
          document.getElementById("date").appendChild(opt);
        }
      break;
  }
}

function Sum() {
  //alert("Вы нажали на кнопку");
  //document.querySelector('.sum').innerHTML = (Math.floor(Math.random() * (max - min + 1) ) + min);
  var com1_val = document.getElementById("type-deposits").value;
  var com2_val = document.getElementById("date").value;
  var input_val = Number(document.querySelector("input[name='InAss']").value);
  var Vklad;
  if(com1_val == 1)
    Vklad = "пополняемый";
  else if(com1_val == 2)
    Vklad = "срочный";
    
  if(com1_val == 1)
  {
    switch(com2_val)
    {
    case "6 месяцев - 20%":
      document.querySelector('.sum').innerHTML = "Вклад "+Vklad+
      " на срок "+com2_val+" на сумму "+input_val+".\n"+"В конце срока вы получите "+input_val * 1.20+"руб.";
      break;
    case "1 год - 22%":
      document.querySelector('.sum').innerHTML = "Вклад "+Vklad+
      " на срок "+com2_val+" на сумму "+input_val+".\n"+"В конце срока вы получите "+input_val * 1.22+"руб.";
      break;
    case "1,5 года - 15%":
      document.querySelector('.sum').innerHTML = "Вклад "+Vklad+
      " на срок "+com2_val+" на сумму "+input_val+".\n"+"В конце срока вы получите "+input_val * 1.15+"руб.";
      break;
    case "2 года - 10%":
      document.querySelector('.sum').innerHTML = "Вклад "+Vklad+
      " на срок "+com2_val+" на сумму "+input_val+".\n"+"В конце срока вы получите "+input_val * 1.10+"руб.";
      break;  
    }
  }
   if(com1_val == 2)
  {
    switch(com2_val)
    {
    case "3 месяца - 20%":
      document.querySelector('.sum').innerHTML = "Вклад "+Vklad+
      " на срок "+com2_val+" на сумму "+input_val+".\n"+"В конце срока вы получите "+input_val * 1.20+"руб.";
      break;
    case "6 месяцев - 22%":
      document.querySelector('.sum').innerHTML = "Вклад "+Vklad+
      " на срок "+com2_val+" на сумму "+input_val+".\n"+"В конце срока вы получите "+input_val * 1.22+"руб.";
      break;
    case "9 месяцев - 23%":
      document.querySelector('.sum').innerHTML = "Вклад "+Vklad+
      " на срок "+com2_val+" на сумму "+input_val+".\n"+"В конце срока вы получите "+input_val * 1.23+"руб.";
      break;
    case "1 год - 24%":
      document.querySelector('.sum').innerHTML = "Вклад "+Vklad+
      " на срок "+com2_val+" на сумму "+input_val+".\n"+"В конце срока вы получите "+input_val * 1.24+"руб.";
      break;
    case "1,5 года - 18%":
      document.querySelector('.sum').innerHTML = "Вклад "+Vklad+
      " на срок "+com2_val+" на сумму "+input_val+".\n"+"В конце срока вы получите "+input_val * 1.18+"руб.";
      break; 
    case "2 года - 15%":
      document.querySelector('.sum').innerHTML = "Вклад "+Vklad+
      " на срок "+com2_val+" на сумму "+input_val+".\n"+"В конце срока вы получите "+input_val * 1.15+"руб.";
      break;   
    }
  }
}