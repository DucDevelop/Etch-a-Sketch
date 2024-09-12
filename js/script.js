function createGrid(n, container) {
    for(let i = 0; i < n; ++i) {
        container.appendChild(document.createElement('div'));
    }
}