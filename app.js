const sounds = {
    'KeyA': new Audio('sounds/A.mp3'),
    'KeyS': new Audio('sounds/S.mp3'),
    'KeyD': new Audio('sounds/D.mp3'),
    'KeyF': new Audio('sounds/F.mp3'),
    'KeyG': new Audio('sounds/G.mp3'),
    'KeyH': new Audio('sounds/H.mp3'),
    'KeyJ': new Audio('sounds/J.mp3'),

    'KeyW': new Audio('sounds/W.mp3'),
    'KeyE': new Audio('sounds/E.mp3'),
    'KeyT': new Audio('sounds/T.mp3'),
    'KeyY': new Audio('sounds/Y.mp3'),
    'KeyU': new Audio('sounds/U.mp3')
};

const keys = Object.getOwnPropertyNames(sounds);

document.addEventListener('keydown', function (e){
    if (keys.includes(e.code)) {
        new Audio('sounds/U.mp3');
        console.log(`The '${e.key}' key is pressed.`);
        sounds[e.code].play();
    } else {
        console.log("Some unbound key was pressed.");
    }
}, false);