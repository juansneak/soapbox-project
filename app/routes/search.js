import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SearchRoute extends Route {
  @service store

  setupController(controller, model) {
    super.setupController(controller, model);
  }

  async model() {
    return this.store.query('gif',{
      type: 'search',
    });
  }

}
