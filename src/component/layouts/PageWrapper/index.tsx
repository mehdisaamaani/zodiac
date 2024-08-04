import React, { PropsWithChildren } from "react";

const PageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <React.Suspense fallback={<>Loading....</>}>{children}</React.Suspense>
  );
};

export default PageWrapper;
