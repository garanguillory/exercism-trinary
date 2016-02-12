var Trinary = function(input){

	this.toDecimal = function(){
		if(Boolean(Number(input))){
				var array = input.split('').reverse();
				var numbers =
						array.map(function(element){
							return Number(element);
						});
				var subs = 
						numbers.map(function(element,index){
								return element * (Math.pow(3,index));
						});
				var answer = 
						subs.reduce(function(accum, curr){
								return accum + curr;
						});
				return answer;
		} else {
			return 0;
		}
	};

};


module.exports = Trinary;

// get length of input
// convert strings to numbers
// push individual numbers into an array
// reverse array
// map each element; element * (Math.pow(3,index of element))
// push to an answer array and sum up the solution