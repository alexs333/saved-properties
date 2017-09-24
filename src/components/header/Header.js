import styled from 'styled-components';

import heroProperties from './hero_properties.png';
import { colors, media } from '../../config/settings';

const Header =  styled.div`
  font-size: 1.5rem;
  padding: 3rem;
  color: ${colors.white};
  font-weight: bold;
  background-image: url(${heroProperties});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: ${media.sm}) {
    font-size: 3rem;
    padding: 5rem;
  }
`;

export default Header;
