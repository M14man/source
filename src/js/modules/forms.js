import checkNumImputs from "./checkNumImputs";


const forms = (state) => {

    const forms = document.querySelectorAll('.form'),
        inputs = document.querySelectorAll('input');


    checkNumImputs('input[name="user_phone"]');

    
    const message = {
        loading: 'Загрузка...',
        success: "Спасибо. Мы скоро с вами свяжемя",
        failure: 'Что то пошло не так'        
    };


    const postData = async (url, data) => {
        
        document.querySelector('.status').textContent = message.loading;

        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();

        
    };
    
    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.src = message.loading;
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // console.log(json);
            postData('http://localhost:3000/requests', json).then(data => {
                console.log(data);
                statusMessage.textContent = message.success;
            })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    inputs.forEach(item => {
                        item.value = '';
                    });
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                });
        }); 
    });


};


export default forms;