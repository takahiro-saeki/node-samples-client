export default class modal {
  constructor() {
    this.$body = $('body');
    this.$btn = $('.postBtn');
    this.$modal = $('#modal');
    this._show();
    this._hide();
  }
  _show() {
    this.$btn.on('click', () => {
      let tmpl = $.templates('#modalTest');
      let html = tmpl.render();
      this.$modal.addClass('modal-bg');
      this.$body.append(html);
    })
  }

  _hide() {
    $(document).on('click', '#hideBtn', () => {
      $('.modal').remove();
      this.$modal.removeClass('modal-bg');
    })
  }
}
