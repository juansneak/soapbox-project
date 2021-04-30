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
}
