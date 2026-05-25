// 🎂 HER BIRTHDAY - May 26, 2025!
const birthdayString = "May 26, 2026 00:00:00";  // Changed to 2026!
const BIRTHDAY_DATE = new Date(birthdayString).getTime();

console.log("Target:", birthdayString);
console.log("Calculated timestamp:", BIRTHDAY_DATE);
console.log("Current timestamp:", new Date().getTime());

function updateCountdown() {
    const now = new Date().getTime();
    const difference = BIRTHDAY_DATE - now;

    console.log("Difference (ms):", difference);

    if (difference <= 0) {
        // 🎉 BIRTHDAY HAS ARRIVED!
        document.getElementById('countdown-section').style.display = 'none';
        document.getElementById('locked-content').style.display = 'none';
        document.getElementById('unlocked-content').style.display = 'block';
    } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();