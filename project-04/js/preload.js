function loadWorker() {
    let worker = {
        "name": "Ferdinand Magellan",
        "job": "Explorer",
        "philosophy": "I'm here to break shit.",
        "picture": "assets/ferdinand.jpg"
    };

    let picture = document.querySelector('.picture');
    let name = document.querySelector('.information .name');
    let job = document.querySelector('.information .job');
    let philosophy = document.querySelector('.information .philosophy');

    picture.style.backgroundImage = `url('${worker.picture}')`;

    name.innerHTML = worker.name;
    job.innerHTML = worker.job;
    philosophy.innerHTML = worker.philosophy;

}

loadWorker();