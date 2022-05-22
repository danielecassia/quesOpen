import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {}

export function SchoolNavigation({ }: Props) {
  return (
    <div>
      <div>school navigation</div>
      <Outlet />
    </div>
  )
}