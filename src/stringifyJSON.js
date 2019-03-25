// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if (obj === undefined) {
		return undefined;
	}

	if (obj === null) {
  		return 'null';
	}

	if (typeof(obj) === 'boolean') {
  		if (obj === true) {
  			return 'true';
  		} else if (obj === false) {
  		return 'false';
  		}
  	}


  	if (typeof(obj) === 'string') {
  		return '"' + obj + '"';
	}


	if (typeof(obj) === 'number') {
  		return obj.toString();
	}


  	if (obj.constructor === Array) {
  		if (obj.length === 0) {
  			return "[]";
  		}
  		var stringifyArray = function(obj) {
  			var first = obj[0];

  			if (obj.length === 1) {
  				return stringifyJSON(first);
  			}
  			return stringifyJSON(first) + ',' + stringifyArray(obj.slice(1)); 
  		}
  		return ('[' + stringifyArray(obj) + ']');
  	}


  	if (obj.constructor === Object) {
  		for (key in obj) {
  			if (obj[key] === undefined || typeof(obj[key]) === 'function') {
  				delete obj[key];
  			}
  		}
  		var keys = Object.keys(obj);
  		if (keys.length === 0) {
  			return "{}";
  		}

	  	var stringifyObject = function(obj, keys) {
	  		if (keys.length === 1) {
	  			return stringifyJSON(keys[0]) + ':' + stringifyJSON(obj[keys[0]]);
	  		}
	  		if (obj[keys[0]] === undefined) {
	  			return stringifyObject(obj, keys.slice(1));
	  		}
	  		return stringifyJSON(keys[0]) + ':' + stringifyJSON(obj[keys[0]]) + ',' + stringifyObject(obj, keys.slice(1));
  		}
  		return '{' + stringifyObject(obj, Object.keys(obj)) + '}';
  } 




};
