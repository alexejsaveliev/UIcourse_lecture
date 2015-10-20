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
