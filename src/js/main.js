import './slider';
import modals from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms'

window.addEventListener('DOMContentLoaded', () => {

    modals();
    tabs('.glazing_block', '.glazing_content', '.glazing_slider', 'active');
    tabs('.no_click', '.decoration_content > div > div', '.decoration_slider', 'after_click');
    forms();
    

});


