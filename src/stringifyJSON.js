// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === undefined) {
  	return 'undefined';

  } else if (obj === null) {
  	return 'null';

  } else if (obj.constructor === Boolean) {
  	if (obj = true) {
  		return 'true';
  	} else {
  		return 'false';
  	}

  } else if (obj.constructor === String) {
  	return obj;

  } else if (obj.constructor === Number) {
  	return obj.toString();



  } else if (obj.constructor === Array) {

  	var stringifyArray = function(obj) {
  		var first = obj[0];

  		if (obj.length === 1) {
  			return obj;
  		}
  		return stringifyJSON(first) + ', ' + stringifyArray(obj.slice(1)); 
  	}

  	return ('[' + stringifyArray(obj) + ']');

  } else if (obj.constructor === Object) {

  	return '{' + function stringify(obj) {

  	} + '}';
  }


};
