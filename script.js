function randomColor() {
    return Math.floor(Math.random()*256);
}

const container = document.querySelector(".container");
const button = document.createElement("button");
button.textContent = "Change grid size";

document.body.insertBefore(button, container);

function createGrid(size = 16)
{
    for(let i = 0; i < size*size; i++) 
    {
        const newDiv = document.createElement("div");
        container.appendChild(newDiv);

        newDiv.style.width = `${800/size}px`;
        newDiv.style.height = `${800/size}px`;
        newDiv.style.border = "1px solid black";

        newDiv.addEventListener("mouseenter", function () {
            newDiv.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        });
    }
}

createGrid();

button.addEventListener("click", function () {
    const cells = document.querySelectorAll(".container div");
    let size = prompt("Enter the side length");
    
    cells.forEach((cell) => {
        cell.remove();
    });

    createGrid(size);
});