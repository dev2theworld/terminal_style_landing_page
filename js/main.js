const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
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

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '450px',
    height: '450px',
    top: '200px',
    left: '200px',
    mount: contactContent,
    onfocus: function() {
      this.setBackground('#00aa00')
    },
    onblur: function() {
      this.setBackground('#777')
    },
  });
})