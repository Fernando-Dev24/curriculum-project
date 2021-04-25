const init = () => {
   const techLinks = document.getElementsByClassName('tech-link');
   const techInfo = document.getElementById('tech-info');
   const techClose = document.getElementById('tech-close');
   const techName = document.getElementById('tech-name');
   const techParagraph = document.getElementById('tech-paragraph');

   const htmlTag = document.getElementsByTagName('html');
   const langButtons = document.querySelectorAll('.lang-button');

   /* Avoid default event to more information links unless the website link */
   for(let i = 0; i < techLinks.length; i++){
      techLinks[i].addEventListener('click', (e) =>{
         e.preventDefault();
      });
   };

   langButtons[0].addEventListener('click', () => {
      langButtons[1].classList.remove('active');
      langButtons[0].classList.add('active');
   });

   langButtons[1].addEventListener('click', () => {
      langButtons[0].classList.remove('active');
      langButtons[1].classList.add('active');
   });

   /* Making functions for each technologie */
   const infoHTML=()=>{
      techName.textContent = techLinks[0].textContent;

      if(langButtons[0].classList.contains('active')) {
         techParagraph.textContent = 'I learnt HTML on its five version, so I’m new about it but, currently I consider myself on a intermediate level. I study it with some guides on Centro ¡Supérate! Merlet at La Libertad. My first contact with it was on 2019. Later that year, I realized that I am going to fall in love with web development. It’s such a pleasure to spend time creating something new. I like think about, it will impact on a positive way to the people who watch it. I have certificated on this technology from ¡Supérate! And Microsoft.';
      } else {
         techParagraph.textContent = 'Aprendí HTML en su versión cinco, se podría decir que soy nuevo en esto aunque, actualmente me considero en un nivel intermedio-avanzado. Lo aprendí con guias y proyectos de prueba en el Centro ¡Supérate! Merlet, La Libertad. La primera vez que lo ví fue en el 2019. Ese año me enteré que me tenía que dedicar a esto. Es un placer invertir tiempo creando algo que ayudará a la gente. Estoy certificado en HTML por Microsoft.';
      }

      techInfo.classList.remove('tech-hidden');
      techInfo.classList.add('tech-active');
      techClose.addEventListener('click', () => {
         techInfo.classList.add('tech-hidden');
         setTimeout(() => {
            techInfo.classList.remove('tech-active');
         }, 700);
      });
   }
   const infoCSS=()=>{
      techName.textContent = techLinks[1].textContent;
      
      if(langButtons[0].classList.contains('active')) {
         techParagraph.textContent = 'I had got contact with CSS at the same time as HTML. I learned it through instructive guides at the same place. I strongly believed CSS is a technology we do not have to overrated because it is the only one, we could use to create complex layouts and design a nice website/webpage. I got a certification on this one as HTML.';
      } else {
         techParagraph.textContent = 'Mi primer contacto con CSS fue al mismo tiempo que HTML, y al igual que este último lo aprendí mediante guias y proyectos en el mismo lugar. Creo firmemente que CSS es una tecnología que no debemos subestimar porque es la única con la que podemos crear interfaces de usuario. Estoy certificado en esta al igual que HTML.';
      }

      techInfo.classList.remove('tech-hidden');
      techInfo.classList.add('tech-active');
      techClose.addEventListener('click', () => {
         techInfo.classList.add('tech-hidden');
         setTimeout(() => {
            techInfo.classList.remove('tech-active');
         }, 700);
      });
   }
   const infoBootstrap=()=>{
      techName.textContent = techLinks[2].textContent;
      
      if(langButtons[0].classList.contains('active')) {
         techParagraph.textContent = 'As HTML and CSS I had the first contact with Bootstrap framework two years ago. I think Bootstrap Grid’s power is insane to making responsive webpages / websites. It can speed up a development project more than vanilla code. Moreover, they update it to use Vanilla JS instead of use jQuery, and the new Bootstrap 5 with new things to do. I do not have a certification on it but, I’m in a course from Insaforp to learn more about it.';
      } else {
         techParagraph.textContent = 'Como HTML y CSS obtuve mi primer contacto hace dos años. Pienso que la grid de Bootstrap es su arma secreta para hacer páginas web,además puede ahorrar mucho tiempo en el desarrollo de las mismas. Aunque, ya reemplaron Jquery por Vanilla JS. No tengo ninguna certificación en esta pero, si estoy en el proceso de crear proyectos con este framework.';
      }

      techInfo.classList.remove('tech-hidden');
      techInfo.classList.add('tech-active');
      techClose.addEventListener('click', () => {
         techInfo.classList.add('tech-hidden');
         setTimeout(() => {
            techInfo.classList.remove('tech-active');
         }, 700);
      });
   }

   const infoJavascript=()=>{
      techName.textContent = techLinks[3].textContent;
      
      if(langButtons[0].classList.contains('active')) {
         techParagraph.textContent = 'Even I learned HTML and CSS on the years mentioned on the others sections, I could not have the opportunity to learn JavaScript as much as I wish. Moreover, the COVID-19 pandemic came in and the 100% of the presential education stopped. But I take that time to keep studying and practicing HTML, Bootstrap, and CSS on my own. It was until at the end of the past year when I learnt the old way to write JavaScript code on Udemy platform. Later that year, I decided to continue study and learn JavaScript on its version based on ECMASCRIPT 6 and so on. To conclude, I fell in love with its syntax and the new way to write JS code. One of my biggest plans is to build an aplication using React JS.';
      } else {
         techParagraph.textContent = 'Aunque aprendí HTML y CSS anteriormente, no tuve la oportunidad de aprender JavaScript lo suficiente como hubiera querido, además la pandemia del COVID-19 interrumpió la educación de forma presencial. Así que aproveche el tiempo que me quedaba para buscar y ver tutoriales sobre las tecnologias ya aprendidas anteriormente. No fue hasta el final del 2020 que comencé a ver un curso de JavaScript en su versión de ECMASCRIPT 6+ en Udemy. Para resumir, me encantó la forma en la que JavaScript trabaja, uno de mis objetivos es empezar a hacer proyectos con React JS.';
      }

      techInfo.classList.remove('tech-hidden');
      techInfo.classList.add('tech-active');
      techClose.addEventListener('click',()=>{
         techInfo.classList.add('tech-hidden');
         setTimeout(() => {techInfo.classList.remove('tech-active');}, 700);
      });
   }

   const showYear = () => {
      const date = new Date;
      document.getElementById('year').textContent = date.getFullYear();
   }

   /* Add a event handler to the link */
   techLinks[0].addEventListener('click', infoHTML);
   techLinks[1].addEventListener('click', infoCSS);
   techLinks[2].addEventListener('click', infoBootstrap)
   techLinks[3].addEventListener('click', infoJavascript);
   showYear();
};

window.onload = init;