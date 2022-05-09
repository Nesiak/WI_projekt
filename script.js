function SetNewImage1(){
    document.getElementById("jpgi").style.visibility = "visible";
    document.getElementById('jpgi').src="photos/oregano.jpg";
}
function SetNewImage2(){
    document.getElementById("jpgi").style.visibility = "visible";
    document.getElementById('jpgi').src="photos/bazylia.jpg";
}
function SetNewImage3(){
    document.getElementById("jpgi").style.visibility = "visible";
    document.getElementById('jpgi').src="photos/rozmaryn.jpg";
}
function SetNewImage4(){
    document.getElementById("jpgi").style.visibility = "visible";
    document.getElementById('jpgi').src="photos/paprykaw.jpg";
}
function SetNewImage5(){
    document.getElementById("jpgi").style.visibility = "visible";
    document.getElementById('jpgi').src="photos/kumin.jpg";
}
function SetNewImage6(){
    document.getElementById("jpgi").style.visibility = "visible";
    document.getElementById('jpgi').src="photos/gram_masala.jpg";
}
function SetNewImage7(){
    document.getElementById("jpgi").style.visibility = "visible";
    document.getElementById('jpgi').src="photos/imbir.jpg";
}
function SetNewImage8(){
    document.getElementById("jpgi").style.visibility = "visible";
    document.getElementById('jpgi').src="photos/paprykas.jpg";
}
function SetNewImage9(){
    document.getElementById("jpgi").style.visibility = "visible";
    document.getElementById('jpgi').src="photos/kardamon.jpg";
}
function SetNewImage10(){
    document.getElementById("jpgi").style.visibility = "visible";
    document.getElementById('jpgi').src="photos/cynamon.jpg";
}
function SetNewImage11(){
    document.getElementById("jpgi").style.visibility = "visible";
    document.getElementById('jpgi').src="photos/pieprz_cayenne.jpg";
}
function SetNewImage12(){
    document.getElementById("jpgi").style.visibility = "visible";
    document.getElementById('jpgi').src="photos/sol_morska.jpg";
}
function DisableImage(){
    document.getElementById("jpgi").style.visibility = "hidden";
}
$('.element').hide();

function ChangeStocks(){
    UpdateStocks();
    UpdateRight();
}
function UpdateStocks(){
if(document.getElementById("ch1").checked){    
        $('.oregano').hide();
        $('#p1').hide();
        $('#el1').show();
    }
    if(document.getElementById("ch2").checked){
        $('.bazylia').hide();
        $('#p2').hide();
        $('#el2').show();
    }
    if(document.getElementById("ch3").checked){
        $('.rozmaryn').hide();
        $('#p3').hide();
        $('#el3').show();
    }
    if(document.getElementById("ch4").checked){
        $('.paprykaw').hide();
        $('#p4').hide();
        $('#el4').show();
    }
    if(document.getElementById("ch5").checked){
        $('.kumin').hide();
        $('#p5').hide();
        $('#el5').show();
    }
    if(document.getElementById("ch6").checked){
        $('.gram_masala').hide();
        $('#p6').hide();
        $('#el6').show();
    }
    if(document.getElementById("ch7").checked){
        $('.imbir').hide();
        $('#p7').hide();
        $('#el7').show();
    }
    if(document.getElementById("ch8").checked){
        $('.paprykas').hide();
        $('#p8').hide();
        $('#el8').show();
    }
    if(document.getElementById("ch9").checked){
        $('.kardamon').hide();
        $('#p9').hide();
        $('#el9').show();
    }
    if(document.getElementById("ch10").checked){
        $('.cynamon').hide();
        $('#p10').hide();
        $('#el10').show();
    }
    if(document.getElementById("ch11").checked){
        $('.pieprz_cayenne').hide();
        $('#p11').hide();
        $('#el11').show();
    }
    if(document.getElementById("ch12").checked){
        $('.sol_morska').hide();
        $('#p12').hide();
        $('#el12').show();
    }
}

function UpdateRight(){
    if(document.getElementById("oregano").checked){
        $('.oregano').show();
        $('#p1').show();
        $('#el1').hide();
    }
    if(document.getElementById("bazylia").checked){
        $('.bazylia').show();
        $('#p2').show();
        $('#el2').hide();
    }
    if(document.getElementById("rozmaryn").checked){
        $('.rozmaryn').show();
        $('#p3').show();
        $('#el3').hide();
    }
    if(document.getElementById("paprykaw").checked){
        $('.paprykaw').show();
        $('#p4').show();
        $('#el4').hide();
    }
    if(document.getElementById("kumin").checked){
        $('.kumin').show();
        $('#p5').show();
        $('#el5').hide();
    }
    if(document.getElementById("gram_masala").checked){
        $('.gram_masala').show();
        $('#p6').show();
        $('#el6').hide();
    }
    if(document.getElementById("imbir").checked){
        $('.imbir').show();
        $('#p7').show();
        $('#el7').hide();
    }
    if(document.getElementById("paprykas").checked){
        $('.paprykas').show();
        $('#p8').show();
        $('#el8').hide();
    }
    if(document.getElementById("kardamon").checked){
        $('.kardamon').show();
        $('#p9').show();
        $('#el9').hide();
    }
    if(document.getElementById("cynamon").checked){
        $('.cynamon').show();
        $('#p10').show();
        $('#el10').hide();
    }
    if(document.getElementById("pieprz_cayenne").checked){
        $('.pieprz_cayenne').show();
        $('#p11').show();
        $('#el11').hide();
    }
    if(document.getElementById("sol_morska").checked){
        $('.sol_morska').show();
        $('#p12').show();
        $('#el12').hide();

    }
}


$("#lista").hide()
$("#listTrigger").click(function() {
    if ($("#lista").first().is(":hidden")) {
        $("#lista").slideDown(400);
      } else {
        $("#lista").slideUp(400);
      }
});
