import api from './api';
import formCount from './formCount';
export default class edit {
  constructor() {
    this.$document = $(document);
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
    this.$document.on('click', '#hideBtn', () => {
      $('.edit').remove();
      this.$modal.removeClass('modal-bg');
    })
  }

  _edit() {
    this.$document.on('click', 'input[name="editPost"]', e => {
      e.preventDefault();
      $.mockjax(
        {
          url: 'update',　　　　　　　　　　　
          responseTime: 500,
          responseText: {
            data: 'コンプリート'
          }
        }
      );
      api('update', this._data(), console.log('OK')).done(() => this._close()).done(() => this._complete());
    })
  }

  _data() {
    let data = new Object();
    let editData = $('#editForm').val();
    data.post = editData;
    return data;
  }

  _complete() {
    let tmpl = $.templates('#completeData');
    let html = tmpl.render();
    this.$body.append(html);
    $('.complete').fadeOut(3000);
  }

  _error() {
    alert('エラーだよ')
  }

  _close() {
    $('.modal').remove();
    this.$modal.removeClass('modal-bg');
  }
}
