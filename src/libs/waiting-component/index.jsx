import React, { Suspense } from 'react';

const Loading = () => (
  <div>
    loading
  </div>
);

export const WaitingComponent = (
  Component
) => (props) => (
  <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
)