const images = () => {
    
    const imagePopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');
    
    
    imagePopup.style.display = 'none';
    imagePopup.style.justifyContent = 'center';
    imagePopup.style.alignItems = 'center';
    imagePopup.append(bigImage);
    imagePopup.classList.add('popup');
    workSection.append(imagePopup);
        workSection.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target;

            if (target && target.classList.contains('preview')) {
                imagePopup.style.display = 'flex';
                const path = target.parentNode.getAttribute('href');
                bigImage.setAttribute('src', path);
                bigImage.style.height = (document.documentElement.clientHeight * 0.95) + 'px';
                bigImage.style.marginTop = '3rem';
                console.log(path);
            }

            if (target && target.matches('div.popup')) { //тут ми провыряэм якщо наж таргет модальне выкно то ми його ховаэм
                imagePopup.style.display = 'none';
            }
        }); 



};

export default images;