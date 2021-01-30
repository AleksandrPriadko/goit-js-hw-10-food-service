const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const refs = {
    toolBox: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
}

refs.body.classList.add(Theme.LIGHT)

refs.toolBox.addEventListener('change', changeTheme);


function changeTheme() {
    refs.toolBox.checked ? checkedDarkTheme() : checkedLigthTheme();
}
function checkedDarkTheme() {
    refs.toolBox.checked = true;
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
}

function checkedLigthTheme() {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
}

if (localStorage.getItem('theme') === Theme.DARK) {
    refs.toolBox.checked = true;
    refs.body.classList.add(Theme.DARK);
} else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    refs.toolBox.checked = false;
}