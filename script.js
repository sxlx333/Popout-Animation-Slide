const btn = document.querySelector('#btn'),
modalContent = document.querySelector(".modalContent"),
modal = document.querySelector('.modal'),
close = document.querySelector('.close');

btn.addEventListener('click', openModal);

function openModal () {
    modal.style.display = 'block';
}

close.addEventListener('click', closeModal);

function closeModal () {
    modalContent.classList.add('slideUp');

    setTimeout(() => {  // nusistatome kada pasalinti elementa po 0.5s
        modalContent.classList.remove('slideUp');
        modal.style.display = 'none';
    }, 500);
}
