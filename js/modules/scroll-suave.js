export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    this.callbackLink = this.callbackLink.bind(this);
  }

  callbackLink(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (href !== '#') {
      const section = document.querySelector(href);
      section.scrollIntoView(this.options);
    }
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.callbackLink);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
