function setActiveNavigation(scrollPosition){
  const home = document.querySelector("#home")
  const aboutMe = document.querySelector("#about_me")
  const skills = document.querySelector("#skills")
  const portfolio = document.querySelector("#portfolio")
  const contacts = document.querySelector("#contacts")
  if(scrollPosition >= home.offsetTop){
    document.querySelector("#home_link").classList.add("active_link")
  }
  // if()
} 

document.querySelector("#home_link").addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0 });
});

window.addEventListener("scroll", (event) => {
  const scrollPosition = window.scrollY;
});

const internationalization = {
  ru: {
    nav_link: ["Дом", "Обо мне", "Навыки", "Портфолио", "Контакты"],
    // main_section_name: ["Денис <br /> Новик"],
    // main_section_profession: ["UX | UI дизайнер <br />24 года, Минск"],
    // language: ["РУ", "АНГ"],
    // section_header: ["Обо мне", "Навыки", "Портфолио", "Контакты"],
    // about_me_text: [
    //   Привет, я Денис — UX/UI дизайнер из Минска. <br />
    //   Интересуюсь дизайном и всем, что с ним связано.,
    //   Учусь на курсах «Веб и мобильный дизайн <br />
    //   интерфейсы» в IT-Академии.,
    //   Готов реализовать отличные проекты <br />
    //   с замечательными людьми.,
    // ],
    // skills_subheader: ["Я работаю в таких программах как"],
    // contacts_text: [
    //   Хочешь узнать больше или пообщаться? <br />
    //   Добро пожаловать!,
    // ],
    // contacts_button: ["Отправить сообщение"],
    // footer_text: [Переходи на <br />LinkedIn, Instagram, Behance, Dribble],
  },
  eng: {
    nav_link: ["Home", "About me", "Skills", "Portfolio", "Contacts"],
  //   main_section_name: ["Denis <br /> Novik"],
  //   main_section_profession: ["UX | UI designer <br /> 24 years old, Minsk"],
  //   language: ["RU", "ENG"],
  //   section_header: ["About me", "Skills", "Portfolio", "Contacts"],
  //   about_me_text: [
  //     Hi, I'm Denis – UX/UI designer from Minsk. <br />
  //     I'm interested in design and everything connected with it.,
  //     I'm studying at courses "Web and mobile design <br /> 
  //     interfaces" in IT-Academy.,
  //     Ready to implement excellent projects <br />
  //     with wonderful people.,
  //   ],
  //   skills_subheader: ["I work in such programs as"],
  //   contacts_text: [
  //     Want to know more or just chat? <br />
  //     You are welcome!,
  //   ],
  //   contacts_button: ["Send message"],
  //   footer_text: [Like me on <br />LinkedIn, Instagram, Behance, Dribble],
  },
};

function changeLanguage(lang) {
  for (let selector in internationalization[lang]) {
    document.querySelectorAll(`.${selector}`).forEach((item, index) => {
      item.innerHTML = internationalization[lang][selector][index];
    });
  }
}

document.querySelector(".ru").addEventListener("click", (event) => {
  event.preventDefault()
  changeLanguage("ru")
  event.target.classList.add("language_active")
  document.querySelector(".eng").classList.remove("language_active")
})

document.querySelector(".eng").addEventListener("click", (event) => {
  event.preventDefault()
  changeLanguage("eng")
  event.target.classList.add("language_active")
  document.querySelector(".ru").classList.remove("language_active")
})

document.querySelectorAll(".nav_link").forEach(item => {
  item.addEventListener("click", (event) => {
    document.querySelector(".nav_link_active").classList.remove("nav_link_active")
    event.target.classList.add("nav_link_active")
  })
})

document.querySelector(".lines").addEventListener("click", (event) => {
  event.target.closest(".f").classList.toggle("f_active");
});

window.addEventListener("scroll", (event) =>{
  let anchors = ["home", "about_me", "skills", "portfolio", "contacts",]
  for( const anchor of anchors)
})