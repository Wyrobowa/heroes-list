import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// Styles
import * as Styled from './pageNotFoundStyles';

const PageNotFound = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Styled.PageNotFound>
      <Styled.Title>OOPS!</Styled.Title>
      <Styled.Paragraph>
        We can&apos;t find the page you&apos;re looking for.
      </Styled.Paragraph>
      <Styled.HomepageButton
        type="button"
        color="transparent"
        font="blue"
        border="blue"
        to={{
          pathname: '/',
          state: { background: location },
        }}
        history={history}
      >
        Visit homepage
      </Styled.HomepageButton>
    </Styled.PageNotFound>
  );
};

export default PageNotFound;
