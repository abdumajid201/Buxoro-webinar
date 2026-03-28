const countdownElement = document.getElementById('countdown');
const initialSeconds = 120;
let totalSeconds = initialSeconds;

function formatTime(value) {
    return String(value).padStart(2, '0');
}

function updateCountdown() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    countdownElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

    if (totalSeconds <= 0) {
        totalSeconds = initialSeconds;
        return;
    }

    totalSeconds -= 1;
}

updateCountdown();
setInterval(updateCountdown, 1000);
