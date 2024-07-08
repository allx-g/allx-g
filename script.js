

const startSection = document.querySelector('section#start');
const professionalSection = document.querySelector('section#allx-g');
const personalSection = document.querySelector('section#alex-g');

const professionalButton = document.querySelector('.left a');
const personalButton = document.querySelector('.right a');
const backButtons = document.querySelectorAll('.back-link')


professionalButton.addEventListener('click', () => {
    professionalSection.classList.remove('hidden');
    startSection.classList.add('hidden');
});

personalButton.addEventListener('click', () => {
    personalSection.classList.remove('hidden');
    startSection.classList.add('hidden');
})

backButtons.forEach((button) => {
    button.addEventListener('click', () => {
        startSection.classList.remove('hidden');
        professionalSection.classList.add('hidden')
        personalSection.classList.add('hidden')
    })
})