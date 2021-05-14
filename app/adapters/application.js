import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'soapbox-project/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.apiUrl;
  namespace = ENV.apiNamespace;

  urlForQuery({ type }, modelName) {
    if (modelName == 'gif') {
      return `${this.host}/${this.namespace}/gifs/${type}?api_key=${ENV.apiKey}`;
    } else {
      return super.urlForQuery(...arguments);
    }
  }

  urlForFindRecord() {
    return `${super.urlForFindRecord(...arguments)}?api_key=${ENV.apiKey}`;
  }

  urlForFindAll(modelName) {
    if (modelName == 'category') {
      return `${this.host}/${this.namespace}/gifs/categories?api_key=${ENV.apiKey}`;
    } else {
      return super.urlForFindAll(...arguments);
    }
  }
}
