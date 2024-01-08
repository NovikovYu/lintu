import React from 'react';

import { SvgIcon, SvgIconProps } from '@mui/material';

export default function WarningIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      {...props}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      style={{
        width: 22,
        height: 22,
      }}
    >
      <path
        d="M11.0001 5.94925L17.9026 17.8751H4.09758L11.0001 5.94925ZM11.0001 2.29175L0.916748 19.7084H21.0834L11.0001 2.29175Z"
        fill="#ED6C02"
      />
      <path
        d="M11.9167 15.1251H10.0834V16.9584H11.9167V15.1251Z"
        fill="#ED6C02"
      />
      <path
        d="M11.9167 9.62508H10.0834V14.2084H11.9167V9.62508Z"
        fill="#ED6C02"
      />
    </SvgIcon>
  );
}
