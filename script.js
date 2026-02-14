// 1. تحديد التاريخ اللي بدأتوا فيه (غير الأرقام دي)
const startDate = new Date("2021-10-7"); // السنة - الشهر - اليوم

function checkPassword() {
    const password = document.getElementById('password-input').value;
    const correctPassword = "1812"; 

    if (password === correctPassword) {
        // إخفاء صفحة الباسورد وإظهار المحتوى
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';

        // تشغيل الموسيقى
        const music = document.getElementById('bg-music');
        music.play().catch(error => console.log("تحتاج لتفاعل المستخدم لتشغيل الصوت"));

        // تشغيل العداد وتأثير القلوب
        updateCounter();
        setInterval(updateCounter, 1000); // تحديث العداد كل ثانية
        setInterval(createHeart, 300);    // مطرة قلوب

        // تفعيل ظهور الجمل عند السكرول
        window.addEventListener('scroll', revealSentences);
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

function updateCounter() {
    const startDate = new Date("2021-10-7"); // تاريخكم
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // السنين والشهور (حساب تقريبي)
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainingDays = days % 30;

    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = remainingDays;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// السطر ده هو اللي بيخلي العداد يشتغل كل ثانية
setInterval(updateCounter, 1000);

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    // السطر ده هو اللي بيوزعهم في كل الشاشة بالعرض
    heart.style.left = Math.random() * 100 + "vw"; 
    
    // سرعة عشوائية عشان ميبقوش نازلين زي بعض
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s"; 
    
    heart.innerText = "❤️";
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// 4. وظيفة ظهور الجمل بسلاسة
function revealSentences() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        if (revealTop < windowHeight - 50) {
            reveals[i].style.opacity = "1";
            reveals[i].style.transform = "translateY(0)";
        }
    }
}
const music = document.getElementById('bg-music');
const playBtn = document.getElementById('play-pause-btn');
const playerIcon = document.getElementById('player-icon');

playBtn.addEventListener('click', function() {
    if (music.paused) {
        music.play();
        playerIcon.innerText = "II"; // شكل Pause
        playBtn.style.boxShadow = "0 0 20px rgba(255, 117, 117, 0.6)";
    } else {
        music.pause();
        playerIcon.innerText = "▶"; // شكل Play
        playBtn.style.boxShadow = "none";
    }
});