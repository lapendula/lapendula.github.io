console.log(`░░░░░░░░░░░░░░░░░░░░▄▄▄▄▄▄▄░░░░░░░
░░░░░░░░▄▄▄░░░░░░▄███████████▄░░░░
░░░░▄█████████▄▄███████████████▄░░
░░██████████████████████▀░░░░▀▀▀█▄
░▀▀░░░▄▄██████████████████▄░░░░░░░
░░░▄████████████████████████▄░░░░░
░░▄████▀▀██████▀████░░▀██████▄░░░░
░▄███▀░░██████░░░███▄░░░░█████░░░░
░██▀░░░██████░░░░████░░░░░████░░░░
░█▀░░░░█████░░░░░█████░░░░░██▀░░░░
░▀░░░░░█████░░░░░█████░░░░░██░░░░░
░░░░░░░░███░░░░░░█████░░░░░▀░░░░░░
░░░░░░░░░██░░░░░░█████░░░░░░░░░░░░
░░░░░░░░░░▀█░░░░░█████░░░░░░░░░░░░
░░░░░░░░░░░░░░░░██████░░░░░░░░░░░░
░░░░░░░░░░░░░░░▄██████░░░░░░░░░░░░
░░░░░░░░░▄▄▄▄▄▄███████▄▄░░░░░░░░░░
▄▄▄██████████████████████▄▄▄░░░░░░
▀█████████████████████████▀▀░░░░░░ `)

console.log('SOS COMPUTER ACADEMY')


let preload = document.querySelector('.preloader');
let preloadTime = 1000;

window.addEventListener('load', function () {
    if (sessionStorage.getItem('preload')) {
        preloadTime = 500
    }
    setTimeout(function () {
        preload.style.opacity = 0;
        preload.style.zIndex = -1;
        document.body.classList.remove('preloader_body');
    }, preloadTime);
    setTimeout(function () {
        preload.remove(); //оставляет артефактный скроллбар по ширине
        sessionStorage.setItem('preload', true);
    }, preloadTime + 5000);

})


let callBtn = Array.from(document.querySelectorAll('.call'));
let modal = document.querySelector('.modal_form')
callBtn.forEach((btn) => btn.addEventListener('click', function () {
    modal.style.display = "flex";
}))
modal.addEventListener('click', function (e) {
    if (e.target === this) {
        modal.style.display = "none";
    }
})


let cnv = document.querySelector('#cnv');
let ctx = cnv.getContext('2d');
let requestID;
cnv.width = document.documentElement.offsetWidth;


let waveHeight = cnv.height;
let speed = 1;
let offset = 15;
let waves = [];
let waves2 = [];


for (let i = 0; i < 55; i++) {
    let wave = {
        height: cnv.height - 15 * Math.random() * 7,
        move: speed * Math.random(),
    }
    waves.push(wave)
}
for (let i = 0; i < 55; i++) {
    let wave = {
        height: cnv.height - 15 * Math.random() * 5,
        move: speed * Math.random(),
    }
    waves2.push(wave)
}

function draw() {
    ctx.fillStyle = 'yellow';
    for (let i = 0; i < waves.length; i++) {
        ctx.beginPath();
        ctx.moveTo(i * 50, cnv.height);
        ctx.lineTo(i * 50, waves[i].height);
        ctx.arc(i * 50 + 25, waves[i].height, 25, Math.PI, 0, false);
        ctx.lineTo(i * 50 + 50, cnv.height);
        ctx.fill();
    }
    ctx.fillStyle = '#232438';
    for (let i = 0; i < waves2.length; i++) {
        ctx.beginPath();
        ctx.moveTo(i * 50 - 25, cnv.height);
        ctx.lineTo(i * 50 - 25, waves2[i].height);
        ctx.arc(i * 50, waves2[i].height, 25, Math.PI, 0, false);
        ctx.lineTo(i * 50 + 25, cnv.height);
        ctx.fill();
    }
}

function clear() {
    ctx.clearRect(0, 0, cnv.width, cnv.height)
}

function render() {
    for (let i = 0; i < waves.length; i++) {
        waves[i].height -= waves[i].move
        if (waves[i].height <= cnv.height * 0.7) {
            waves[i].move = -speed * Math.random()
        } else if (waves[i].height >= cnv.height * 0.9) {
            waves[i].move = speed * Math.random()
        }
    }
    for (let i = 0; i < waves2.length; i++) {
        waves2[i].height -= waves2[i].move
        if (waves2[i].height <= cnv.height * 0.85) {
            waves2[i].move = -speed * Math.random()
        } else if (waves2[i].height >= cnv.height) {
            waves2[i].move = speed * Math.random()
        }
    }
}

