//Question 1
/*code Explanation:
"count" equal to number of second array
scan each elements in second array, if the element is shown up in the first array, "count" will count down.
if "count" down to 0, return true.
*/
	var test_case_1a = ["A","B","C","D","E"];
	var test_case_1b = ["A","E","D"];

	var test_case_2a = ["A","B","C","D","E"];
	var test_case_2b = ["A","D","Z"];

	var test_case_3a = ["A","D","E"];
	var test_case_3b = ["A","A","D","E"];

	function isSubset(first_array,second_array){
		var count = second_array.length;
		for(var i=0;i<second_array.length;i++){
			for(var j=0;j<first_array.length;j++){
				if(second_array[i]===first_array[j]){count--;break;}
			}
		}

		if (count==0){return true;}
		else {return false;}
	}


	console.log(isSubset(test_case_1a,test_case_1b));
	console.log(isSubset(test_case_2a,test_case_2b));
	console.log(isSubset(test_case_3a,test_case_3b));