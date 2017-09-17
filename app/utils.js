
export const filterByEntityId = (entity, entityId, item) =>
    item.get(entity).includes(entityId);
