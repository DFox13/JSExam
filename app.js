document.querySelector('.board').addEventListener('click', function(){
    document.querySelector('.board').classList.toggle('board-initial');
    document.querySelector('.board').classList.toggle('.board-final');
})

draw();
function draw(){
    actors.forEach(actor => {
        document.querySelector('left').appendChild(createActor(actor));
    });
}

function createActor(actor){
    const actorItem = document.createElement('div');
    actorItem.className = actor;

    return actorItem;
}