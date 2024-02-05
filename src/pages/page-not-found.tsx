import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import NotFoundView from '../sections/error/not-found-view';

// import { NotFoundView } from 'src/sections/error';

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found </title>
      </Helmet>

      <NotFoundView />
    </>
  );
}
