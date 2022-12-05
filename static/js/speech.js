const textarea = document.querySelector('.section__wrapper__textarea__tear');
const select = document.querySelector('.section__wrapper__select__sele');
const btn = document.querySelector('.section__wrapper__btn');
// ============================================ like Api .
speechSynthesis.addEventListener('voiceschanged', () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const wow of speechSynthesis.getVoices()) {
    const option = `
        <option value="${wow.name}">${wow.name} (${wow.lang})</option>
        `;
    select.insertAdjacentHTML('beforeend', option);
  }
});
// ==============================================
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const utter = new SpeechSynthesisUtterance(textarea.value);
  // eslint-disable-next-line no-restricted-syntax
  for (const ele of speechSynthesis.getVoices()) {
    if (ele.name === select.value) {
      utter.voice = ele;
    }
  }
  speechSynthesis.speak(utter);
});