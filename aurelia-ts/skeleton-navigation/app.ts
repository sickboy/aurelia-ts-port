import {inject} from '../framework/index'
import {Router} from '../router/index';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

@inject(Router)
export class App {
  static inject() { return [Router]; }
  public router;
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome' },
        { route: 'flickr',        moduleId: './flickr',       nav: true },
        { route: 'child-router',  moduleId: './child-router', nav: true, title:'Child Router' }
      ]);
    });
  }
}
