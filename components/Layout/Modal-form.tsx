import * as React from 'react';

import { Modal } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import ForgotPasswordForm from '@/feature/sign-in/forgot-password';
import ForgotPasswordMessage from '@/feature/sign-in/message-forgot-password';
import SignInForm from '@/feature/sign-in/sign-in-form';
import SignUpForm from '@/feature/sign-up/sign-up-form';

import {
  ForgotPasswordBoxRestyled,
  ForgotPasswordMessageBoxRestyled,
  SignInBoxRestyled,
  SignUpBoxRestyled,
} from './Header-style';

interface Props {
  handleCloseSignInModal: () => void;
  openFormSignInModal: boolean;
}

enum Modules {
  SIGN_IN = 'signIn',
  SIGN_IN_MESSAGE = 'signInMessage',
  FORGOT_PASSWORD = 'forgotPassword',
  FORGOT_PASSWORD_MESSAGE = 'forgotPasswordMessage',
  SIGN_UP = 'signUp',
}

interface OpenModalState {
  signIn: boolean;
  forgotPassword: boolean;
  forgotPasswordMessage: boolean;
  signUp: boolean;
}

const openModalStates = {
  [Modules.SIGN_IN]: false,
  [Modules.FORGOT_PASSWORD]: false,
  [Modules.FORGOT_PASSWORD_MESSAGE]: false,
  [Modules.SIGN_UP]: false,
};

const ModalForm = ({ handleCloseSignInModal, openFormSignInModal }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [openModalState, setOpenModalState] = React.useState<OpenModalState>({
    ...openModalStates,
  });

  const handleOpenModal = (
    name: keyof typeof openModalStates,
    value: boolean,
  ) => {
    setOpenModalState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Modal
        open={openFormSignInModal}
        onClose={handleCloseSignInModal}
        aria-labelledby="sign-in"
        aria-describedby="sign-in-form"
      >
        <SignInBoxRestyled>
          <SignInForm
            handleCloseSignInModal={handleCloseSignInModal}
            handleOpenSignUpModal={() => handleOpenModal(Modules.SIGN_UP, true)}
            handleOpenForgotPasswordModal={() =>
              handleOpenModal(Modules.FORGOT_PASSWORD, true)
            }
            isMobile={isMobile}
          />
        </SignInBoxRestyled>
      </Modal>
      <Modal
        open={openModalState.forgotPassword}
        onClose={() => handleOpenModal(Modules.FORGOT_PASSWORD, false)}
        aria-labelledby="forgot-password"
        aria-describedby="forgot-password-form"
      >
        <ForgotPasswordBoxRestyled>
          <ForgotPasswordForm
            handleCloseForgotPasswordModal={() =>
              handleOpenModal(Modules.FORGOT_PASSWORD, false)
            }
            handleOpenForgotPasswordMessageModal={() =>
              handleOpenModal(Modules.FORGOT_PASSWORD_MESSAGE, true)
            }
            isMobile={isMobile}
          />
        </ForgotPasswordBoxRestyled>
      </Modal>
      <Modal
        open={openModalState.forgotPasswordMessage}
        onClose={() => handleOpenModal(Modules.FORGOT_PASSWORD_MESSAGE, false)}
        aria-labelledby="forgot-password"
        aria-describedby="forgot-password-form"
      >
        <ForgotPasswordMessageBoxRestyled>
          <ForgotPasswordMessage
            handleCloseForgotPasswordMessageModal={() =>
              handleOpenModal(Modules.FORGOT_PASSWORD_MESSAGE, false)
            }
            isMobile={isMobile}
          />
        </ForgotPasswordMessageBoxRestyled>
      </Modal>
      <Modal
        open={openModalState.signUp}
        onClose={() => handleOpenModal(Modules.SIGN_UP, false)}
        aria-labelledby="sign-up"
        aria-describedby="sign-up-form"
      >
        <SignUpBoxRestyled>
          <SignUpForm
            handleCloseSignUpModal={() =>
              handleOpenModal(Modules.SIGN_UP, false)
            }
            isMobile={isMobile}
          />
        </SignUpBoxRestyled>
      </Modal>
    </>
  );
};
export default ModalForm;
