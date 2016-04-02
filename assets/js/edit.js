export default class edit {
  constructor() {
    this.$body = $('body');
    this.$btn = $('.editBtn');
    this.$modal = $('#modal');
    this._show();
    this._hide();
  }
  
  _show() {
    this.$btn.on('click', () => {
      let tmpl = $.templates('#editData');
      let html = tmpl.render();
      this.$modal.addClass('modal-bg');
      this.$body.append(html);
    })
  }

  _hide() {
    $(document).on('click', '#hideBtn', () => {
      $('.edit').remove();
      this.$modal.removeClass('modal-bg');
    })
  }
}
