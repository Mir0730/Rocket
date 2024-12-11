document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");
    const rocketElement = document.getElementById("rocket");
    const startButton = document.getElementById("start-button");

    let countdown = 10;
    let rocketPosition = 0;
    let countdownInterval;
    let launchInterval;

    function startCountdown() {
        startButton.disabled = true;
        countdownElement.textContent = `Countdown: ${countdown}`;

        countdownInterval = setInterval(() => {
            countdown--;
            countdownElement.textContent = `Countdown: ${countdown}`;

            if (countdown === 0) {
                clearInterval(countdownInterval);
                startLaunch();
            }
        }, 1000);
    }

    function startLaunch() {
        launchInterval = setInterval(() => {
            rocketPosition += 5;
            rocketElement.style.bottom = `${rocketPosition}px`;

            if (rocketPosition > 400) { // Stop when the rocket moves out of the launch area
                clearInterval(launchInterval);
            }
        }, 50);
    }

    startButton.addEventListener("click", startCountdown);
});
