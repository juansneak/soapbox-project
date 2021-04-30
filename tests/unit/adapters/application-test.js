import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import ENV from 'soapbox-project/config/environment';

module('Unit | Adapter | application', function(hooks) {
  setupTest(hooks);

  test('it creates the trending url', function(assert){
    const adapter = this.owner.lookup('adapter:application');
    assert.equal(
      adapter.urlForQuery({ type: 'trending' }, 'gif'),
      `${ENV.apiUrl}/${ENV.apiNamespace}/trending?api_key=${ENV.apiKey}`,
      'it creates the trending url'
    );
  });
});
