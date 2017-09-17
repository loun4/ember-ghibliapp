
import Ember from 'ember';

const hasUUID = url => {
  const uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
  return uuidRegex.test(url);
}


export default Ember.Object.extend({
  init() {
    this._normalizeUUIDs();
  },

  // API associations is broken : a mix of urls and root urls represented by stings or array ...
  // Clean the record by extracting uuid from urls and remove usless associations (root urls)
  // This method allow us to always have an array of uuid in the case of an association
  _normalizeUUIDs() {
    const associations = ['films', 'people', 'vehicles', 'locations', 'species', 'residents'];

    associations.forEach(field => {
      let entry = this.get(field);
      if (!entry) { return };

      if (Array.isArray(entry)) {
        entry = entry.filter(hasUUID).map(url => url.split('/').pop());
      } else if (hasUUID(entry)) {
        entry = [entry.split('/').pop()];
      } else {
        entry = null;
      }

      if (!entry || !entry.length) {
        delete this[field];
      } else {
        this.set(field, entry);
      }
    });
  }
});
