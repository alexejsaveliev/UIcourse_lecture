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
