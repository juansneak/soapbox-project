import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TrendingController extends Controller {

  queryParams = ['limit', 'rating', 'offset', 'query', 'lang'];

  ratingOptions = ['g', 'pg', 'pg-13', 'r'];

  langOptions = [
    {
      value: 'en',
      name: 'English'
    },
    {
      value: 'es',
      name: 'Spanish'
    },
    {
      value: 'fr',
      name: 'French'
    }
  ];

  /*@tracked
  limit;

  @tracked
  rating = 'pg';

  @tracked
  offset;

  @tracked
  query = '';

  @tracked
  lang = 'en';*/

  @action
  async changeRating(value) {
    this.rating = value;
    await this.updateModel();
  }

  @action
  async changeLang(value) {
    this.lang = value;
    await this.updateModel();
  }

  @action
  async updateModel() {
    this.model = await this.store.query('gif', {
      type: 'search',
      q: this.query,
      limit: this.limit,
      rating: this.rating,
      offset: this.offset,
      lang: this.lang,
    });
  }
}
