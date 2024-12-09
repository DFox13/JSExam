const actors = ['wolf', 'lamb', 'cabbage'];
let left = actors.slice();
let boat = [];
let right = [];

document.querySelector('.board').addEventListener('click', function(){
    document.querySelector('.board').classList.toggle('board-initial');
    document.querySelector('.board').classList.toggle('board-final');
    if (left.length === 0 && right.length === actors.length) {
        alert('Congratulations! You have won!');
        return;
    }
    if (boat === left) {
        boat = right;
    } else {
        boat = left;
  }
});
draw();

function draw(){
    document.querySelector('.left').innerHTML = '';
    document.querySelector('.right').innerHTML = '';

    left.forEach(actor => {
        document.querySelector('.left').appendChild(createActor(actor));
    });

    right.forEach(actor => {
        document.querySelector('.right').appendChild(createActor(actor));
    });
}

function createActor(actor){
    const actorItem = document.createElement('div');
    actorItem.className = 'actor ' + actor;

    const actorImage = document.createElement('img');
    actorImage.src = '/image/' + actor + '.webp';
    actorImage.alt = actor;

    actorImage.addEventListener('click', function(){
        if (actor === 'wolf' && left.includes('lamb') && boat ===left && left.length === 2||actor === 'wolf' && boat ===right &&  right.includes('lamb') && right.length === 2) {
            alert('FAIL')
            return;
        }
        
        if (actor === 'lamb' && left.includes('wolf') && boat ===left && left.length === 2|| actor === 'lamb' && boat ===right && right.includes('wolf') && right.length === 2) {
            alert('FAIL')
            return;
        }
        
        if (actor === 'lamb' && left.includes('cabbage') && boat ===left && left.length === 2||actor === 'lamb' && boat ===right && right.includes('cabbage') && right.length === 2) {
            alert('FAIL')
            return;
        }
        
        if (left.includes(actor)) {
            left = left.filter(a => a !== actor);
            right.push(actor);
        } else if (right.includes(actor)) {
            right = right.filter(a => a !== actor);
            left.push(actor);
        }
        draw();
    });

    actorItem.appendChild(actorImage);

    return actorItem;
}

