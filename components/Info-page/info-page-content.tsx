import Image from 'next/image';

import { PrimaryButton } from '@/components/CommonComponents/Common-сomponents-style';
import {
  InfoPageWrapper,
  InfoPageImgWrapper,
  InfoPageTitle,
  InfoPageText,
} from '@/components/Info-page/Info-page-styles';

interface IInfoPageContentWithOnClick {
  imgSrc: string;
  imgAlt: string;
  titleText: string;
  mainText: string;
  buttonText: string;
  onClick: () => void;
  buttonLink?: string;
}
interface IInfoPageContentWithLink {
  imgSrc: string;
  imgAlt: string;
  titleText: string;
  mainText: string;
  buttonText?: string;
  onClick?: () => void;
  buttonLink?: string;
}

export default function InfoPageContent({
  imgSrc,
  imgAlt,
  titleText,
  mainText,
  buttonText,
  onClick,
  buttonLink,
}: IInfoPageContentWithOnClick | IInfoPageContentWithLink) {
  return (
    <InfoPageWrapper>
      <InfoPageImgWrapper>
        <Image src={imgSrc} width={320} height={320} alt={imgAlt} />
      </InfoPageImgWrapper>

      <InfoPageTitle variant="h1">{titleText}</InfoPageTitle>

      <InfoPageText>{mainText}</InfoPageText>

      {buttonText && (
        <PrimaryButton
          type="button"
          size="large"
          variant="contained"
          onClick={onClick}
          href={buttonLink}
        >
          {buttonText}
        </PrimaryButton>
      )}
    </InfoPageWrapper>
  );
}
