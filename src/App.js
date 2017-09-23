import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import './App.css';

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
  render() {
    const { results, saved } = this.props;

    return (
      <Container>
        <Column>
          {results.map(propertyData => <Card {...{ propertyData }} />)}
        </Column>

        <Column>
          {saved.map(propertyData => <Card {...{ propertyData }} />)}
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
