import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

import Card from './components/card/Card';
import Header from './components/header/Header';
import { save, remove } from './actions';

import { colors } from './config/settings';

const StyledContainer = styled(Container)`
  padding-top: 20px;
  background-color: ${colors.white};
  text-align: center;
`;

class App extends Component {
  clickHandler(action, id) {
    return () => action(id);
  }

  render() {
    const { results, saved, save, remove } = this.props;

    return (
      <div>
        <Header>Property Manager</Header>
        <StyledContainer>
          <Row>
            <Col sm={6} xs={12}>
              {results.map(propertyData => (
                <Card
                  key={propertyData.id}
                  {...{ propertyData, handler: this.clickHandler(save, propertyData.id) }}
                />
              ))}
            </Col>

            <Col sm={6} xs={12}>
              {saved.map(propertyData => (
                <Card
                  key={propertyData.id}
                  {...{ propertyData, handler: this.clickHandler(remove, propertyData.id), remove: true }}
                />
              ))}
            </Col>
          </Row>
        </StyledContainer>
      </div>
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
