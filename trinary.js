
var Trinary = function(input){

	this.toDecimal = function(){
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
	};

};



module.exports = Trinary;


		// var subs = 
		// 		numbers.reduce(function(accum,curr,index){
		// 				return element * (Math.pow(3,numbers[index]));
		// 		});



// get length of input
// convert strings to numbers
// push individual numbers into an array
// reverse array
// map each element; element * (Math.pow(3,index of element))
// push to an answer array and sum up the solution