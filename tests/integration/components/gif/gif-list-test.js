import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gif/gif-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    let gifs = [
      {
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
      },
      {
        id: '456',
        title: 'Elon Musk Bitcoin GIF by haydiroket',
        slug: 'elon-musk-bitcoin-gif-hQqdnZaByrglLxBrnN',
        embed_url: 'news',
        rating: 'g',
        username: 'juan.morantes',
        images: {
          original_mp4: {
            width: '500',
            height: '300',
          },
          original: {
            mp4: 'https://media2.giphy.com/media/H2e4Nz5wXCaNSXsTqH/giphy.mp4',
          },
        },
        trendingDateTime: 'Thu Apr 29 2021',
      },

    ];

    this.set('gifs', gifs);

    await render(hbs`<Gif::GifList @gifs={{this.gifs}}/>`);

    assert.dom('.gif-list').exists();

    assert
      .dom('.gif-list li:nth-of-type(1) .box-container span:nth-of-type(1)')
      .containsText('Tired Ted Cruz GIF by GIPHY News');

    assert
      .dom('.gif-list li:nth-of-type(1) .box-container span:nth-of-type(2)')
      .containsText('juansneak');

    assert
      .dom('.gif-list li:nth-of-type(2) .box-container span:nth-of-type(1)')
      .containsText('Elon Musk Bitcoin GIF by haydiroket');

    assert
      .dom('.gif-list li:nth-of-type(2) .box-container span:nth-of-type(2)')
      .containsText('juan.morantes');

  });
});
