import reducer from '../reducers';
import { SAVE, REMOVE } from '../actions';


const initialState = {
  results: [
    {
      price: '$400,500',
      agency: {
        brandingColors: {
          primary: '#ffe512'
        },
        logo: '#'
      },
      id: '1',
      mainImage: '#'
    }
  ],
  saved: [
    {
      price: '$500,500',
      agency: {
        brandingColors: {
          primary: '#ffe512'
        },
        logo: '#'
      },
      id: '2',
      mainImage: '#'
    }
  ]
};

describe('reducers', () => {
  it('should handle saving property', () => {
    expect(reducer(initialState, { type: SAVE, payload: '1' }).saved.length).toEqual(2);
    expect(reducer(initialState, { type: SAVE, payload: '1' }).results.length).toEqual(0);
  });

  it('should handle removing saved property', () => {
    expect(reducer(initialState, { type: REMOVE, payload: '2' }).saved.length).toEqual(0);
    expect(reducer(initialState, { type: REMOVE, payload: '2' }).results.length).toEqual(2);
  });
})
