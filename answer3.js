//Question 3
/*code Explanation:
Calculate_Fibonacci_Series is to create Fibonacci Series in array, for example Calculate_Fibonacci_Series(4) = [1,1,2,3];
Pop_next_fibonacci is to find next Fibonacci number,  for example Pop_next_fibonacci(8) = 13;
nextFibonacci is to output all "next Fibonacci number" of the input array elements
*/
	var test_case_4 = [1,8,21]

	var Fibonacci_Series;

	function Calculate_Fibonacci_Series(n){
		Fibonacci_Series = [1,1];
	for(var k=0;k<n;k++){
		var x = Fibonacci_Series[k]+Fibonacci_Series[k+1];
		Fibonacci_Series.push(x);
	}
	console.log(Fibonacci_Series.toString());
	}

	function Pop_next_fibonacci(m){
		if(m<=927372692193079200000){Calculate_Fibonacci_Series(100);}
		else{Calculate_Fibonacci_Series(m);}
		for(var l=1;l<m;l++){
			if(m==Fibonacci_Series[l]){break;}
		}
		console.log(Fibonacci_Series[l+1]);
		return Fibonacci_Series[l+1];
	}


	function nextFibonacci(test){
		var output_array = [];
		for(var p=0;p<test.length;p++){
			output_array.push(Pop_next_fibonacci(test[p]));
		}
		console.log(output_array.toString());
		return output_array;
	}

	nextFibonacci(test_case_4);