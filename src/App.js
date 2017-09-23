import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Card from './components/card/Card';
import { save, remove } from './actions';

const Container = styled.div`
  display: flex;
  justify-content: left;
`;

const Column = styled.div`
  flex: 1;
`;

class App extends Component {
  clickHandler(action, id) {
    return () => action(id);
  }

  render() {
    const { results, saved, save, remove } = this.props;

    return (
      <Container>
        <Column>
          {results.map(propertyData => (
            <Card key={propertyData.id} {...{ propertyData, handler: this.clickHandler(save, propertyData.id) }} />)
          )}
        </Column>

        <Column>
          {saved.map(propertyData => (
            <Card key={propertyData.id} {...{ propertyData, handler: this.clickHandler(remove, propertyData.id), remove: true }} />)
          )}
        </Column>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  results: state.results,
  saved: state.saved
});

const mapDispatchToProps = dispatch => ({
  save: id => dispatch(save(id)),
  remove: id => dispatch(remove(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
