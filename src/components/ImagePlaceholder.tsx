import { useState } from 'react';
import { FlexBox } from '@montage-ui/core';

type ImagePlaceholderProps = {
  /** public 폴더 기준 이미지 경로 */
  src: string;
  alt: string;
  /** 이미지 파일이 없을 때 대신 보여줄 이모지 */
  emoji: string;
};

/** 4:3 이미지 영역. 이미지 파일이 없으면 이모지를 보여준다. */
const ImagePlaceholder = ({ src, alt, emoji }: ImagePlaceholderProps) => {
  const [failedSrc, setFailedSrc] = useState<string>();
  const showImage = failedSrc !== src;

  return (
    <FlexBox
      alignItems="center"
      justifyContent="center"
      sx={(theme) => ({
        width: '100%',
        aspectRatio: '4 / 3',
        borderRadius: 16,
        overflow: 'hidden',
        fontSize: 72,
        backgroundColor: theme.semantic.background.neutral.secondary,
      })}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailedSrc(src)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <span aria-hidden>{emoji}</span>
      )}
    </FlexBox>
  );
};

export default ImagePlaceholder;
