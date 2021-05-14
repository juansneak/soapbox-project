import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CategoriesController extends Controller {
  @tracked
  gifs = [];

  @action
  toggleSubcategories(event) {
    const subCategoriesList = event.target.parentElement.querySelector('ul')
    subCategoriesList.classList.toggle('show');
  }

  @action
  async findGifs(categorySelected) {
    this.gifs = await this.store.query('gif', {
      type: 'search',
      q: categorySelected,
    });
  }
}
