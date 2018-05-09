$(document).ready(function(){
	var passArray = [];
	var failArray = [];
	var question = document.getElementById('question');

	function counter(){
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

	$('#button').click(function(){
		var answerLower = document.getElementById('input').value;
		var answer = answerLower.toLowerCase();
		var buttonClass = document.getElementById('button').className;

		//first question
		if (buttonClass == 'button firButton'){
			if (answer == 'wellington') {
				passArray.push(answer);
			} else {
				failArray.push(answer);
			}
			counter();
			$('#question').text('Which country has the largest surface area in the world?');
			$('#button').removeClass('firButton');
			$('#button').addClass('secButton');

		//second question
		}	else if (buttonClass == 'button secButton') {
			if (answer == 'russia') {
				passArray.push(answer);
			} else {
				failArray.push(answer);
			}
			counter();
			$('#question').text('one plus one?');
			$('#button').removeClass('secButton');
			$('#button').addClass('thrButton');

		//third question
	} else if (buttonClass == 'button thrButton') {
			if (answer == '2' || answer == 'two') {
				passArray.push(answer);
			} else {
				failArray.push(answer);
			}

			counter();

			$('#question').text('The End');
			$('#button').removeClass('secButton');
			$('#button').addClass('endButton');
			$('#button').css('display', 'none');
			$('#input').css('display', 'none');

		}

	});

 });
