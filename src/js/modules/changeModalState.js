import checkNumImputs from "./checkNumImputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');
        
    
    checkNumImputs('#width');
    checkNumImputs('#height');    
    
    // windowForm.forEach((item, i) => [
    //     item.addEventListener('click', () => {
    //         state.form = i;
    //         console.log(state);
    //     })
    // ]);

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case "SPAN":
                        state[prop] = i;
                        console.log(item.nodeName);
                        break;
                    case "INPUT":
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = 'Теплое';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        console.log(item.nodeName);
                        break;
                    case "SELECT":
                        state[prop] = item.value;
                        console.log(item.nodeName);
                        break;
                        
                }

                console.log(state);
            });
        });
    }



    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
          
};

export default changeModalState;
