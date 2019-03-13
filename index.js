let count = 0;
const element = document.getElementById(`counter`);

function increase() {
    count++;
    element.innerText = count;
}

function decrease() {
    count--;
    element.innerText = count;
}

function reset() {
    count = 0;
    element.innerHTML = `<mark>0</mark>`;
}

let buttons = null;

function selectTheme(theme) {
    const byTag = (tag) => {
        const elems = [...document.getElementsByTagName(tag)];

        elems.forEach((e, i, a) => {
            a[i].className = theme;
        });
    }

    byTag(`body`);
    byTag(`main`);
    byTag(`button`);
}