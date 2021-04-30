import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

const DEFAULT_LIMIT = 15;
const DEFAULT_RATING = 'g';
const DEFAULT_OFFSET = 1;

export default class TrendingRoute extends Route {
  @service store

  async model() {
    return this.store.query('gif', {
      type: 'trending',
      limit: DEFAULT_LIMIT,
      rating: DEFAULT_RATING,
      offset: DEFAULT_OFFSET,
    });
  }
}
