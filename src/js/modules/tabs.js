const tabs = (tabSelector, tabContentSelector, tabParrent, activeClass) => {
    

    const tab = document.querySelectorAll(tabSelector),
        tabContent = document.querySelectorAll(tabContentSelector),
        tabParent = document.querySelector(tabParrent);

    

    function hideTabs() {
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
        tabContent.forEach(item => {
            item.style.display = 'none';
        });
    }

    function showTabs(i = 0){
        tab[i].classList.add(activeClass);
        tabContent[i].style.display = 'block';
    }

    tabParent.addEventListener('click', (e) => {
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