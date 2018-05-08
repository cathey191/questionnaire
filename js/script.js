$(document).ready(function(){
	var passArray = [];
	var failArray = [];
	var question = document.getElementById('question');
	// var answer = document.getElementById('input').value;
	// var button = document.getElementById('button');

	$('.button').click(function(){
		console.log('test');
		var answer = document.getElementById('input').value;

		$('.correct').text(passNumber);
		$('.incorrect').text(failNumber);
		$('.total').text(totalNumber);

		if (answer == 'Wellington') {
			passArray.push(answer);
			console.dir(passArray);
			console.log('pass')
		} else {
			failArray.push(answer);
			// console.log('fail')
		}

		//number of answers
		var passWords = passArray.length;
		var failWords = failArray.length;
		//number of answers as string
		var passNumber = passWords.toString();
		var failNumber = failWords.toString();
		//total number
		var totalWords = passWords + failWords
		var totalNumber = totalWords.toString();

	});
});
