
function startTimer() {
    const timeLimit = document.getElementById('timeLimit').value;
    let time = timeLimit * 60;

    const countdownEl = document.getElementById('timer');

    setInterval(updateCountdown, 1000); 

        function updateCountdown () {
            const minutes = Math.floor(time/60);
            let seconds = time % 60;

            seconds = seconds < 10 ? `0${seconds}` : seconds;
            
            countdownEl.innerHTML = `${minutes}: ${seconds}`;
            time--;
            time = time < 0 ? 0 : time; 
        }

        if (time === 0) {
            playAudio();
        }

        function playAudio() {
            const audio = new Audio('alarm.mp3');
            audio.play();
        }
    // function pauseTimer() {
    //     clearInterval(updateCountdown);
    // }

    // function resetTimer() {
    //     clearInterval(updateCountdown);
    //     time = startingMinutes * 60;
    //     updateCountdown();
    // }
    document.getElementById('startTimer').addEventListener('click', startTimer);
}