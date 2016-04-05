export default class modal {
  constructor() {
    this.$body = $('body');
    this.$btn = $('.postBtn');
    this.$modal = $('#modal');
    this.$document = $(document);
    this._show();
    this._hide();
    this._create();
  }

  _show() {
    this.$btn.on('click', () => {
      let tmpl = $.templates('#modalData');
      let html = tmpl.render();
      this.$modal.addClass('modal-bg');
      this.$body.append(html);
    })
  }

  _hide() {
    this.$document.on('click', '#hideBtn', () => {
      this._close();
    })
  }

  _create() {
    this.$document.on('click', 'input[name="createPost"]', e => {
      e.preventDefault();
      $.mockjax(
        {
          url: 'create',　　　　　　　　　　　
          responseTime: 500,
          responseText: {
            data: 'コンプリート'
          }
        }
      );
      $.ajax({
        url : 'create',
        type : 'POST',
        data: this._data(),
        success: console.log('OK'),
        datatype: 'json'
      }).done(() => this._close()).done(() => this._complete());
      //TODO エラーダイアログの表示処理
      //TODO ajaxの処理はAPI関数を作成してまとめる？
    })
  }

  _data() {
    let data = new Object();
    let postData = $('#postForm').val();
    data.post = postData;
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
