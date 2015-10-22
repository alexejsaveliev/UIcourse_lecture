////////////////////////////////////////////task 1
var str='';

for (var i=0; i<7; i++) {
  console.log(str+='#');
}

////////////////////////////////////////////task 2
var fizzBuzz = function(num) {
	for (var i = 1; i <= num; i++) {
		if (i%3==0 && i%5==0) {
			console.log(i+' - FizzBuzz');
		} else if (i%3==0) {
			console.log(i+' - Fizz');	
		} else if (i%5==0) {
			console.log(i+' - Buzz');
		} else {
			console.log(i);
		}
	};
}

fizzBuzz(100);

////////////////////////////////////////////task 3
var resultStr = '';

for (var i = 1; i <= 64; i++) {

  if (i%2==0) {
    if (i%16==0) {
      resultStr+='\n';
    } else if (i%8==0) {
      resultStr+='\n ';
    } else {
      resultStr+=' ';
    }
  } else {
    resultStr+='#';
  }
}

console.log(resultStr);


////////////////////////////////////////////task 4
var min = function (a, b) {
  if (a<b) {
    return a;
  } else {
    return b;
  }
}

////////////////////////////////////////////task 5
function isEven(num) {
  if (num==0) {
    return true;
  } else if (num==1) {
    return false;
  } else {
    return isEven(num-2 * (num<0 ? -1 : 1));
  }
}

////////////////////////////////////////////task 6
var countChar = function (str, chr) {
  var count=0;
  
  for (var i = 0; i < str.length; i++) {
    if (str[i]==chr) {
      count++;
    }
  }
  return count;
}


////////////////////////////////////////////task 7
function range(a, b, typeStep) {
  var resultAr = [];
  if (typeStep == -1) {
    while (a >= b) {
      resultAr.push(a);
      a--;
    }
  } else {
    while (a <= b) {
      resultAr.push(a);
      a++;
    }
  }
  return resultAr;
}

function sum(rangeArr) {
  var result = 0;
  for (var i = 0; i < rangeArr.length; i++) {
    result += rangeArr[i];
  }
  return result;
}


////////////////////////////////////////////task 8
function reverseArray(arr) {
  var newArr = [];
  for (var i = arr.length; i >= 0 ; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

Array.prototype.reverseArrayInPlace = function () {
  for (var i = 0; i < this.length; i++) {
  	this.splice(i, 0, this.pop());
  }
};


////////////////////////////////////////////task 9
function arrayToList (arr) {
	var tempArr = arr;

	var resultObj = createObj(tempArr);

	function createObj(array) {
	    	if (tempArr.length > 1) {
	        	return { value: array.shift(), rest: arrayToList(array) };
	    	} else {
	        	return { value: array.shift(), rest: null };
	    	};
	};	
	
	return resultObj;
}


function listToArray (list) {
	var resultArr = [];
	while(list) {
		resultArr.push(list.value);
		list = list.rest;
	}

	return resultArr;
}

function prepend (value, obj) {
	var newObj = {};
	newObj.value = value;
	newObj.rest = obj;

	return newObj;
}

function nth (obj, index) {

	if (typeof(obj) != 'object' || obj == null) {return undefined};
	if (index==0) {return obj.value};

	while(index) {
		index--;
		return nth(obj.rest, index);
	}
}


////////////////////////////////////////////task 10
function deepEqual (obj_1, obj_2) {

	if(obj_1===obj_2) {return true;}
	
	if ((obj_1 == null || typeof(obj_1)!='object') || 
		(obj_2 == null || typeof(obj_2)!='object')) {
			return false;
		};

	for(key in obj_1) {
		if(key in obj_2 && deepEqual(obj_1[key], obj_2[key])) {

		} else {
			return false;
		}
	}

	return true;

}


////////////////////////////////////////////task 11



