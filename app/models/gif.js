import Model, { attr } from '@ember-data/model';

export default class GifModel extends Model {
  @attr('string') title;
  @attr('string') slug;
  @attr('url') embed_url;
  @attr('string') rating;
  @attr('string') username;
  @attr('array') images;
  @attr('date') trendingDateTime;
}
