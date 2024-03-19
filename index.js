document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', () => {
        const api = "https://api.adviceslip.com/advice"
        console.log(api);

        fetch(api)
            .then((data) => data.json())
            .then((data) => updateUI(data))
            .catch((error) => console.log(error));
    });

    function updateUI(cardInfo){
        const cardElement = document.querySelector('.card2');
        const adviceElement = cardElement.querySelector('.advice');
        const infoElement = cardElement.querySelector('.info');
        
        adviceElement.textContent = `ADVICE # ${cardInfo.slip.id}`;
        infoElement.textContent     = cardInfo.slip.advice;
    }
});
