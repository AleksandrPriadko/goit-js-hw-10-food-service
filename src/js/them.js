const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const refs = {
    toolBox: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
}
const savedTheme = localStorage.getItem('theme');

if (savedTheme === JSON.stringify(Theme.DARK)) {
    refs.body.classList.add(`${Theme.DARK}`);
    refs.toolBox.setAttribute('checked', 'true');
} else {
    refs.body.classList.add(`${Theme.LIGHT}`);
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}

function checkedDarkTheme() {
    refs.toolBox.setAttribute('checked', 'true');
    refs.body.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`);
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
}

function checkedLigthTheme() {
    refs.toolBox.removeAttribute('checked');
    refs.body.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}

function changeTheme() {
    if (refs.toolBox.hasAttribute('checked')) {
        checkedLigthTheme();
    } else checkedDarkTheme();
}

refs.toolBox.addEventListener('change', changeTheme);