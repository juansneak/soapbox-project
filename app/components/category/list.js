import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CategoryListComponent extends Component {
  @action
  toggleSubcategories(event) {
    const subCategoriesList = event.target.parentElement.querySelector('ul')
    subCategoriesList.classList.toggle('show');
  }
}
