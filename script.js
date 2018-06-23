$("document").ready(function(){
	var minutes = 25;
	var seconds = 0;
	var running = false;
	var size = {
		minutes: 25,
		seconds: 0,
		getStr: function() {
			var time = "";
			if (this.minutes < 10) {
				time += '0' + this.minutes;
			} else {
				time += this.minutes;
			}

			time += ':';

			if (this.seconds < 10) {
				time += '0' + this.seconds;
			} else {
				time += this.seconds;
			}

			return time;
		}
	}

	var interval;

	$("#start").on('click', function(){
		if (!running) {
			minutes = size.minutes;
			seconds = size.seconds;

			$("#costumizer").fadeOut();

			running = true;
			interval = setInterval(function(){
				if (seconds) {
					seconds--;
				} else if (minutes) {
					minutes--;
					seconds = 59;
				} else {
					stop();
				}

				var time = "";
				if (minutes < 10) {
					time += '0' + minutes;
				} else {
					time += minutes;
				}

				time+=':';

				if (seconds < 10) {
					time += '0' + seconds;
				} else {
					time += seconds;
				}

				$("#time").html(time);



			}, 1000);
		}
	});

	$("#reset").on('click', stop);

	function stop() {
		if (running) {
			$("#costumizer").fadeIn();
			running = false;
			minutes = size.minutes;
			seconds = size.seconds;
			clearInterval(interval);
			$("#time").html(size.getStr());
		}
	}

	$("#plusMinutes").on('click', function () {
		size.minutes += 1;
		$("#time").html(size.getStr());
	});

	$("#minusMinutes").on('click', function ( ) {
		if (size.minutes > 1) {
			size.minutes -= 1;
			$("#time").html(size.getStr());
		}
	});

	$("#plusSeconds").on('click', function () {
		if (size.seconds < 59) {
			size.seconds += 1;
			$("#time").html(size.getStr());
		} else {
			size.seconds = 0;
			$("#time").html(size.getStr());
		}
	});
$("#minusSeconds").on('click', function () {
		if (size.seconds) {
			size.seconds -= 1;
			$("#time").html(size.getStr());
		} else {
			size.seconds = 59;
			$("#time").html(size.getStr());
		}
	});
});
