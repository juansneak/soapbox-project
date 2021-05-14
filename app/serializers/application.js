import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeQueryResponse(store, primaryModelClass, payload) {
    const gifPayload = payload.data.map(record => {
      return this.serializeGifRecord(record);
    });
    return {
      data: gifPayload,
    };
  }

  normalizeFindRecordResponse(store, primaryModelClass, payload) {
    return {
      data: this.serializeGifRecord(payload.data),
    };
  }

  normalizeFindAllResponse(store, primaryModelClass, payload) {
    let id = 1;
    console.log(primaryModelClass); //JCMT
    const newPayload = payload.data.map(record => {
      id++;
      return this.serializeFindAllRecord(record, id);
    });
    return {
      data: newPayload,
    };
  }

  serializeGifRecord(record) {
    return {
      type: 'gif',
      id: record.id,
      attributes: {
        title: record.title,
        slug: record.slug,
        embed_url: record.embed_url,
        rating: record.rating,
        username: record.username,
        images: record.images,
        trendingDateTime: new Date(record.trending_datetime).toDateString(),
      },
    };
  }

  serializeFindAllRecord(record, id) {
    return {
      type: 'category',
      id: record.id || id,
      attributes: {
        name: record.name,
        name_encoded: record.name_encoded,
        subcategories: record.subcategories,
      },
    };
  }

}
