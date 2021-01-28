import React from 'react';

import { Container, TitleRow, StatusCode, StatusTitle, HelperRow, StatusHelper } from '../components/FourZeroFour';

const FourZeroFour = () => {
  return (
    <Container>
      <TitleRow>
        <StatusCode>404</StatusCode>
        <StatusTitle>Invalid URL</StatusTitle>
      </TitleRow>
      <HelperRow>
        <StatusHelper>
          Page you’ve requested does not exist. Please log into your live stream via the URL received when you purchase
          your ticket.
        </StatusHelper>
      </HelperRow>
    </Container>
  );
};

export default FourZeroFour;
