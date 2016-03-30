import $ from 'jquery';
export default class countDown {
  constructor(el) {
    this.$count = $('#count');
    this.$el = $(el);
    this._count();
  }
  _count() {
    $(document).on('keyup', '#postForm', () => {
      let count = $('#postForm').val().length;
      $('#postForm').next().html(`文字数：${ count }`);
    })
  }
}
