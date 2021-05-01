import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const DEFAULT_LIMIT = 15;
const DEFAULT_RATING = 'g';
const DEFAULT_OFFSET = '1';

export default class TrendingController extends Controller {

  ratingOptions = ['g', 'pg', 'pg-13', 'r'];

  @tracked
  limit = DEFAULT_LIMIT;

  @tracked
  rating = DEFAULT_RATING;

  @tracked
  offset = DEFAULT_OFFSET;

  @action
  async changeRating(value) {
    this.rating = value;
    await this.updateModel();
  }

  @action
  async updateModel() {
    this.model = await this.store.query('gif', {
      type: 'trending',
      limit: this.limit == '' ? DEFAULT_LIMIT : this.limit,
      rating: this.rating == '' ? DEFAULT_RATING : this.rating,
      offset: this.offset == '' ? DEFAULT_OFFSET : this.offset,
    });
  }
}
