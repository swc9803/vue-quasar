import { boot } from 'quasar/wrappers';
import { Loading } from 'quasar';

export default boot(async => {
  Loading.setDefaults({
    delay: 0,
    message: '로딩중',
    spinnerSize: 40,
  });
});
