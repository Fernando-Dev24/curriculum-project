const init = () => {
   const techLinks = document.getElementsByClassName('tech-link');
   const techInfo = document.getElementById('tech-info');
   const techClose = document.getElementById('tech-close');
   const techName = document.getElementById('tech-name');
   const techParagraph = document.getElementById('tech-paragraph')
   /* Avoid default event to all links unless the website link */
   for(let i = 0; i < techLinks.length; i++){
      techLinks[i].addEventListener('click', (e) =>{
         e.preventDefault();
      });
   };
   /* Making functions for each technologie */
   const infoHTML=()=>{
      techName.textContent = techLinks[0].textContent;
      techParagraph.textContent = 'I learnt HTML on its five version, so I’m new about it but, currently I consider myself on a intermediate level. I study it with some guides on Centro ¡Supérate! Merlet at La Libertad. My first contact with it was on 2019. Later that year, I realized that I am going to fall in love with web development. It’s such a pleasure to spend time creating something new. I like think about, it will impact on a positive way to the people who watch it. I have certificated on this technology from ¡Supérate! And Microsoft.';
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
      techParagraph.textContent = ' I had got contact with CSS at the same time as HTML. I learned it through instructive guides at the same place. I strongly believed CSS is a technology we do not have to overrated because it is the only one, we could use to create complex layouts and design a nice website/webpage. I got a certification on this one as HTML.';
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
      techParagraph.textContent = 'As HTML and CSS I had the first contact with Bootstrap framework two years ago. I think Bootstrap Grid’s power is insane to making responsive webpages / websites. It can speed up a development project more than vanilla code. Moreover, they update it to use Vanilla JS instead of use jQuery, and the new Bootstrap 5 with new things to do. I do not have a certification on it but, I’m in a course from Insaforp to learn more about it.';
      techInfo.classList.remove('tech-hidden');
      techInfo.classList.add('tech-active');
      techClose.addEventListener('click', () => {
         techInfo.classList.add('tech-hidden');
         setTimeout(() => {
            techInfo.classList.remove('tech-active');
         }, 700);
      });
   }
   const infoJquery=()=>{
      techName.textContent = techLinks[3].textContent;
      techParagraph.textContent = 'As JavaScript, I have learnt about it on my own. I watch some videos about it on Udemy platform. I’m building a project with it. I think it is useful with a one single page, but on many sections of a website it results to be so heavy and it does not contribute to a better web page performance.';
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
      techName.textContent = techLinks[4].textContent;
      techParagraph.textContent = `Even I learned HTML and CSS on the years mentioned on the others sections, I could not have the opportunity to learn JavaScript as much as I wish. Moreover, the COVID-19 pandemic came in and the 100% of the presential education stopped. But I take that time to keep studying and practicing HTML, Bootstrap, and CSS on my own. It was until at the end of the past year when I learnt the old way to write JavaScript code on Udemy platform. Later that year, I decided to continue study and learn JavaScript on its version based on ECMASCRIPT 6 and so on. To conclude, I fell in love with its syntax and the new way to write JS code.`;
      techInfo.classList.remove('tech-hidden');
      techInfo.classList.add('tech-active');
      techClose.addEventListener('click',()=>{
         techInfo.classList.add('tech-hidden');
         setTimeout(() => {techInfo.classList.remove('tech-active');}, 700);
      });
   }
   /* Add a event handler to the link */
   techLinks[0].addEventListener('click', infoHTML);
   techLinks[1].addEventListener('click', infoCSS);
   techLinks[2].addEventListener('click', infoBootstrap)
   techLinks[3].addEventListener('click', infoJquery);
   techLinks[4].addEventListener('click', infoJavascript);
}; window.onload = init;