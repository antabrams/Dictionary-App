const word = document.getElementById('word');
const phonetics = document.getElementById('phonetics');
const definition = document.getElementById('definition');
const example = document.getElementById('example');
const input = document.getElementById('input');
const buttonToggle = document.getElementById('button-toggle');
const card = document.getElementById('card');
const sendBtn = document.getElementById('send');

async function getData() {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error("Something went wrong...");
    }

    word.textContent = data[0].word;
    phonetics.textContent = data[0].phonetics[0].text;
    definition.textContent = data[0].meanings[0].definitions[0].definition;
    example.textContent = data[0].meanings[0].definitions[0].example;
}

buttonToggle.addEventListener("click", e => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    buttonToggle.textContent = isDark ? "Toggle Light Mode" : "Toggle Dark Mode";
    buttonToggle.classList.toggle("button-darkmode", isDark);
    card.classList.toggle("card-darkmode", isDark);
    sendBtn.classList.toggle("button-darkmode", isDark);
    input.classList.toggle("input-darkmode", isDark);
});
