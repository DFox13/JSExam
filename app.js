const actors = ['wolf', 'lamb', 'cabbage'];

document.querySelector('.board').addEventListener('click', function(){
    document.querySelector('.board').classList.toggle('board-initial');
    document.querySelector('.board').classList.toggle('board-final');
});
draw();

function draw(){
    document.querySelector('.left').innerHTML = '';
    document.querySelector('.right').innerHTML = '';

    leftBank.forEach(actor => {
        document.querySelector('.left').appendChild(createActor(actor));
    });

    rightBank.forEach(actor => {
        document.querySelector('.right').appendChild(createActor(actor));
    });
}

function createActor(actor){
    const actorItem = document.createElement('div');
    actorItem.className = 'actor ' + actor;

    const actorImage = document.createElement('img');
    actorImage.src = '/image/' + actor + '.webp';
    actorImage.alt = actor;

    actorItem.appendChild(actorImage);

    return actorItem;
}