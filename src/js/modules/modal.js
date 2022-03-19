const modals = () => {
    

    const headerBtn = document.querySelector('.header_btn'),
          modalPopupEngineer = document.querySelector('.popup_engineer'),
          closeModalBtn = document.querySelectorAll('.popup_close'),
          contactUsWrap = document.querySelector('.contact_us_wrap'),
          modalPopup = document.querySelector('.popup');
    

    closeModalBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            modalPopupEngineer.style.display = 'none';
            modalPopup.style.display = 'none';
            document.body.style.overflow = '';
        }); 
    });

    function showModal(modalTriger, modalBock) {
        modalTriger.addEventListener('click', (e) => {
        e.preventDefault();
        modalBock.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
        });
    }


    function closeModal(modalSelector) {
        modalSelector.addEventListener('click', (e) => {
            if (e.target === modalSelector) {
                modalSelector.style.display = 'none';
                document.body.style.overflow = ''; 
            }
        });
    }
        
    showModal(headerBtn, modalPopupEngineer);
    showModal(contactUsWrap, modalPopup);
    closeModal(modalPopup);
    closeModal(modalPopupEngineer);

};

export default modals;



