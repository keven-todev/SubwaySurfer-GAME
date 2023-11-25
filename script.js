let character = document.getElementById('character')
let count = '0';

function moveLeft() { 
    const currentLeft = parseFloat(getComputedStyle(character).left);
    const newLeft = currentLeft -  100;
    
    if(newLeft >= 0) {
        character.style.left = newLeft + "px";
    }
}

function moveRight() { 
    const currentLeft = parseFloat(getComputedStyle(character).left);
    
    const newLeft = currentLeft + 100;
    
    if(newLeft < 300) {
        character.style.left = newLeft + "px";
    }
}

document.addEventListener('keydown', event => {
    if(event.key === 'ArrowLeft') {
        moveLeft();
    } 
    if(event.key === 'ArrowRight') {
        moveRight();
    } 
})

const block = document.getElementById('block');
block.addEventListener('animationiteration', () => {
    const random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + 'px';
    count++;
});

setInterval(function() {
    const characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    const blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));

    if(characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
        alert('game over! Score:' + count);
        block.style.animation = "none";
    }


})

