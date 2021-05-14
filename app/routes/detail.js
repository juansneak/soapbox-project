import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DetailRoute extends Route {
  @service store

  beforeModel(transition) {
    this.previousRoute = transition.from.name;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.previousRoute = this.previousRoute;
  }

  async model(params) {
    return this.store.findRecord('gif', params.id);
  }

}
