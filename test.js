document.getElementById('but1').onclick=years;

function years() {

	var a= document.getElementById('task1').value;
	console.log(a);

	if (a>1900){
		var b = 2017-a;
	}
	else {var b = 17 - a;}

		alert( 'Тебе будет '+ b + ' лет' );
}

// второе задание

document.getElementById('but2').onclick=compare;

function compare() {
	var a2= document.getElementById('task2').value;
	var a22= document.getElementById('task22').value;

	if (+a2 > +a22){

		alert('наибольшее число '+a2);
	} 

	else {
		alert('наибольшее число '+a22);}
}

// третье задание

document.getElementById('but3').onclick=apartment;

function apartment() {
	var a3= document.getElementById('task3').value;

	if (a3<1 || a3>80) {
		alert('введите номер квартиры от 1 до 80');
	}

	else if (a3<21) {
		alert('квартира в первом подъезде');
	}
	else if (a3<65) {
		alert('квартира во втором подъезде');
	}
	else  {
		alert('квартира в третьем подъезде');	
	}
}

// четвертое задание

document.getElementById('but4').onclick=users;

function users() {
	var l1= document.getElementById('log1').value;
	var p1= document.getElementById('pass1').value;
	

	if ( ((l1=='ivan')&&(p1==333)) || ((l1=='ssss')&&(p1==666))
	 || ((l1=='gibs')&& (p1==0000)) ) {
		alert('Добро пожаловать');
	}
	else {
		alert('ошибка');	
	}
}

// пятое задание

document.getElementById('but5').onclick=compare3;

function compare3() {
	var a51= document.getElementById('task51').value;
	var a52= document.getElementById('task52').value;
	var a53= document.getElementById('task53').value;

	if ((+a51>+a52) && (+a51>+a53)) {
		alert('наибольшее число из трех '+a51);
	}
	else if (+a52>+a53) {
		alert('наибольшее число из трех '+a52);
	}
	else {
		alert('наибольшее число из трех '+a53);		
	}
}