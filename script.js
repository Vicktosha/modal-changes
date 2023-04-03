const openModal = document.querySelector('.open');
const modal = document.querySelector('.modal');
const hiddenModal = document.querySelector('.hidden');
const form = document.querySelector('form');
const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

const isFormValid = false;



openModal.addEventListener('click', () => {
    modal.showModal()
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close()
    }
});

const handleSubmit = (event) => {
    event.preventDefault();
    validateRequired();
    if (isFormValid){
        // если форма валидна
    }
    // если не валидна
}

const validateRequired = () => {
    const validateElements = document.querySelectorAll("[required]");
    const validateArr = []
    Array.from(validateElements).forEach((item, i) => {
        if(!validateElements[i].value.length){
            validateArr.push(false)
        }
    })
    if(validateArr.includes(false)){
        isFormValid = false;
    } else {
        isFormValid = true;
    }
};

// Toggle menu
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}

form.addEventListener('submit', handleSubmit);