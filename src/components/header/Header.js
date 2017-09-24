import styled from 'styled-components';

import heroProperties from './hero_properties.png';
import { colors } from '../../config/settings';

const Header =  styled.div`
  font-size: 3rem;
  padding: 5rem;
  color: ${colors.white};
  background-color: ${colors.darkGrey};
  font-weight: bold;

  background-image: url(${heroProperties});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Header;
