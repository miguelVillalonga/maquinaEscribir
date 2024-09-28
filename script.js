document.addEventListener('DOMContentLoaded', function() {
    const asciiArt = document.getElementById('ascii-art');
    const text = asciiArt.textContent;
    asciiArt.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            asciiArt.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
});
