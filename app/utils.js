
export const filterByEntityId = (entity, entityId, item) =>
    item.get(entity).includes(entityId);


export const comparator = (by, type, direction) => {
  const directions = {
    ascending : 1,
    descending: -1
  };

  direction = directions[direction];

  const fns = {
    number  : (a, b) => {
      let result = a.get(by) - b.get(by);

      if (!isFinite(result))
        result = !isFinite(a.get(by)) ? 1 : -1;

      return direction * result;
    },
    string  : (a, b) => (
      direction * String(a.get(by)).localeCompare(b.get(by))
    ),
    date  : (a, b) => (
      direction * (new Date(a.get(by)) - new Date(b.get(by)))
    )
  }

  return fns[type];
};


export const unique = (item, index, items) =>
  items.indexOf(item) === index;
