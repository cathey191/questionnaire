$(document).ready(function(){
	var passArray = [];
	var failArray = [];
	var question = document.getElementById('question');
	var answer = document.getElementById('input').value;
	// var button = document.getElementById('button');

	function counter(){
		console.log('test');
		// var answer = document.getElementById('input').value;
		//number of answers
		var passWords = passArray.length;
		var failWords = failArray.length;
		//number of answers as string
		var passNumber = passWords.toString();
		var failNumber = failWords.toString();
		//total number
		var totalWords = passWords + failWords
		var totalNumber = totalWords.toString();

		$('.correct').text(passNumber);
		$('.incorrect').text(failNumber);
		$('.total').text(totalNumber);
	};

	$('.firButton').click(function(){
		// var answer = document.getElementById('input').value;
		counter();

		if (answer == 'Wellington') {
			passArray.push(answer);
			console.log('pass')
		} else {
			failArray.push(answer);
			// console.log('fail')
		}
		$('#question').text('Which country has the largest surface area in the world?');
		$('#button').removeClass('firButton');
		$('#button').addClass('secButton');
	});

	$('.secButton').click(function(){
		// var answer = document.getElementById('input').value;
		counter();

		if (answer == 'Russia') {
			passArray.push(answer);
			// console.log('pass')
		} else {
			failArray.push(answer);
			// console.log('fail')
		}
		$('#question').text('one plus one?');
		$('#button').removeClass('secButton');
		$('#button').addClass('thrButton');
	});

	$('.thrButton').click(function(){
		// var answer = document.getElementById('input').value;
		counter();

		if (answer == 'Two') {
			passArray.push(answer);
			// console.log('pass')
		} else {
			failArray.push(answer);
			// console.log('fail')
		}
		$('#question').text('test');
		$('#button').removeClass('thrButton');
		$('#button').addClass('fouButton');
	});

});
