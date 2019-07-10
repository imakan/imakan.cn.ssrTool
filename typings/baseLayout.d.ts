import React from 'react';
export interface LayoutProps extends React.HTMLAttributes {
  pathname: string;
  history?: History<any>;
  location?: Location<any>;
  match?: match<any>;
  staticContext?: StaticContext | undefined;
}