function animation() {
    requestID = requestAnimationFrame(animation);
    clear();
    draw();
    render();
}
requestID = requestAnimationFrame(animation);

window.addEventListener('resize', function () {
    cnv.width = document.documentElement.offsetWidth;
})

// contacts canvas

let cnv2 = document.querySelector('#cnv2');
let ctx2 = cnv2.getContext('2d');
cnv2.width = document.documentElement.offsetWidth / 4;

for (let i = 0; i < 72; i++) {
    for (let j = 0; j < 14; j++) {
        if (j == 0 && [6, 7, 27, 28].includes(i)) {
            continue;
        }
        ctx2.fillStyle = '#666'
        ctx2.beginPath();
        ctx2.moveTo(5 + j * 15, 5 + i * 15);
        ctx2.arc(5 + j * 15, 5 + i * 15, 1, 0, Math.PI * 2, false);
        ctx2.fill();
    }
}


let catalog_info = {
    mature:{
        design: {
            title: 'Дизайн',
            subtitle: ['Растровая и векторная графика', 'Веб-дизайн', '3d Моделирование'],
            text: [
                'Этот курс основа для многих направлений. В ходе обучения мы рассмотрим пакет программ Adobe, в том числе Photoshop, Illustrator, InDezign, AfterEffects, PremierePro и т.д. Этой связки вам хватит для старта в различных профессиях. В конце курса вы оформите портфолио, которое будет ключем к будущей должности.',
    
                'Разобравшись с базовой графикой можно приступать к освоению веб-дизайна. Мы предлагаем несколько направлений: дизайн сайтов, создание приложений, брендинг и упаковка. Все они популярны сегодня, выбирайте на свой вкус. Сильное портфолио укрепит позиции, а личный педагог разберет сложные моменты.',
    
                'Крупное направление, в котором рассмотрены: дизайн интерьеров, ландшафтный дизайн, создание деталей для промышленности, разработка игровых миров и персонажей. Вы изучите: 3dsMax, 4dCinema, AutoCAD, Revit, Photoshop и многое другое. Подкрепите свои знания сильным портфолио.',
            ],
            details: ['Свой преподаватель', '1,5 - 2,5 месяца', '2 - 3 раза в неделю', ''],
            programm: ['graf.pdf','web_des.pdf','3d.pdf'],
        },
        progr: {
            title: 'Программирование',
            subtitle: ['Front-end', 'Python', 'Android development'],
            text: [
                'Курс включает в себя языки html, css, java-script. Вы научитесь с нуля создавать каждый элемент сайта. Мощный блок java-script позволит воплотить современные анимации и серверное взаимодействие. Адаптивный и кроссбраузерный сайт, который хорошо ранжируется в поисковой выдаче — такой результат мы ждем от вас!',
    
                'Python — самый быстрорастущий язык за последние несколько лет. Мы научимся работать с серверной частью, рассмотрим верстку сайтов средствами python, а также коснемся работы с оборудованием на предприятиях. Это хороший выбор как для новичка, так и для опытного разработчика.',
    
                'Разработка мобильных приложений это огромный растущий сегмент рынка. Все рекламодатели переключаются на мобильные устройства. Мы научим вас актуальным тенденциям в верстке приложений, настроим анимации и серверную часть. Изучим языки java и kotlin, подготовим и выложим в маркет свое приложение.',
            ],
            details:['Свой преподаватель', '1,5 - 4 месяца', '2 - 3 раза в неделю', ''],
            programm: ['front.pdf','python.pdf','android.pdf'],
        },
        market: {
            title: 'Маркетинг',
            subtitle: ['SEO и SMM', 'Финансовая грамотность'],
            text: [
                'В данном курсе мы готовим  хороших маркетологов для бизнеса. Начнём курс с освоения Photoshop, а дальше займемся настройкой рекламы в соц сетях и браузерах.Уделим большое время оптимизации кода сайтов, повысим скорость загрузки, поднимемся в поисковой выдаче.',
    
                'Этот курс тесно связан с маркетингом. Мы разберем несколько разделов открытия собственного дела, работа с командой, рекламные стратегии. Изучим теорию в экономике, научимся прогнозировать и оценивать риски и прибыль. Затронем работу с фондовыми рынками, акции, облигации банковское дело.',
            ],
            details: ['Свой преподаватель', '1 - 2 месяца', '2 - 3 раза в неделю', ''],
            programm: ['market.pdf','market.pdf'],
        },
    },
    child:{
        design: {
            title: 'Дизайн',
            subtitle: ['Растровая и векторная графика', 'Веб-дизайн', '3d Моделирование'],
            text: [
                'Этот курс основа для многих направлений. В ходе обучения мы рассмотрим пакет программ Adobe, в том числе Photoshop, Illustrator, InDezign, AfterEffects, PremierePro и т.д. Этой связки вам хватит для старта в различных профессиях. В конце курса вы оформите портфолио, которое будет ключем к будущей должности.',
    
                'Разобравшись с базовой графикой можно приступать к освоению веб-дизайна. Мы предлагаем несколько направлений: дизайн сайтов, создание приложений, брендинг и упаковка. Все они популярны сегодня, выбирайте на свой вкус. Сильное портфолио укрепит позиции, а личный педагог разберет сложные моменты.',
    
                'Крупное направление, в котором рассмотрены: дизайн интерьеров, ландшафтный дизайн, создание деталей для промышленности, разработка игровых миров и персонажей. Вы изучите: 3dsMax, 4dCinema, AutoCAD, Revit, Photoshop и многое другое. Подкрепите свои знания сильным портфолио.',
            ],
            details: ['Малая группа', '1,5 года', '1 - 3 раза в неделю', ''],
            programm: ['graf.pdf','web_des.pdf','3d.pdf'],
        },
        progr: {
            title: 'Программирование',
            subtitle: ['Front-end', 'Python', 'Android development'],
            text: [
                'Курс включает в себя языки html, css, java-script. Вы научитесь с нуля создавать каждый элемент сайта. Мощный блок java-script позволит воплотить современные анимации и серверное взаимодействие. Адаптивный и кроссбраузерный сайт, который хорошо ранжируется в поисковой выдаче — такой результат мы ждем от вас!',
    
                'Python — самый быстрорастущий язык за последние несколько лет. Мы научимся работать с серверной частью, рассмотрим верстку сайтов средствами python, а также коснемся работы с оборудованием на предприятиях. Это хороший выбор как для новичка, так и для опытного разработчика.',
    
                'Разработка мобильных приложений это огромный растущий сегмент рынка. Все рекламодатели переключаются на мобильные устройства. Мы научим вас актуальным тенденциям в верстке приложений, настроим анимации и серверную часть. Изучим языки java и kotlin, подготовим и выложим в маркет свое приложение.',
            ],
            details: ['Малая группа', '1,5 года', '1 - 3 раза в неделю', ''],
            programm: ['front.pdf','python.pdf','android.pdf'],
        },
        market: {
            title: 'Администрирование',
            subtitle: ['Базовый курс для детей', 'Базовый курс для взрослых'],
            text: [
                'Этот курс включает общешкольную подготовку для детей. В нём рассмотрены документооборот, электронные таблицы, графики и диаграммы, презентации, работа с сетью и интернетом, безопасность и настройка компьютера. Ребёнок получит все необходимые знания для школы, университета и обычной офисной работы.',
    
                'Курс администрирования для взрослых подойдёт для офисной работы, также есть сборка для пенсионеров. В ходе обучения мы рассматриваем документооборот, электронные таблицы, графики и диаграммы, презентации, работу с сетью и интернетом, безопасность и настройку компьютера.'
            ],
            details:  ['Малая группа', '1,5 года', '1 - 3 раза в неделю', ''],
            programm: ['base.pdf','base.pdf'],
        },
    },
    
};


