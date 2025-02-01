// Константы для иконок
const ICONS = {
    PROMO: "tick",
    BENEFIT: "benefit"
};

// Данные для навигационного меню
const navbarList = [
    { href: "#", title: "consectetur" },
    { href: "#", title: "sit amet" },
    { href: "#", title: "eiusmod tempor" }
];

// Данные для промо-списка
const promoList = [
    {
        title: "do $10 000 consectetur elit",
        hasNumber: true,
        number: "$10 000"
    },
    {
        title: "30% sed do eiusmod tempor",
        hasNumber: true,
        number: "30%"
    },
    {
        title: "do 17% adipiscing elit sed do",
        hasNumber: true,
        number: "17%"
    }
];

// Данные для списка преимуществ
const benefitsList = [
    {
        text: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
        text: "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor"
    }
];

// Данные для футера
const footerNavList = [
    { href: "#", title: "consectetur" },
    { href: "#", title: "Adipiscing" },
    { href: "#", title: "tempor" }
];

const socialLinks = [
    { icon: "instagram", href: "#" },
    { icon: "tiktok", href: "#" },
    { icon: "linkedin", href: "#" },
    { icon: "facebook", href: "#" },
    { icon: "telegram", href: "#" },
    { icon: "youtube", href: "#" }
];

const IMAGES = {
    PRICE_PAGE: "images/2.png",
    BENEFITS_LEFT: "images/3.png",
    BENEFITS_RIGHT: "images/1.png",
    FORM_BG: "images/form-bg.png",
    FORM_PHOTO: "images/photo.png"
};

// Функция для загрузки навигационного меню
function loadNavbar() {
    const navList = document.querySelector('.topnav ul');
    navList.innerHTML = navbarList.map(item => 
        `<li><a class="link_animation" href="${item.href}">${item.title}</a></li>`
    ).join('');
}

// Функция для загрузки промо-списка
function loadPromoList() {
    const promoListContainer = document.querySelector('.promo-list');
    promoListContainer.innerHTML = promoList.map(item => `
        <div class="promo-list__item">
            <div class="promo-list__item-col">
                <div class="promo-list__item-icon"></div>
            </div>
            <div class="promo-list__item-col">
                <p class="promo-list__item-title">${item.hasNumber ? item.title.replace(item.number, `<span class="number prata">${item.number}</span>`) : item.title}</p>
            </div>
        </div>
    `).join('');
}

// Функция для загрузки списка преимуществ
function loadBenefitsList() {
    const benefitsListContainer = document.querySelector('.benefits-list');
    benefitsListContainer.innerHTML = benefitsList.map(item => `
        <li class="benefits-list__item">
            <div class="benefits-list__item-icon"></div>
            <p class="benefits-list__item-benefit">${item.text}</p>
        </li>
    `).join('');
}

// Функция для загрузки футера
function loadFooter() {
    const footerNav = document.querySelector('.footer-top-list');
    const socialsContainer = document.querySelector('.footer-socials');

    footerNav.innerHTML = footerNavList.map(item => `
        <li class="footer-top-list__item">
            <a class="footer-top-list__link scroll-to link_animation" href="${item.href}">${item.title}</a>
        </li>
    `).join('');

    socialsContainer.innerHTML = socialLinks.map(item => `
        <a href="${item.href}" class="footer-socials__link footer-socials__link_${item.icon}" target="_blank"></a>
    `).join('');
}

function loadImages() {
    // Загрузка обычных изображений
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        const src = IMAGES[img.dataset.src];
        if (src) {
            img.src = src;
        }
    });

    // Загрузка фоновых изображений для псевдоэлементов
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .benefits-page::before {
            background-image: url(${IMAGES.BENEFITS_LEFT});
        }
        .benefits-page::after {
            background-image: url(${IMAGES.BENEFITS_RIGHT});
        }
        .form-page > .content::before {
            background-image: url(${IMAGES.FORM_BG});
        }
        .form-page > .content::after {
            background-image: url(${IMAGES.FORM_PHOTO});
        }
    `;
    document.head.appendChild(styleSheet);
}

// Инициализация загрузки контента
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadPromoList();
    loadBenefitsList();
    loadFooter();
    loadImages();
});
