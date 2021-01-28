import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

// componets
import { Base, Content, Segment } from 'components/Layout';

import withTheme from 'utils/withTheme';


// export const GlobalAppContext = createContext({
//   showEvent: false,
//   toggleShowEvent: () => null,
//   brinTop: false,
//   toggleBringTop: () => null,
//   authenticated: false,
//   toggelAutheticated: () => null,
// });

const Layout = ({ children, ...p }) => {
  
  return (
    <Base>
      {children}
    </Base>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default withTheme('portal')(Layout);