let catalog = document.querySelector(".progs_catalog_body");


if (catalog) {
    let catalog_title = catalog.querySelector('.catalog_course_title');
    let catalog_subtitle = catalog.querySelector('.catalog_course_subtitle');
    let catalog_text = catalog.querySelector('.catalog_course_text');
    let catalog_page_list = catalog.querySelectorAll('.catalog_page_button');
    let catalog_detail_programm = catalog.querySelector('.catalog_course_programm');
    let catalog_detail_list = catalog.querySelectorAll('.catalog_course_detail');
    let page = 0;
    let way = 'progr'
    let age = 'mature'
    catalog_page_list.forEach(function (btn) {
        btn.addEventListener('click', function (elem) {

            catalog_text.style.opacity = '0';
            catalog_title.style.opacity = '0';
            catalog_subtitle.style.opacity = '0';
            catalog_detail_list.forEach(function (e) {
                e.style.opacity = '0';
            });

            setTimeout(() => {
                catalog_text.style.opacity = '1';
                catalog_title.style.opacity = '1';
                catalog_subtitle.style.opacity = '1';
                catalog_detail_list.forEach(function (e) {
                    e.style.opacity = '1';
                });



                page = Number(String(this.id).slice(4));
                catalog_page_list.forEach(function (e) {
                    e.style.background = 'var(--second-blue)';
                });
                this.style.background = "var(--main-blue)";
                catalog_subtitle.innerText = catalog_info[age][way]["subtitle"][page - 1]
                catalog_text.innerText = catalog_info[age][way]['text'][page - 1]
                catalog_detail_programm.href = '/static/programm/'+catalog_info[age][way]['programm'][page - 1]
                page++;
            }, 300);
        })
    })

    let way_label = document.querySelectorAll(".catalog_label_way")
    way_label.forEach(function (label) {
        label.addEventListener('click', wayFunc = function (elem) {

            catalog_text.style.opacity = '0';
            catalog_title.style.opacity = '0';
            catalog_subtitle.style.opacity = '0';
            catalog_detail_list.forEach(function (e) {
                e.style.opacity = '0';
            });

            setTimeout(() => {
                catalog_text.style.opacity = '1';
                catalog_title.style.opacity = '1';
                catalog_subtitle.style.opacity = '1';
                catalog_detail_list.forEach(function (e) {
                    e.style.opacity = '1';
                });


                page = 0;
                way_label.forEach(function (e) {
                    e.style.background = '#fff';
                })
                this.style.background = "var(--main-gradient)";
                catalog_page_list.forEach(function (e) {
                    e.style.background = 'var(--second-blue)';
                });
                catalog_page_list[0].style.background = "var(--main-blue)";
                way = this.id
                if (way == 'market') {
                    catalog_page_list[2].style.display = 'none'
                } else {
                    catalog_page_list[2].style.display = ''
                }
                catalog_title.innerText = catalog_info[age][way]["title"]
                catalog_subtitle.innerText = catalog_info[age][way]["subtitle"][page]
                catalog_text.innerText = catalog_info[age][way]['text'][page]
                catalog_detail_programm.href = '/static/programm/'+catalog_info[age][way]['programm'][page]
                let detail = 0;
                catalog_detail_list.forEach(function (e) {
                    e.lastChild.textContent = catalog_info[age][way]['details'][detail];
                    detail++;
                })
            }, 300);

        })
    })
    let age_label = document.querySelectorAll(".catalog_label_age")
    age_label.forEach(function (label) {
        label.addEventListener('click', ageFunc = function (elem) {

            catalog_text.style.opacity = '0';
            catalog_title.style.opacity = '0';
            catalog_subtitle.style.opacity = '0';
            catalog_detail_list.forEach(function (e) {
                e.style.opacity = '0';
            });

            setTimeout(() => {
                catalog_text.style.opacity = '1';
                catalog_title.style.opacity = '1';
                catalog_subtitle.style.opacity = '1';
                catalog_detail_list.forEach(function (e) {
                    e.style.opacity = '1';
                });


                page = 0;
                age = this.id;
                let lastWay = document.querySelectorAll('.catalog_label_way')[2];
                if(age == 'child'){
                    lastWay.querySelector('h3').innerHTML = 'Базовый'
                }
                else{
                    lastWay.querySelector('h3').innerHTML = 'Маркетинг'
                }
                let detail = 0;
                age_label.forEach(function (e) {
                    e.style.background = '#fff';
                    e.style.height = '8%';
                    e.style.top = '-8%';
                    e.style.color = 'var(--second-blue)';
                    e.style.textDecoration = 'none'
                })
                this.style.background = 'var(--main-gradient)'
                this.style.color = '#fff';
                this.style.textDecoration = 'underline'
                this.style.height = '12%';
                this.style.top = '-12%';
                catalog_page_list.forEach(function (e) {
                    e.style.background = 'var(--second-blue)';
                });
                catalog_page_list[0].style.background = "var(--main-blue)";
                catalog_title.innerText = catalog_info[age][way]["title"]
                catalog_subtitle.innerText = catalog_info[age][way]["subtitle"][page]
                catalog_text.innerText = catalog_info[age][way]['text'][page]
                catalog_detail_programm.href = '/static/programm/'+catalog_info[age][way]['programm'][page]
                catalog_detail_list.forEach(function (e) {
                    e.lastChild.textContent = catalog_info[age][way]['details'][detail];
                    detail++;
                })
            }, 300);
        })
    })
    ageFunc = ageFunc.bind(age_label[0], age_label[0]);
    wayFunc = wayFunc.bind(way_label[0], way_label[0]);
    ageFunc();
    wayFunc();
}


