import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { Col } from 'react-grid-system';

import App from '../App';

describe('<App />', () => {
  let store;
  let app;

  beforeEach(() => {
    store = configureStore()({ results: [
      {
        price: "$400,500",
        agency: {
          brandingColors: {
            primary: "#ffe512"
          },
          logo: "#"
        },
        id: "1",
        mainImage: "#"
      }
    ],
    saved: [
      {
        price: "$500,500",
        agency: {
          brandingColors: {
            primary: "#ffe512"
          },
          logo: "#"
        },
        id: "2",
        mainImage: "#"
      }
    ]});

    app = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  })

  it('displays results and saved properties', () => {
    expect(app.find(Col).first().find('Card').length).toBe(1);
    expect(app.find(Col).last().find('Card').length).toBe(1);
  });
});
