import firebase from 'firebase';
import moment from 'moment';
import countDown from './formCount';
const firePost = 'https://mohuparatodo.firebaseio.com/data/';

class main {
  constructor() {
    this._create();
    this._newPost();
    this._hide();
    new countDown('#postForm');
  }

  init() {
    $(document).ready(() => {

    })
  }

  _create() {
    $('.postBtn').on('click', () => {
      let tmpl = $.templates('#modalData');
      let html = tmpl.render();
      $('#modal').addClass('modal-bg');
      $(document.body).append(html);
    })
  }

  _newPost() {
    $(document).on('click', 'input[name="createPost"]', e => {
      e.preventDefault();
      let loader = $.templates('#loaderData');
      let html = loader.render();
      $(document.body).append(html);
      let postForm = $('#postForm').val();
      let data = new Firebase(firePost);
      let date = moment().format('l');
      data.push({
        date: date,
        content: postForm
      }, () => {
        $('.modal').remove();
        $('#modal').removeClass('modal-bg');
        $('.load-bg').remove();
      });
    })
  }

  _success() {
    let tmpl = $.templates('#completeData');
    let html = tmpl.render();
    this.$body.append(html);
  }

  _hide() {
    $(document).on('click', '#hideBtn', () => {
      $('.modal').remove();
      $('#modal').removeClass('modal-bg')
    })
  }



  _delete() {

  }

  _edit() {

  }
}

new main();
