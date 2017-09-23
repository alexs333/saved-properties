const SAVE = 'SAVE';
const REMOVE = 'REMOVE';

export const save = propertyId => ({ type: SAVE, payload: propertyId });
export const remove = propertyId => ({ type: REMOVE, payload: propertyId });
