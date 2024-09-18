const dicon = document.querySelector(".moon");
const licon = document.querySelector(".sun");

const pref_theme = localStorage.getItem("theme");

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

function theme_toggle() {
    dicon.classList.toggle("hidden");
    licon.classList.toggle("hidden");
}

function theme_check(){
    if(pref_theme === "dark" || (!pref_theme && systemTheme.matches)) {
        document.documentElement.classList.add("dark");
        dicon.classList.add("hidden");
        return;
    }
    licon.classList.add("hidden");
}

function switch_theme() {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        theme_toggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    theme_toggle();
}

dicon.addEventListener("click", switch_theme);
licon.addEventListener("click", switch_theme);
theme_check();

function calculateTip(percentage) {
    var bill = document.querySelector(".bill").value;
    var people = document.querySelector(".people").value;
    if (bill > 0 && people > 0 && (percentage > 0 && percentage < 100)) {
        var tip = (bill * percentage) / 100;
        var tip_person = tip / people;
        var total_person = (bill / people) + tip_person;
        document.querySelector(".tip").value = "$" + tip_person.toFixed(2);
        document.querySelector(".total").value = "$" + total_person.toFixed(2);
    }
    else{
        alert("Invalid values or empty fields");
    }
    
}

function toggleForm() {
    var form = document.getElementById("form-container");
    form.classList.toggle("hidden");
    form.classList.toggle("block");
}

document.querySelector(".reset").addEventListener("click", clear);
function clear() {
  document.querySelector(".bill").value = "";
  document.querySelector(".people").value = 1;
  document.querySelector(".tip").value = "";
  document.querySelector(".total").value = "";
  document.querySelector(".custom").value = "";
}