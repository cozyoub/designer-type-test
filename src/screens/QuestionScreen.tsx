import {
  Button,
  FlexBox,
  ProgressIndicator,
  TopNavigation,
  TopNavigationButton,
  Typography,
} from '@montage-ui/core';

import { QUESTIONS } from '../data/quiz';

import type { DesignerTypeId } from '../data/quiz';

type QuestionScreenProps = {
  step: number;
  selected?: DesignerTypeId;
  onSelect: (type: DesignerTypeId) => void;
  onBack: () => void;
};

const QuestionScreen = ({ step, selected, onSelect, onBack }: QuestionScreenProps) => {
  const question = QUESTIONS[step];
  const total = QUESTIONS.length;

  return (
    <>
      <TopNavigation
        leadingContent={
          <TopNavigationButton variant="back-button" onClick={onBack} aria-label="이전 질문" />
        }
      >
        {step + 1} / {total}
      </TopNavigation>

      <ProgressIndicator percent={((step + 1) / total) * 100} sx={{ margin: '0 20px' }} />

      <FlexBox flexDirection="column" gap={40} sx={{ flex: 1, padding: '32px 20px' }}>
        <FlexBox flexDirection="column" gap={8}>
          <Typography variant="headline2" weight="bold" color="semantic.foreground.brand.primary">
            Q{step + 1}.
          </Typography>
          <Typography as="h2" variant="title3" weight="bold" sx={{ whiteSpace: 'pre-line' }}>
            {question.title}
          </Typography>
        </FlexBox>

        <FlexBox flexDirection="column" gap={12}>
          {question.options.map((option) => {
            const isSelected = selected === option.type;

            return (
              <Button
                key={option.label}
                variant={isSelected ? 'solid' : 'outlined'}
                color={isSelected ? 'primary' : 'assistive'}
                size="large"
                fullWidth
                aria-pressed={isSelected}
                onClick={() => onSelect(option.type)}
                sx={{ height: 'auto', minHeight: 64, paddingBlock: 16, whiteSpace: 'normal' }}
              >
                {option.label}
              </Button>
            );
          })}
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default QuestionScreen;
