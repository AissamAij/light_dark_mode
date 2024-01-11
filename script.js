const toggleswitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Image function
function imageMode(color){
    image1.src = `image/undraw_project_team_lc5a_${color}.svg`
    image2.src = `image/undraw_Mind_map_re_nlb6_${color}.svg`;
    image3.src = `image/undraw_Portfolio_re_qwm5_${color}.svg`;
}

// Dark Mode Styles
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark')
}

// Light Mode Styles
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light')
}

// Switchtheme Function
function switchtheme(event){
    if(event.target.checked){
     document.documentElement.setAttribute('data-theme', 'dark');
     darkMode();
     localStorage.setItem('theme', 'dark');

    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
        localStorage.setItem('theme', 'light');

    }
};

// Event Listner
toggleswitch.addEventListener('change', switchtheme)

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
   if(currentTheme === 'dark'){
       toggleswitch.checked = true;
       darkMode();
   }
}