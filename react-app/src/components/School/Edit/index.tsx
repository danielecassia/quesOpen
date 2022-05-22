import React from 'react'
import { useParams } from 'react-router-dom';

type Props = {}

export function SchoolEdit({}: Props) {
  const { schoolid } = useParams();
  return (
    <div>school edit id={schoolid}</div>
  )
}