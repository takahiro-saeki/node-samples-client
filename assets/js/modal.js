import Firebase from 'firebase';
import countDown from './formCount';
import api from './api';
export default class modal {
  constructor() {
    this.$body = $('body');
    this.$btn = $('.postBtn');
    this.$modal = $('#modal');
    this.$document = $(document);
  }
}
