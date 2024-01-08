import * as React from 'react';

import CloseIcon from '@mui/icons-material/Close';

import {
  ButtonMessageRestyled,
  CloseIconButtonRestyled,
  HeadingFormRestyled,
  MessageRestyled,
  SendingMessageBoxWrapper,
  SendingMessageContentBoxWrapper,
} from '../sign-up/style-sign-up-form';

interface Props {
  handleCloseForgotPasswordMessageModal: () => void;
  isMobile: boolean;
}

const ForgotPasswordMessage = ({
  handleCloseForgotPasswordMessageModal,
  isMobile,
}: Props) => {
  const ButtonSize = isMobile ? 'small' : 'large';
  return (
    <SendingMessageBoxWrapper>
      <SendingMessageContentBoxWrapper>
        <HeadingFormRestyled>We sent an email</HeadingFormRestyled>
        <CloseIconButtonRestyled
          aria-label="Close form"
          onClick={handleCloseForgotPasswordMessageModal}
        >
          <CloseIcon />
        </CloseIconButtonRestyled>
      </SendingMessageContentBoxWrapper>
      <MessageRestyled>
        We sent password recovery instructions to your email
      </MessageRestyled>
      <ButtonMessageRestyled
        variant="contained"
        id="reg-message-button"
        fullWidth
        size={ButtonSize}
        color="primary"
        onClick={handleCloseForgotPasswordMessageModal}
      >
        got it
      </ButtonMessageRestyled>
    </SendingMessageBoxWrapper>
  );
};
export default ForgotPasswordMessage;
