const nav_list = document.querySelector (".nav_list");
const variable_button = document.querySelector (".variable_button");
const toggle_color = document.querySelector ("#theme_change");

function toggle_dropdown () {
    nav_list.classList.toggle ("nav_hidden");
}

function theme_toggle () {
    console.log ("Theme toggle clicked");
    toggle_color.classList.toggle ("dark_mode");
}