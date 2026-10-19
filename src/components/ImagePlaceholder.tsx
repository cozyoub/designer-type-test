import { FlexBox } from '@montage-ui/core';

type ImagePlaceholderProps = {
  emoji: string;
};

/** 실제 이미지가 들어갈 자리. 지금은 이모지로 대신한다. */
const ImagePlaceholder = ({ emoji }: ImagePlaceholderProps) => {
  return (
    <FlexBox
      alignItems="center"
      justifyContent="center"
      sx={(theme) => ({
        width: '100%',
        aspectRatio: '4 / 3',
        borderRadius: 16,
        fontSize: 72,
        backgroundColor: theme.semantic.background.neutral.secondary,
      })}
      aria-hidden
    >
      {emoji}
    </FlexBox>
  );
};

export default ImagePlaceholder;
