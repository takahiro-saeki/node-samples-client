export default class countDown {
  constructor(el) {
    this.$document = $(document);
    this.$count = $('#count');
    this.el = el;
    this._count();
  }
  _count() {
    this.$document.on('keyup', this.el, () => {
      let count = $(this.el).val().length;
      $(this.el).next().html(`文字数：${ count }`);
    })
  }
}
