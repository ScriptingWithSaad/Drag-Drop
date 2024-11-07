let dragItem = null;

function dragStart(e) {
    dragItem = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.outerHTML);
}

function allowDrop(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    if (e.target.id === 'left' || e.target.id === 'right') {
        e.target.appendChild(dragItem);
    } else {
        e.target.parentNode.appendChild(dragItem);
    }
    dragItem = null;
}