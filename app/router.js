import EmberRouter from '@ember/routing/router';
import config from 'soapbox-project/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('trending', { path: '/gif/trending' });
  this.route('detail', { path: '/gif/:id' });
  this.route('search', { path: '/gif/search' });
  this.route('categories', { path: '/gif/categories' });
});
