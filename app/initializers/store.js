
export function initialize(app) {
  app.inject('route', 'store', 'service:store');
}

export default {
  name: 'store',
  initialize
};
