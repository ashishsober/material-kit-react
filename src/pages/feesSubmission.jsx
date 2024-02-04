import { Helmet } from 'react-helmet-async';

import { UserView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function FeesSubmission() {
  return (
    <>
      <Helmet>
        <title> Fees Submission | Minimal UI </title>
      </Helmet>

      <UserView />
    </>
  );
}
