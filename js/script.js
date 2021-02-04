var teamName1="";
var teamName2="";
var teamScore1=0;
var teamScore2=0;
var modeVal=0;


$(document).ready( function(){

/*******************************/
/** botones primera pantalla  **/
/*******************************/
	function modeCheck(){
		if(modeVal==24){
			$('#numToFinish').html("<h3>a 24</h3>");
		}else if(modeVal == 30){
			$('#numToFinish').html("<h3>a 30</h3>");
		}else {
			$('#numToFinish').html("<h3>Error: no se eligió un modo de juego</h3>");
		}
	}
	function isWinnerA(){
		if(teamScore1 == modeVal)
		{
			$('#numToFinish').html("<h3>El ganador es: "+ teamName1 +"</h3>");
		}
	}
	function isWinnerB(){
		if(teamScore2 == modeVal)
		{
			$('#numToFinish').html("<h3>El ganador es: "+ teamName2 +"</h3>");
		}
	}
	function nombreEquipoA(){
		teamName1 = $('#team1In').val();
		if(teamName1==""){
			$('#teamName1').html("<h1>Equipo A</h1>");
		}else {
			$('#teamName1').html("<h1>"+ teamName1 +"</h1>");	
		}
	}
	function nombreEquipoB(){
		teamName2 = $('#team2In').val();
		if(teamName2==""){
			$('#teamName2').html("<h1>Equipo B</h1>");
		}else {
			$('#teamName2').html("<h1>"+ teamName2 +"</h1>");
		}
	}
	
	$('#modeA').on('click', fnBtnA);
	function fnBtnA(){
		console.log("click en boton modo A: a 24");
		modeVal = 24;
	}
	$('#modeB').on('click', fnBtnB);
	function fnBtnB(){
		console.log("click en boton modo B: a 30");
		modeVal = 30;
	}
	
	$('#start').on('click', fnBtnStart);
	function fnBtnStart(){
		console.log("click en boton iniciar");//guardar los nombres y el modo
		nombreEquipoA();
		nombreEquipoB();
		$('#contenedorInicio').removeClass('visible').addClass('invisible');
		$('#contenedorTablero').removeClass('invisible').addClass('visible');
		pintar(teamScore1, "A");
		pintar(teamScore2, "B");
		modeCheck();
	}	

/******************************/
/** botones segunda pantalla **/
/******************************/
	function fnCalcularEntero(num){
		var entero = parseInt(num/5);
		return entero;
	}
	function fnCalcularResto(num){
		var resto = num%5;
		return resto;
	}
	function pintar(punt, letra){
		for(var i=1; i< 7; i++){
			console.log("img" + letra + i + " img/0.png <br>");
			$('#img'+letra+i).attr('src', 'img/0.png');
		}
		var lineN=1;
		var resto = fnCalcularResto(punt);
		var enteros = fnCalcularEntero(punt);
		
		for (var i=1; i <= enteros ; i++){
			console.log("img"+ letra + i + ",  img5.png");
			$('#img'+letra+ i).attr('src', 'img/5.png');
			lineN=i+1;
		}
		
		console.log("linen es: "+lineN);
		if(resto>0){
			console.log("img"+letra+lineN + ", img" + resto +".png");
			$('#img'+letra+lineN).attr('src', 'img/'+ resto + '.png');
		}
	}

	$('#btnPlusT1').on('click', fnBtnPlusT1);
	function fnBtnPlusT1(){
		console.log("click en boton +1 t1");
		if(teamScore1<modeVal){
			teamScore1+=1;
			console.log("+1 en equipo A");
		}
		isWinnerA();
		console.log("teamScore1: " + teamScore1);
		$('#teamScore1').html("<h1>"+ teamScore1 +"</h1>");
		console.log("los enteros son: " + fnCalcularEntero(teamScore1));
		console.log("el resto es: " + fnCalcularResto(teamScore1));
		pintar(teamScore1, "A");
	}
	$('#btnMinusT1').on('click', fnBtnMinusT1);
	function fnBtnMinusT1(){
		console.log("click en boton -1 t1");
		if(teamScore1>0){
			teamScore1-=1;
			console.log("le resto uno a equipo A");
		}
		console.log("teamScore1: " + teamScore1);
		$('#teamScore1').html("<h1>"+ teamScore1 +"</h1>");
		pintar(teamScore1, "A");
	}	

	$('#btnPlusT2').on('click', fnBtnPlusT2);
	function fnBtnPlusT2(){
		console.log("click en boton +1 t2");
		if(teamScore2<modeVal){
			teamScore2+=1;
			console.log("+1 en equipo B");
		}
		isWinnerB()
		console.log("teamScore2: " + teamScore2);
		$('#teamScore2').html("<h1>"+ teamScore2 +"</h1>");
		pintar(teamScore2, "B");		
	}
	
	$('#btnMinusT2').on('click', fnBtnMinusT2);
	function fnBtnMinusT2(){
		console.log("click en boton -1 t2");
		if(teamScore2>0){
			teamScore2-=1;
			console.log("le resto uno a equipo B");
		}
		console.log("teamScore2: " + teamScore2);
		$('#teamScore2').html("<h1>"+ teamScore2 +"</h1>");
		pintar(teamScore2, "B");
		
	}	
	
	$('#goal').on('click', fnFin);
	function fnFin(){
		console.log("click en boton fin");
		$('#contenedorTablero').removeClass('visible').addClass('invisible');
		$('#contenedorInicio').removeClass('invisible').addClass('visible');
		teamScore1 = 0;
		teamScore2 = 0;
		modeVal=0;
		teamName1="";
		teamName2="";
		$('#teamScore1').html("<h1>0</h1>");	
		$('#teamScore2').html("<h1>0</h1>");
		$("#team1In").attr("placeholder", "Equipo 1").val("");
		$("#team2In").attr("placeholder", "Equipo 2").val("");
		
	}
	
	
});