import { SAVE, REMOVE } from './actions';

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE:
      const propertyToSave = state.results.find(p => p.id === action.payload);

      return {
        results: state.results.filter(p => p !== propertyToSave),
        saved: state.saved.concat(propertyToSave)
      }
    case REMOVE:
      const propertyToRemove = state.saved.find(p => p.id === action.payload);

      return {
        results: state.results.concat(propertyToRemove),
        saved: state.saved.filter(p => p !== propertyToRemove)
      }
    default:
      return state;
  }
};
