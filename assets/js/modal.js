export default class modal {
  constructor() {
    this.$body = $('body');
    this.$btn = $('.postBtn');
    this._show();
  }
  _show() {
    this.$btn.on('click', () => {
      let tmpl = $.templates('#modalTest');
      let html = tmpl.render();
      this.$body.append(html);
    })
  }
}
