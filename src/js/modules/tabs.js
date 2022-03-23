const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    

    const tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector),
        header = document.querySelector(headerSelector);

    

    function hideTabs() {
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
        content.forEach(item => {
            item.style.display = 'none';
        });
    }

    function showTabs(i = 0){
        tab[i].classList.add(activeClass);
        content[i].style.display = display;
    }

    header.addEventListener('click', (e) => {
        const target = e.target;
        // console.log(target);
        if (target && (target.classList.contains(tabSelector.replace(/\./, '')) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
            tab.forEach((item, i) => {
                if (item === target || item === target.parentNode) {
                    hideTabs();
                    showTabs(i);
                }
            });
        }
    });

    hideTabs();
    showTabs();













};

export default tabs;