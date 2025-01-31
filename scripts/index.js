document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    const HEADER_BG_COLOR = '#222222';

    const debounce = (func, delay) => {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    const changeHeaderBackground = () => {
        if (window.scrollY > 0) {
            header.style.backgroundColor = HEADER_BG_COLOR;
        } else {
            header.style.backgroundColor = 'transparent';
        }
    };

    const debouncedChangeHeader = debounce(changeHeaderBackground, 100);
    
    changeHeaderBackground();
    
    window.addEventListener('scroll', debouncedChangeHeader);
});
