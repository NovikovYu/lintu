'use client';
import * as React from 'react';

import { Container, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';

import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import { setSigninPopupState } from '@/store/slices/signinPopupStateSlice';

import {
  ChangePasswordBox,
  ChangePasswordFormBox,
  ButtonRestyled,
  ChangePasswordTitle,
  ChangePasswordSubtitle,
} from './style-new-password-success';

export default function NewPasswordSuccess() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const ButtonSize = isMobile ? 'small' : 'large';

  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <ChangePasswordBox>
          <ChangePasswordFormBox>
            <ChangePasswordTitle variant="h1">
              Password was changed
            </ChangePasswordTitle>

            <ChangePasswordSubtitle>
              Password changed successfully. Sign In.
            </ChangePasswordSubtitle>

            <ButtonRestyled
              type="button"
              id="change-password-form-button"
              variant="contained"
              fullWidth
              size={ButtonSize}
              onClick={() => {
                dispatch(setSigninPopupState(true));
              }}
            >
              sign in
            </ButtonRestyled>
          </ChangePasswordFormBox>
        </ChangePasswordBox>
      </Container>
    </MainBox>
  );
}
