document.getElementById('startButton').addEventListener('click', function() {
    const resultText = document.getElementById('result');
    const progressBar = document.getElementById('progress');
    const results = ['Truth', 'Lie'];
    let width = 0;
    
    resultText.textContent = '';
    progressBar.style.width = '0%';
    
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            const randomResult = results[Math.floor(Math.random() * results.length)];
            resultText.textContent = `Result: ${randomResult}`;
        } else {
            width += 5;
            progressBar.style.width = `${width}%`;
        }
    }, 100);
});
