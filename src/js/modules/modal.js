const modals = () => {
    

    function bindModal(trigerSelector, modalSelector, closeSelector) {
        
        const triger = document.querySelectorAll(trigerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelectorAll(closeSelector); 
              
        
        triger.forEach(item => {
           item.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                // document.body.classList.add('modal-open'); // цей клас є в бібліотеці бустрап це для неможливості прокрутки               
            }); 
        });

        close.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = ''; 
                    // document.body.classList.remove('modal-open');
                }
            });    
        });
    }

    function showModalByTime (modalSelector, time) {
        setTimeout(()=> {
            document.querySelector(modalSelector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }
        
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    bindModal('.phone_link', '.popup', '.popup_close');
    // showModalByTime('.popup', 5000);

    

    

};

export default modals;



