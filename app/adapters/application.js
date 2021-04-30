import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'soapbox-project/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.apiUrl;
  namespace = ENV.apiNamespace;

  urlForQuery({ type }, modelName) {
    if (modelName == 'gif' && type == 'trending') {
      return `${this.host}/${this.namespace}/trending?api_key=${ENV.apiKey}`;
    } else {
      return super.urlForQuery(...arguments);
    }
  }
}
