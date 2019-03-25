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
  	return number.toString();



  } else if (obj.constructor === Array) {




  } else if (obj.constructor === Object) {





  }


};
