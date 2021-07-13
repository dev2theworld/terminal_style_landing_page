const about = document.querySelector('#about');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const projectsContent = document.querySelector('#projects-content');
const contactContent = document.querySelector('#contact-content');

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '450px',
    height: '450px',
    top: '50px',
    left: '50px',
    mount: aboutContent,
    onfocus: function() {
      this.setBackground('#00aa00')
    },
    onblur: function() {
      this.setBackground('#777')
    },
  });
})

projects.addEventListener('click', () => {
  const projectsBox = new WinBox({
    title: 'My Projects',
    modal: true,
    width: '600px',
    height: '600px',
    top: '50px',
    left: '50px',
    mount: projectsContent,
    onfocus: function() {
      this.setBackground('#00aa00')
    },
    onblur: function() {
      this.setBackground('#777')
    },
  });
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '450px',
    height: '450px',
    top: '50px',
    left: '1000px',
    mount: contactContent,
    onfocus: function() {
      this.setBackground('#00aa00')
    },
    onblur: function() {
      this.setBackground('#777')
    },
  });
})