import modal from './modal';
import countDown from './formCount';
import edit from './edit';
import deletePost from './delete';
new deletePost();
new edit();
new countDown('#postForm');
new modal();
