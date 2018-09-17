$(document).ready(function(){
  $("#pp1,#pp2,#pp3,#pp4,#ac1,#ac2,#ac3,#ac4,#drp1").click(function(){
    var flag = 0;
    var total = 10.50;
    var meuConv = $("#drp1 option:selected").val();

    if($('input:radio[id="pp1"]').is(':checked')){total+=2.50;}
    else if($('input:radio[id="pp2"]').is(':checked')){total+=3.50;}
    else if($('input:radio[id="pp3"]').is(':checked')){total+=1.50;}
    else if($('input:radio[id="pp4"]').is(':checked')){total+=3.50;}
    else{flag=1;}
    //
    if($('input:checkbox[id="ac1"]').is(':checked')){total+=0.50;}
    if($('input:checkbox[id="ac2"]').is(':checked')){total+=0.50;}
	  if($('input:checkbox[id="ac3"]').is(':checked')){total+=2.50;}
	  if($('input:checkbox[id="ac4"]').is(':checked')){total+=1.50;}

    if(meuConv == "Fatec") {total*=0.8;}
	  if(meuConv == "Unip")  {total*=1;}
	  if(meuConv == "Ufscar"){total*=0.5;}
	  else                   {total*=1;}
     //alert (meuConv);
    
    
    if(flag==1){alert("Voce nao escolheu um prato principal");}
    else{
      var tot = ("R$"+total.toFixed(2));
      $("#btn_fin").prop("disabled",false);
      $("#result").html(tot);
    }
   });
});