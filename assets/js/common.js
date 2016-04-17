import Firebase from 'firebase';
import moment from 'moment';
import countDown from './formCount';
const firePost = 'https://mohuparatodo.firebaseio.com/data/';

class main {
  constructor() {
    new countDown('#postForm');
    this._create();
    this._newPost();
    this._hide();
    this._init();
  }

  _init() {
    $(document).ready(() => {
      let initData = new Firebase(firePost);
      initData.on('value', data => {
        let arr = [];
        let initObj = data.val();
        for (let key in initObj) {
          arr.push(initObj[key]);
        }
        let renderInit = {init: arr};
        let tmpl = $.templates('#initData');
        let html = tmpl.render(renderInit);
        $('#init').html(html);
      })
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
    $(document).on('click', '.deleteBtn', () => {
      let tmpl = $.templates('#deleteData');
      let html = tmpl.render();
      $('#modal').addClass('modal-bg');
      this.$body.append(html);
    })
  }

  _edit() {

  }
}

new main();