let header = document.querySelector('header')

let plusList = document.querySelectorAll('.particles .plus')
let blopList = document.querySelectorAll('.particles .blop')
let laptopGirl = document.querySelector('.laptop_girl')


window.addEventListener('mousemove', function (e) {
    if (e.clientX < document.body.clientWidth / 2) {
        if (e.clientY < header.clientHeight / 2) {
            plusList.forEach(function (elem) {
                let translateList = getComputedStyle(elem).transform.slice(7, -1).split(',')
                translateList[4] = (document.body.clientWidth / 2 - e.clientX) / 30
                translateList[5] = (header.clientHeight / 2 - e.clientY) / 10

                elem.style.transform = `matrix(${translateList.join(',')})`
            })
            blopList.forEach(function (elem) {
                elem.style.transform = `translate(${(document.body.clientWidth/2 - e.clientX)/80}px,${(header.clientHeight/2 - e.clientY)/30}px)`
            })
            laptopGirl.style.transform = `translate(${(document.body.clientWidth/2 - e.clientX)/120}px,${(header.clientHeight/2 - e.clientY)/50}px)`
        } else {
            plusList.forEach(function (elem) {
                let translateList = getComputedStyle(elem).transform.slice(7, -1).split(',')
                translateList[4] = (document.body.clientWidth / 2 - e.clientX) / 30
                translateList[5] = -(e.clientY - header.clientHeight / 2) / 10
                elem.style.transform = `matrix(${translateList.join(',')})`
            })
            blopList.forEach(function (elem) {
                elem.style.transform = `translate(${(document.body.clientWidth/2 - e.clientX)/80}px,${-(e.clientY - header.clientHeight/2)/30}px)`
            })
            laptopGirl.style.transform = `translate(${(document.body.clientWidth/2 - e.clientX)/120}px,${-(e.clientY - header.clientHeight/2)/50}px)`
        }
    } else {
        if (e.clientY < header.clientHeight / 2) {
            plusList.forEach(function (elem) {
                let translateList = getComputedStyle(elem).transform.slice(7, -1).split(',')
                translateList[4] = -(e.clientX - document.body.clientWidth / 2) / 30
                translateList[5] = (header.clientHeight / 2 - e.clientY) / 10
                elem.style.transform = `matrix(${translateList.join(',')})`
            })
            blopList.forEach(function (elem) {
                elem.style.transform = `translate(${-(e.clientX - document.body.clientWidth/2)/80}px,${(header.clientHeight/2 - e.clientY)/30}px)`
            })
            laptopGirl.style.transform = `translate(${-(e.clientX - document.body.clientWidth/2)/120}px,${(header.clientHeight/2 - e.clientY)/50}px)`
        } else {
            plusList.forEach(function (elem) {
                let translateList = getComputedStyle(elem).transform.slice(7, -1).split(',')
                translateList[4] = -(e.clientX - document.body.clientWidth / 2) / 30
                translateList[5] = -(e.clientY - header.clientHeight / 2) / 10
                elem.style.transform = `matrix(${translateList.join(',')})`
            })
            blopList.forEach(function (elem) {
                elem.style.transform = `translate(${-(e.clientX - document.body.clientWidth/2)/80}px,${-(e.clientY - header.clientHeight/2)/30}px)`
            })
            laptopGirl.style.transform = `translate(${-(e.clientX - document.body.clientWidth/2)/120}px,${-(e.clientY - header.clientHeight/2)/50}px)`
        }
    }
})


let faqCards = document.querySelectorAll('.faq_card');
faqCards.forEach(function (e) {
    e.addEventListener('click', function () {
        if (this.dataset.open === 'true') {
            // this.querySelector('.faq_card_body').style.display = 'none';
            // this.querySelector('.faq_card_body').style.transform = 'scaleY(0)';

            this.dataset.open = 'false';
            // console.log(Boolean(this.dataset.open))
        } else {
            // this.querySelector('.faq_card_body').style.display = 'block';
            // this.querySelector('.faq_card_body').style.transform = 'scaleY(1)';
            this.dataset.open = 'true';
        }
    })
})



