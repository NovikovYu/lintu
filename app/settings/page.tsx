'use client';
import { useRef, useEffect } from 'react';

import { Container, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import { selectAccessKey } from '@/store/slices/sessionSlice';

import {
  SettingsTitle,
  SettingsSubtitle,
  SettingsCardTitle,
  SettingsCardsList,
  SettingsCardItem,
} from './settings-style';

export default function Portfolios() {
  const theme = useTheme();
  const accessKey = useSelector(selectAccessKey);
  const router = useRouter();
  const accessKeyRef = useRef(accessKey);

  useEffect(() => {
    accessKeyRef.current = accessKey;
  }, [accessKey]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!accessKeyRef.current) {
        router.push('/');
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <SettingsTitle variant="h1">Settings</SettingsTitle>

        <SettingsSubtitle>
          Change your settings, personal information or add a withdrawal account
        </SettingsSubtitle>

        <SettingsCardsList>
          <SettingsCardItem>
            <SettingsCardTitle variant="h2">Personal data</SettingsCardTitle>
          </SettingsCardItem>

          <SettingsCardItem>
            <SettingsCardTitle variant="h2">
              Password settings
            </SettingsCardTitle>
          </SettingsCardItem>

          <SettingsCardItem>
            <SettingsCardTitle variant="h2">
              Withdrawal account
            </SettingsCardTitle>
          </SettingsCardItem>
        </SettingsCardsList>
      </Container>
    </MainBox>
  );
}
