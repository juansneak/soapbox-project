import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | form-filter', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('limit', 1);
    this.set('rating', 'pg');
    this.set('offset', 1);
    this.set('ratingOptions', []);
    this.set('changeRating', () => {});
    this.set('updateModel', () => {});

    await render(hbs`<FormFilter
        @limit={{this.limit}}
        @rating={{this.rating}}
        @offset={{this.offset}}
        @ratingOptions={{this.ratingOptions}}
        @changeRating={{this.changeRating}}
        @filterAction={{this.updateModel}}
    />`);

    assert.dom('input').exists({ count: 2 });

    assert.dom('select').exists({ count: 1 });

    assert
      .dom('select')
      .containsText('Rating');

  });
});
