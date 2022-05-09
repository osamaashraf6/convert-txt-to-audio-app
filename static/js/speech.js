var textarea = document.querySelector(".section__wrapper__textarea__tear");
var select = document.querySelector(".section__wrapper__select__sele");
var btn = document.querySelector(".section__wrapper__btn");
// ============================================ like Api .
speechSynthesis.addEventListener("voiceschanged", function() {
    for (let wow of speechSynthesis.getVoices()) {

        let option = `
        <option value="${wow.name}">${wow.name} (${wow.lang})</option>
        `;
        select.insertAdjacentHTML("beforeend", option);
    }
});
// ==============================================
btn.addEventListener("click", function(e) {
    e.preventDefault();
    let utter = new SpeechSynthesisUtterance(textarea.value)
    for (let ele of speechSynthesis.getVoices()) {
        if (ele.name === select.value) {
            utter.voice = ele;

        }

    }
    speechSynthesis.speak(utter);
})