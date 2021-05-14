import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DetailController extends Controller {
  @action
  goBack() {
    this.transitionToRoute(this.previousRoute);
  }
}
