import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gif/gif', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    let gif = {
      id: '123',
      title: 'Tired Ted Cruz GIF by GIPHY News',
      slug: 'news-ted-cruz-2021-joint-session-of-congress-biden-address-hQqdnZaByrglLxBrnN',
      embed_url: 'news',
      rating: 'g',
      username: 'juansneak',
      images: {
        original_mp4: {
          width: '200',
          height: '300',
        },
        original: {
          mp4: 'https://media2.giphy.com/media/H2e4Nz5wXCaNSXsTqH/giphy.mp4',
        },
      },
      trendingDateTime: 'Thu Apr 29 2021',
    };

    this.set('gif', gif);

    await render(hbs`<Gif::Gif @gif={{this.gif}}/>`);

    assert
      .dom('.box-container span:nth-of-type(1)')
      .containsText('Tired Ted Cruz GIF by GIPHY News');

    assert
      .dom('.box-container span:nth-of-type(2)')
      .containsText('juansneak');

  });
});
