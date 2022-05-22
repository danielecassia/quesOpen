import React from 'react'
import { useParams } from 'react-router-dom';

type Props = {}

export function SchoolProfile({ }: Props) {
  const { schoolid } = useParams();
  return (
    <div>schoolprofile id={schoolid}</div>
  )
}