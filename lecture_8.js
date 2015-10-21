//////////////////////////////////////Калькулятор 
function calc (a, b, opr) {
	switch (opr){
		case '+': 
			return a+opr+b+'='+(a+b);
			break;
		case '-':
			return a+opr+b+'='+(a-b);
			break;
		case '*':
			return a+opr+b+'='+(a*b);
			break;
		case '/':
			return a+opr+b+'='+(a/b);		
	}
}


console.log(calc(30,5,'+'));
console.log(calc(30,5,'-'));
console.log(calc(30,5,'*'));
console.log(calc(30,5,'/'));


//////////////////////////////////проверка на симетричность скобок
function isSimetric(str) {
  var stLength = str.length;
  if (stLength == 0 || stLength % 2 != 0 || str[0] == ')') {
    return false;
  }

  if (count(str.slice(0, stLength/2),'(') != count(str.slice(stLength/2, stLength),')' )) {
    return false;
  }

  function count(str, char) {
    var pos = 0,
        result = 0;
    while (true) {
      var foundPos = str.indexOf(char, pos);
      if (foundPos==-1) {
        break;
      };
      result++;
      pos = foundPos+1;
    }
    return result;
  }
  return true;
}

console.log(isSimetric(prompt('Enter your string')));

///////////////////////////////////////////////canvas
function drawHuman () {
	var canvas = document.createElement('canvas');
	canvas.style.width = '400px';
	canvas.style.height = '400px';
	document.body.appendChild(canvas);

	var x1=(Math.PI/180)*0;
	var x2=(Math.PI/180)*360;

	canContext = canvas.getContext('2d');
	//башка
	canContext.beginPath();
	canContext.arc(150,30,30,0,Math.PI*2,true);
	canContext.stroke();

	//глаза
	canContext.beginPath();
	canContext.arc(140,15,2.5,0,Math.PI*2,true);
	canContext.stroke();

	canContext.beginPath();
	canContext.arc(160,15,2.5,0,Math.PI*2,true);
	canContext.stroke();

	//рот
	canContext.beginPath();
	canContext.arc(150,30,15,0,Math.PI,false);
	canContext.stroke();

	//тело
	canContext.beginPath();
	canContext.moveTo(150, 60);
	canContext.lineTo(150, 100);
	canContext.stroke();

	//Руки
	canContext.beginPath();
	canContext.moveTo(150, 70);
	canContext.lineTo(190, 80);
	canContext.stroke();

	canContext.beginPath();
	canContext.moveTo(150, 70);
	canContext.lineTo(110, 80);
	canContext.stroke();


	//Ноги
	canContext.beginPath();
	canContext.moveTo(150, 100);
	canContext.lineTo(190, 130);
	canContext.stroke();

	canContext.beginPath();
	canContext.moveTo(150, 100);
	canContext.lineTo(110, 130);
	canContext.stroke();

}


drawHuman();

