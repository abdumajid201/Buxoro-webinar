const countdownElement = document.getElementById('countdown');
const initialSeconds = 120; // 2 minut
let totalSeconds = initialSeconds;

function updateCountdown() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    countdownElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    if (totalSeconds <= 0) {
        totalSeconds = initialSeconds;
        return;
    }

    totalSeconds--;
}

updateCountdown();
setInterval(updateCountdown, 1000);