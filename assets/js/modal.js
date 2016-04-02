export default class modal {
  constructor() {
    this.$body = $('body');
    this.$btn = $('.postBtn');
    this.$modal = $('#modal');
    this.$document = $(document);
    this._show();
    this._hide();
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
      $('.modal').remove();
      this.$modal.removeClass('modal-bg');
    })
  }

  _create() {
    this.$document.on('click', 'input[name="createPost"]', () => {
      $.ajax({
        url : '/create',
        type : 'GET',
        success: _success(),
        error: error,
        datatype:'json'
      }).done(() => this._hide()).done(() => this._complete());
      //TODO エラーダイアログの表示処理
      //TODO ajaxの処理はAPI関数を作成してまとめる？
    })
  }

  _success() {
    //TODO textareaのvalueをまとめてリクエスト投げる
  }

  _complete() {
    //TODO 投稿完了モーダルを表示する
  }
}
