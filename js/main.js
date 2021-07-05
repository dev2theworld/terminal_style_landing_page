const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    background: '#00aa00',
    width: '450px',
    height: '450px',
    top: '50px',
    left: '50px',
    mount: aboutContent,
  });
})