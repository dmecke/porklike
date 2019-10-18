window.addEventListener('load', () => {
    _init();
    setInterval(() => {
        _update60();
    }, 1000 / 60);
    setInterval(() => {
        _draw();
    }, 1000 / 60);
});
