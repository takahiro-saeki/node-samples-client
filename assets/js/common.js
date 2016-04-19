import Firebase from 'firebase';
import moment from 'moment';
import countDown from './formCount';
const firePost = 'https://mohuparatodo.firebaseio.com/data/';
let fireDataBox = [];

class main {
  constructor() {
    new countDown('#postForm');
    this._createModal();
    this._newPost();
    this._hide();
    this._init();
    this._deleteModal();
    this._delete();
    this._editModal();
    this._edit();
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

  _createModal() {
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
        content: postForm,
        timestamp: Firebase.ServerValue.TIMESTAMP
      }, () => {
        $('.modals').remove();
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
      $('.modals').remove();
      $('#modal').removeClass('modal-bg')
    })
  }

  _deleteModal() {
    $(document).on('click', '.deleteBtn', e => {
      let deleteData = $(e.target).parent().prev().text();
      fireDataBox = deleteData;
      let tmpl = $.templates('#deleteData');
      let html = tmpl.render();
      $('#modal').addClass('modal-bg');
      $(document.body).append(html);
    })
  }

  _delete() {
    $(document).on('click', '.deleteOk', () => {
      let dataBox = [];
      let deletePost = new Firebase(firePost);
      deletePost.on('value', data => {
        let fireDelete = data.val();
        for (let key in fireDelete) {
          if(fireDelete[key].content === fireDataBox) {
            dataBox.push(key);
            fireDataBox = [];
          }
        }
      })
      const DeletePath = new Firebase('https://mohuparatodo.firebaseio.com/data/' + dataBox[0]);
      DeletePath.remove();
      $('.modals').remove();
      $('#modal').removeClass('modal-bg');
    })
  }

  _editModal() {
    $(document).on('click', '.editBtn', e => {
      let editData = $(e.target).parent().prev().text();
      let editObj = {hiddenData: editData}
      let tmpl = $.templates('#editData');
      let html = tmpl.render(editObj);
      $('#modal').addClass('modal-bg');
      $(document.body).append(html);
    })
  }

  _edit() {
    $(document).on('click', 'input[name="editPost"]', e => {
      e.preventDefault();
      let dataBox = [];
      let date = moment().format('l');
      let editStatus = new Firebase(firePost);
      let editHidden = $(e.target).prev().val();
      let editText = $(e.target).prevAll('textarea').val();
      editStatus.on('value', data => {
        let editPost = data.val();
        for(let key in editPost) {
          if(editPost[key].content === editHidden) {
            dataBox.push(key);
          }
        }
      })
      const editPath = new Firebase('https://mohuparatodo.firebaseio.com/data/' + dataBox[0]);
      let onComplete = () => {
        $('.modals').remove();
        $('#modal').removeClass('modal-bg');
      }
      editPath.update({
        content: editText,
        date: date,
        timestamp: Firebase.ServerValue.TIMESTAMP
      }, onComplete);
    })
  }
}

new main();
