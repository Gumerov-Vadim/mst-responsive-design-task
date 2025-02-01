const data = {
    ICONS: {
        PROMO: "tick",
        BENEFIT: "benefit"
    },
    navbarList: [
        { href: "#", title: "consectetur" },
        { href: "#", title: "sit amet" },
        { href: "#", title: "eiusmod tempor" }
    ],
    promoList: [
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
    ],
    benefitsList: [
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
    ],
    footerNavList: [
        { href: "#", title: "consectetur" },
        { href: "#", title: "Adipiscing" },
        { href: "#", title: "tempor" }
    ],
    socialLinks: [
        { icon: "instagram", href: "#" },
        { icon: "tiktok", href: "#" },
        { icon: "linkedin", href: "#" },
        { icon: "facebook", href: "#" },
        { icon: "telegram", href: "#" },
        { icon: "youtube", href: "#" }
    ],
    IMAGES: {
        PRICE_PAGE: "images/data/2.png",
        BENEFITS_LEFT: "images/data/3.png",
        BENEFITS_RIGHT: "images/data/1.png",
        FORM_BG: "images/data/form-bg.png",
        FORM_PHOTO: "images/data/photo.png"
    },
    formFields: [
        {
            type: "text",
            name: "userName",
            placeholder: "Name",
            required: true
        },
        {
            type: "email",
            name: "userEmail",
            placeholder: "E-mail",
            required: true
        },
        {
            type: "checkbox",
            name: "privacyAccept",
            id: "privacy",
            label: "I accept Privacy Policy",
            required: true
        }
    ]
};
const testData1 = {
    ICONS: {
        PROMO: "tick",
        BENEFIT: "benefit"
    },
    navbarList: [
        { href: "#", title: "Путешествия" },
        { href: "#", title: "Отели" },
        { href: "#", title: "Авиабилеты" },
        { href: "#", title: "Экскурсии" }
    ],
    promoList: [
        {
            title: "Скидка 20% на авиабилеты",
            hasNumber: true,
            number: "20%"
        },
        {
            title: "Бесплатный завтрак в отеле",
            hasNumber: false
        },
        {
            title: "Экскурсии со скидкой 15%",
            hasNumber: true,
            number: "15%"
        }
    ],
    benefitsList: [
        {
            text: "Лучшие предложения по авиабилетам и отелям"
        },
        {
            text: "Эксклюзивные экскурсии и туры"
        },
        {
            text: "Круглосуточная поддержка клиентов"
        }
    ],
    footerNavList: [
        { href: "#", title: "О нас" },
        { href: "#", title: "Контакты" },
        { href: "#", title: "Политика конфиденциальности" }
    ],
    socialLinks: [
        { icon: "instagram", href: "#" },
        { icon: "tiktok", href: "#" },
        { icon: "linkedin", href: "#" },
        { icon: "facebook", href: "#" },
        { icon: "telegram", href: "#" },
        { icon: "youtube", href: "#" }
    ],
    IMAGES: {
        PRICE_PAGE: "images/data/2.png",
        BENEFITS_LEFT: "images/data/3.png",
        BENEFITS_RIGHT: "images/data/1.png",
        FORM_BG: "images/data/form-bg.png",
        FORM_PHOTO: "images/data/photo.png"
    },
    formFields: [
        {
            type: "text",
            name: "userName",
            placeholder: "Имя",
            required: true
        },
        {
            type: "email",
            name: "userEmail",
            placeholder: "Электронная почта",
            required: true
        },
        {
            type: "checkbox",
            name: "privacyAccept",
            id: "privacy",
            label: "Я принимаю Политику конфиденциальности",
            required: true
        }
    ]
};

