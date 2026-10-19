import { Button, Chip, FlexBox, TopNavigation, Typography, useToast } from '@montage-ui/core';
import { IconRefresh, IconShare } from '@montage-ui/icon';

import BottomActions from '../components/BottomActions';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { DESIGNER_TYPES } from '../data/quiz';

import type { DesignerTypeId } from '../data/quiz';

type ResultScreenProps = {
  type: DesignerTypeId;
  onRestart: () => void;
};

const ResultScreen = ({ type, onRestart }: ResultScreenProps) => {
  const result = DESIGNER_TYPES[type];
  const toast = useToast();

  const handleShare = () => {
    toast({ content: '공유 기능은 준비 중이에요' });
  };

  return (
    <>
      <TopNavigation>테스트 결과</TopNavigation>

      <FlexBox flexDirection="column" gap={24} sx={{ flex: 1, padding: '16px 20px 24px' }}>
        <ImagePlaceholder emoji={result.emoji} />

        <FlexBox flexDirection="column" gap={8} alignItems="center">
          <Typography variant="label1" color="semantic.foreground.neutral.secondary">
            나의 디자이너 유형은
          </Typography>
          <Typography as="h1" variant="title2" weight="bold" align="center">
            {result.name}
          </Typography>
          <Typography
            variant="body1"
            weight="medium"
            align="center"
            color="semantic.foreground.brand.primary"
          >
            {result.summary}
          </Typography>
        </FlexBox>

        <FlexBox gap={8} justifyContent="center" flexWrap="wrap">
          {result.keywords.map((keyword) => (
            <Chip key={keyword} size="small" disableInteraction>
              #{keyword}
            </Chip>
          ))}
        </FlexBox>

        <Typography variant="body1-reading" color="semantic.foreground.neutral.secondary">
          {result.description}
        </Typography>
      </FlexBox>

      <BottomActions>
        <Button
          variant="solid"
          color="primary"
          size="large"
          fullWidth
          leadingContent={<IconShare />}
          onClick={handleShare}
        >
          결과 공유하기
        </Button>
        <Button
          variant="outlined"
          color="assistive"
          size="large"
          fullWidth
          leadingContent={<IconRefresh />}
          onClick={onRestart}
        >
          다시하기
        </Button>
      </BottomActions>
    </>
  );
};

export default ResultScreen;
