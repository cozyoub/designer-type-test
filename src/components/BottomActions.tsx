import { FlexBox } from '@montage-ui/core';

import type { ReactNode } from 'react';

type BottomActionsProps = {
  children: ReactNode;
};

/** 화면 하단에 고정되는 버튼 영역 */
const BottomActions = ({ children }: BottomActionsProps) => {
  return (
    <FlexBox
      flexDirection="column"
      gap={8}
      sx={(theme) => ({
        position: 'sticky',
        bottom: 0,
        padding: '12px 20px 20px',
        backgroundColor: theme.semantic.background.neutral.primary,
      })}
    >
      {children}
    </FlexBox>
  );
};

export default BottomActions;
