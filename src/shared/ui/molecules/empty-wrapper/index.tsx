import React, { PropsWithChildren } from 'react';

interface Props {
  isEmpty: boolean,
  renderWhenEmpty: PropsWithChildren<Props>['children'],
}
export const EmptyWrapper: React.FC<Props> = ({
  isEmpty, renderWhenEmpty, children,
}) => <>{isEmpty ? renderWhenEmpty : children}</>;
