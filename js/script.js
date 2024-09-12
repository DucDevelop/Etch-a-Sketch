const containerRef = document.querySelector('.container');
const btnRef = document.querySelector('button');


function createGrid(n,container) {
    // calculate width of single element
    let containerWidth = window.getComputedStyle(containerRef, null).getPropertyValue('width')
    let containerPad = window.getComputedStyle(containerRef, null).getPropertyValue('padding')

    const width = Math.floor((+containerWidth.slice(0, containerWidth.length-2) - 2* +containerPad.slice(0, containerPad.length-2)) / n)


    for(let i = 0; i < n; ++i) {
        for(let j = 0; j < n; ++j) {
            const square = document.createElement('div');
            square.classList.add('grid-element');
            square.style.maxWidth = `${width}px`
            square.style.maxHeight = `${width}px`
            square.style.minWidth = `${width*.99}px`
            square.style.minHeight = `${width*.99}px`
            container.appendChild(square);
        }
    }
}





containerRef.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('grid-element'))
        e.target.classList.add('visited-element')
})


createGrid(4, containerRef)