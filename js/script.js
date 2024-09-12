const containerRef = document.querySelector('.container');
const btnRef = document.querySelector('button');


function createGrid(n,container) {
    // calculate width of single element
    let containerWidth = window.getComputedStyle(containerRef, null).getPropertyValue('width');
    let containerPad = window.getComputedStyle(containerRef, null).getPropertyValue('padding');
    
    const width = 1 / n;
    const height =  Math.floor((+containerWidth.slice(0, containerWidth.length-2) - 2* +containerPad.slice(0, containerPad.length-2)) * width );

    for(let i = 0; i < n*n; ++i) {
        const square = document.createElement('div');
        square.classList.add('grid-element');
        // set flex base to almost full width to still have free space to distribute
        square.style.flex = `1 0 ${99.999*width}%`
        square.style.minHeight = `${height}px`;
        container.appendChild(square);
    }
}


containerRef.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('grid-element'))
        e.target.classList.add('visited-element');
})
btnRef.addEventListener('click', () => {
    const N = prompt('Enter N to create a NxN grid (maximum 100)');
    if(N > 0 && N <=100) {
        while (containerRef.lastElementChild) {
            containerRef.removeChild(containerRef.lastElementChild);
          }
          createGrid(N, containerRef)
    }
})


createGrid(16, containerRef)