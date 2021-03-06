import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/nav-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Layout::NavBar />`);

    assert.dom('.menu').exists();

    assert
      .dom('.menu a:nth-of-type(1)')
      .containsText('Home');

    assert
      .dom('.menu a:nth-of-type(2)')
      .containsText('Trending');

  });
});
