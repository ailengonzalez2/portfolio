const codeContainer = document.getElementById('code-simulation');
const codeLines = [
    { text: 'while ', className: 'keyword' },
    { text: '(true)', className: 'parentheses' },
    { text: ' {', className: 'braces' },
    { text: '    tomarCafe();', className: 'function' },
    { text: '    programar();', className: 'function' },
    { text: '}', className: 'braces' }
];

let currentLine = 0;
let currentChar = 0;

function typeCode() {
    if (currentLine < codeLines.length) {
        const line = codeLines[currentLine];
        if (currentChar < line.text.length) {
            const span = document.createElement('span');
            span.className = line.className;
            span.textContent = line.text[currentChar];
            codeContainer.appendChild(span);
            currentChar++;
            setTimeout(typeCode, 50);
        } else {
            codeContainer.appendChild(document.createElement('br'));
            currentChar = 0;
            currentLine++;
            setTimeout(typeCode, 500);
        }
    } else {
        // Reinicia la animación
        setTimeout(() => {
            codeContainer.innerHTML = '';
            currentLine = 0;
            currentChar = 0;
            typeCode();
        }, 1000); // Espera 1 segundo antes de reiniciar
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    typeCode();
});

