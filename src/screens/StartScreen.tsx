import { Box, Button, FlexBox, Typography } from '@montage-ui/core';

import BottomActions from '../components/BottomActions';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { QUESTIONS, START_IMAGE } from '../data/quiz';

type StartScreenProps = {
  onStart: () => void;
};

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <>
      <FlexBox flexDirection="column" gap={24} sx={{ flex: 1, padding: '48px 20px 24px' }}>
        <ImagePlaceholder src={START_IMAGE} alt="디자이너 유형 테스트" emoji="✏️" />

        <FlexBox flexDirection="column" gap={8}>
          <Typography variant="label1" weight="bold" color="semantic.foreground.brand.primary">
            DESIGNER TYPE TEST
          </Typography>
          <Typography as="h1" variant="title2" weight="bold">
            나는 어떤 디자이너일까?
          </Typography>
          <Typography variant="body1-reading" color="semantic.foreground.neutral.secondary">
            일하는 방식에 대한 질문에 답하고 나의 디자이너 유형을 알아보세요. 결과를 동료와
            나누며 서로의 스타일을 이야기해 보세요.
          </Typography>
        </FlexBox>

        <Box
          sx={(theme) => ({
            padding: '12px 16px',
            borderRadius: 12,
            backgroundColor: theme.semantic.background.neutral.secondary,
          })}
        >
          <Typography variant="label1" color="semantic.foreground.neutral.secondary">
            ⏱ 약 1분 · {QUESTIONS.length}문항
          </Typography>
        </Box>
      </FlexBox>

      <BottomActions>
        <Button variant="solid" color="primary" size="large" fullWidth onClick={onStart}>
          테스트 시작하기
        </Button>
      </BottomActions>
    </>
  );
};

export default StartScreen;