const testData2 = {
    ICONS: { // Сохранены оригинальные иконки
        PROMO: "tick",
        BENEFIT: "benefit"
    },
    navbarList: [ // Увеличенное количество пунктов меню
        { href: "#", title: "Home" },
        { href: "#", title: "Investment" },
        { href: "#", title: "Portfolio" },
        { href: "#", title: "Analytics" },
        { href: "#", title: "Support" }
    ],
    promoList: [ // Уменьшено количество промо-блоков
        {
            title: "Start with $5 000 bonus offer",
            hasNumber: true,
            number: "$5 000"
        },
        {
            title: "First month 22% cashback",
            hasNumber: true,
            number: "22%"
        }
    ],
    benefitsList: [ // Увеличено количество преимуществ
        {
            text: "Real-time market analytics with predictive algorithms"
        },
        {
            text: "Multi-currency accounts with instant conversion"
        },
        {
            text: "Priority customer support with 24/7 availability"
        },
        {
            text: "Advanced risk management tools for investors"
        },
        {
            text: "Customizable portfolio templates for beginners"
        },
        {
            text: "Tax optimization solutions for international transactions"
        }
    ],
    footerNavList: [ // Упрощенная навигация в футере
        { href: "#", title: "Legal" },
        { href: "#", title: "FAQ" }
    ],
    socialLinks: [ // Оригинальные социальные ссылки без изменений
        { icon: "instagram", href: "#" },
        { icon: "tiktok", href: "#" },
        { icon: "linkedin", href: "#" },
        { icon: "facebook", href: "#" },
        { icon: "telegram", href: "#" },
        { icon: "youtube", href: "#" }
    ],
    IMAGES: { // Оригинальные изображения
        PRICE_PAGE: "images/data/2.png",
        BENEFITS_LEFT: "images/data/3.png",
        BENEFITS_RIGHT: "images/data/1.png",
        FORM_BG: "images/data/form-bg.png",
        FORM_PHOTO: "images/data/photo.png"
    },
    formFields: [ // Расширенная форма с дополнительными полями
        {
            type: "tel",
            name: "userPhone",
            placeholder: "Phone Number",
            required: false
        },
        {
            type: "text",
            name: "userCompany",
            placeholder: "Company Name",
            required: false
        },
        {
            type: "email",
            name: "userEmail",
            placeholder: "Business Email",
            required: true
        },
        {
            type: "checkbox",
            name: "newsletter",
            id: "news",
            label: "Subscribe to newsletter",
            required: false
        }
    ]
};
const testData3 = {
    ICONS: {
        PROMO: "tick",
        BENEFIT: "benefit"
    },
    navbarList: [
        { href: "#", title: "Курсы" },
        { href: "#", title: "Вебинары" },
        { href: "#", title: "Сертификаты" }
    ],
    promoList: [
        {
            title: "Скидка 30% на все курсы",
            hasNumber: true,
            number: "30%"
        },
        {
            title: "Бесплатные вебинары каждую неделю",
            hasNumber: false
        },
        {
            title: "Сертификаты по окончании курса",
            hasNumber: false
        }
    ],
    benefitsList: [
        {
            text: "Обучение у лучших преподавателей"
        },
        {
            text: "Гибкий график занятий"
        },
        {
            text: "Доступ к материалам курсов навсегда"
        }
    ],
    footerNavList: [
        { href: "#", title: "О нас" },
        { href: "#", title: "Контакты" },
        { href: "#", title: "Политика конфиденциальности" }
    ],
    socialLinks: [
        { icon: "instagram", href: "#" },
        { icon: "tiktok", href: "#" },
        { icon: "linkedin", href: "#" },
        { icon: "facebook", href: "#" },
        { icon: "telegram", href: "#" },
        { icon: "youtube", href: "#" }
    ],
    IMAGES: {
        PRICE_PAGE: "images/data/2.png",
        BENEFITS_LEFT: "images/data/3.png",
        BENEFITS_RIGHT: "images/data/1.png",
        FORM_BG: "images/data/form-bg.png",
        FORM_PHOTO: "images/data/photo.png"
    },
    formFields: [
        {
            type: "text",
            name: "userName",
            placeholder: "Имя",
            required: true
        },
        {
            type: "email",
            name: "userEmail",
            placeholder: "Электронная почта",
            required: true
        },
        {
            type: "checkbox",
            name: "privacyAccept",
            id: "privacy",
            label: "Я принимаю Политику конфиденциальности",
            required: true
        }
    ]
};
const testData4 = {
    ICONS: {
        PROMO: "tick",
        BENEFIT: "benefit"
    },
    navbarList: [
        { href: "#", title: "Тренировки" },
        { href: "#", title: "Питание" },
        { href: "#", title: "Планы" }
    ],
    promoList: [
        {
            title: "Скидка 25% на годовой абонемент",
            hasNumber: true,
            number: "25%"
        },
        {
            title: "Бесплатная консультация с тренером",
            hasNumber: false
        },
        {
            title: "Персональные планы питания",
            hasNumber: false
        }
    ],
    benefitsList: [
        {
            text: "Индивидуальный подход к каждому клиенту"
        },
        {
            text: "Современное оборудование"
        },
        {
            text: "Поддержка и мотивация от тренеров"
        }
    ],
    footerNavList: [
        { href: "#", title: "О нас" },
        { href: "#", title: "Контакты" },
        { href: "#", title: "Политика конфиденциальности" }
    ],
    socialLinks: [
        { icon: "instagram", href: "#" },
        { icon: "tiktok", href: "#" },
        { icon: "linkedin", href: "#" },
        { icon: "facebook", href: "#" },
        { icon: "telegram", href: "#" },
        { icon: "youtube", href: "#" }
    ],
    IMAGES: {
        PRICE_PAGE: "images/data/2.png",
        BENEFITS_LEFT: "images/data/3.png",
        BENEFITS_RIGHT: "images/data/1.png",
        FORM_BG: "images/data/form-bg.png",
        FORM_PHOTO: "images/data/photo.png"
    },
    formFields: [
        {
            type: "text",
            name: "userName",
            placeholder: "Имя",
            required: true
        },
        {
            type: "email",
            name: "userEmail",
            placeholder: "Электронная почта",
            required: true
        },
        {
            type: "checkbox",
            name: "privacyAccept",
            id: "privacy",
            label: "Я принимаю Политику конфиденциальности",
            required: true
        }
    ]
};
const testData6 = {
    ICONS: {
        PROMO: "tick",
        BENEFIT: "benefit"
    },
    navbarList: [
        { href: "#", title: "Гаджеты" },
        { href: "#", title: "Программное обеспечение" },
        { href: "#", title: "Обзоры" },
        { href: "#", title: "Новости" }
    ],
    promoList: [
        {
            title: "Скидка 15% на ноутбуки",
            hasNumber: true,
            number: "15%"
        },
        {
            title: "Бесплатная доставка на все товары",
            hasNumber: false
        },
        {
            title: "Гарантия 2 года на все устройства",
            hasNumber: false
        },
        {
            title: "Скидка 10% на аксессуары",
            hasNumber: true,
            number: "10%"
        }
    ],
    benefitsList: [
        {
            text: "Широкий ассортимент техники"
        },
        {
            text: "Высокое качество продукции"
        },
        {
            text: "Быстрая доставка по всему миру"
        },
        {
            text: "Квалифицированная поддержка клиентов"
        }
    ],
    footerNavList: [
        { href: "#", title: "О нас" },
        { href: "#", title: "Контакты" },
        { href: "#", title: "Политика конфиденциальности" },
        { href: "#", title: "Возврат товара" }
    ],
    socialLinks: [
        { icon: "instagram", href: "#" },
        { icon: "tiktok", href: "#" },
        { icon: "linkedin", href: "#" },
        { icon: "facebook", href: "#" },
        { icon: "telegram", href: "#" },
        { icon: "youtube", href: "#" }
    ],
    IMAGES: {
        PRICE_PAGE: "images/data/2.png",
        BENEFITS_LEFT: "images/data/3.png",
        BENEFITS_RIGHT: "images/data/1.png",
        FORM_BG: "images/data/form-bg.png",
        FORM_PHOTO: "images/data/photo.png"
    },
    formFields: [
        {
            type: "text",
            name: "userName",
            placeholder: "Ваше имя",
            required: true
        },
        {
            type: "email",
            name: "userEmail",
            placeholder: "Ваш email",
            required: true
        },
        {
            type: "tel",
            name: "userPhone",
            placeholder: "Ваш телефон",
            required: true
        },
        {
            type: "checkbox",
            name: "privacyAccept",
            id: "privacy",
            label: "Я принимаю Политику конфиденциальности",
            required: true
        }
    ]
};
const testData8 = {
    ICONS: {
        PROMO: "tick",
        BENEFIT: "benefit"
    },
    navbarList: [
        { href: "#", title: "Консультации" },
        { href: "#", title: "Лечение" },
        { href: "#", title: "Профилактика" },
        { href: "#", title: "Блог" }
    ],
    promoList: [
        {
            title: "Скидка 20% на первую консультацию",
            hasNumber: true,
            number: "20%"
        },
        {
            title: "Бесплатные вебинары о здоровье",
            hasNumber: false
        },
        {
            title: "Индивидуальные планы лечения",
            hasNumber: false
        }
    ],
    benefitsList: [
        {
            text: "Профессиональные врачи"
        },
        {
            text: "Индивидуальный подход к каждому пациенту"
        },
        {
            text: "Современные методы диагностики и лечения"
        },
        {
            text: "Поддержка и консультации 24/7"
        }
    ],
    footerNavList: [
        { href: "#", title: "О нас" },
        { href: "#", title: "Контакты" },
        { href: "#", title: "Политика конфиденциальности" },
        { href: "#", title: "Отзывы" }
    ],
    socialLinks: [
        { icon: "instagram", href: "#" },
        { icon: "tiktok", href: "#" },
        { icon: "linkedin", href: "#" },
        { icon: "facebook", href: "#" },
        { icon: "telegram", href: "#" },
        { icon: "youtube", href: "#" }
    ],
    IMAGES: {
        PRICE_PAGE: "images/data/2.png",
        BENEFITS_LEFT: "images/data/3.png",
        BENEFITS_RIGHT: "images/data/1.png",
        FORM_BG: "images/data/form-bg.png",
        FORM_PHOTO: "images/data/photo.png"
    },
    formFields: [
        {
            type: "text",
            name: "userName",
            placeholder: "Ваше имя",
            required: true
        },
        {
            type: "email",
            name: "userEmail",
            placeholder: "Ваш email",
            required: true
        },
        {
            type: "textarea",
            name: "userMessage",
            placeholder: "Ваше сообщение",
            required: true
        },
        {
            type: "checkbox",
            name: "privacyAccept",
            id: "privacy",
            label: "Я принимаю Политику конфиденциальности",
            required: true
        }
    ]
};
const testData10 = {
    ICONS: {
        PROMO: "tick",
        BENEFIT: "benefit"
    },
    navbarList: [
        { href: "#", title: "Рецепты" },
        { href: "#", title: "Ингредиенты" },
        { href: "#", title: "Оборудование" },
        { href: "#", title: "Блог" }
    ],
    promoList: [
        {
            title: "Скидка 15% на кулинарные курсы",
            hasNumber: true,
            number: "15%"
        },
        {
            title: "Бесплатные мастер-классы",
            hasNumber: false
        },
        {
            title: "Эксклюзивные рецепты каждый месяц",
            hasNumber: false
        }
    ],
    benefitsList: [
        {
            text: "Простые и вкусные рецепты"
        },
        {
            text: "Полезные советы по приготовлению"
        },
        {
            text: "Видеоуроки от профессиональных шеф-поваров"
        },
        {
            text: "Сообщество единомышленников"
        }
    ],
    footerNavList: [
        { href: "#", title: "О нас" },
        { href: "#", title: "Контакты" },
        { href: "#", title: "Политика конфиденциальности" },
        { href: "#", title: "FAQ" }
    ],
    socialLinks: [
        { icon: "instagram", href: "#" },
        { icon: "tiktok", href: "#" },
        { icon: "linkedin", href: "#" },
        { icon: "facebook", href: "#" },
        { icon: "telegram", href: "#" },
        { icon: "youtube", href: "#" }
    ],
    IMAGES: {
        PRICE_PAGE: "images/data/2.png",
        BENEFITS_LEFT: "images/data/3.png",
        BENEFITS_RIGHT: "images/data/1.png",
        FORM_BG: "images/data/form-bg.png",
        FORM_PHOTO: "images/data/photo.png"
    },
    formFields: [
        {
            type: "text",
            name: "userName",
            placeholder: "Ваше имя",
            required: true
        },
        {
            type: "email",
            name: "userEmail",
            placeholder: "Ваш email",
            required: true
        },
        {
            type: "text",
            name: "userCity",
            placeholder: "Ваш город",
            required: true
        },
        {
            type: "checkbox",
            name: "privacyAccept",
            id: "privacy",
            label: "Я принимаю Политику конфиденциальности",
            required: true
        }
    ]
};
const testData14 = {
    ICONS: {
        PROMO: "tick",
        BENEFIT: "benefit"
    },
    navbarList: [
        { href: "#", title: "Одежда" },
        { href: "#", title: "Обувь" },
        { href: "#", title: "Аксессуары" },
        { href: "#", title: "Новинки" },
        { href: "#", title: "Распродажа" },
        { href: "#", title: "Бренды" }
    ],
    promoList: [
        {
            title: "Скидка 30% на зимнюю коллекцию",
            hasNumber: true,
            number: "30%"
        },
        {
            title: "Бесплатная доставка на заказы от $100",
            hasNumber: false
        },
        {
            title: "Эксклюзивные предложения каждый месяц",
            hasNumber: false
        },
        {
            title: "Скидка 20% на новую коллекцию обуви",
            hasNumber: true,
            number: "20%"
        },
        {
            title: "Бесплатные аксессуары к каждому заказу",
            hasNumber: false
        }
    ],
    benefitsList: [
        {
            text: "Широкий ассортимент модной одежды и обуви"
        },
        {
            text: "Высокое качество материалов"
        },
        {
            text: "Современные дизайны от ведущих брендов"
        },
        {
            text: "Быстрая доставка по всему миру"
        },
        {
            text: "Гибкая политика возврата"
        }
    ],
    footerNavList: [
        { href: "#", title: "О нас" },
        { href: "#", title: "Контакты" },
        { href: "#", title: "Политика конфиденциальности" },
        { href: "#", title: "FAQ" },
        { href: "#", title: "Возврат товара" },
        { href: "#", title: "Партнеры" }
    ],
    socialLinks: [
        { icon: "instagram", href: "#" },
        { icon: "tiktok", href: "#" },
        { icon: "linkedin", href: "#" },
        { icon: "facebook", href: "#" },
        { icon: "telegram", href: "#" },
        { icon: "youtube", href: "#" }
    ],
    IMAGES: {
        PRICE_PAGE: "images/testData14/2.jpg",
        BENEFITS_LEFT: "images/testData14/3.jpg",
        BENEFITS_RIGHT: "images/testData14/1.jpg",
        FORM_BG: "images/testData14/form-bg.jpg",
        FORM_PHOTO: "images/testData14/photo.png"
    },
    formFields: [
        {
            type: "text",
            name: "userName",
            placeholder: "Ваше имя",
            required: true
        },
        {
            type: "email",
            name: "userEmail",
            placeholder: "Ваш email",
            required: true
        },
        {
            type: "tel",
            name: "userPhone",
            placeholder: "Ваш телефон",
            required: true
        },
        {
            type: "text",
            name: "userAddress",
            placeholder: "Ваш адрес",
            required: true
        },
        {
            type: "checkbox",
            name: "privacyAccept",
            id: "privacy",
            label: "Я принимаю Политику конфиденциальности",
            required: true
        }
    ]
};

const { ICONS, navbarList, promoList, benefitsList, footerNavList, socialLinks, IMAGES, formFields } = testData14;

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

function loadFormFields() {
    const formFieldsContainer = document.querySelector('.form-fields');
    
    formFieldsContainer.innerHTML = formFields.map(field => {
        if (field.type === 'checkbox') {
            return `
                <div class="checkbox-container">
                    <input type="${field.type}" 
                           name="${field.name}" 
                           id="${field.id}"
                           ${field.required ? 'required' : ''}>
                    <label for="${field.id}">${field.label}</label>
                </div>
            `;
        }
        
        return `
            <input type="${field.type}" 
                   name="${field.name}" 
                   placeholder="${field.placeholder}"
                   ${field.required ? 'required' : ''}>
        `;
    }).join('') + `
        <button type="submit" class="button submit-form">
            Оформить заказ
        </button>
    `;
}

// Инициализация загрузки контента
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadPromoList();
    loadBenefitsList();
    loadFooter();
    loadImages();
    loadFormFields();
});
