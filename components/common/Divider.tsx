import React from 'react';
import { DividerBox } from './styles';

type DividerProps = {
  label?: string;
};
export default function Divider({ label }: DividerProps) {
  return (
    <DividerBox>
      <span>{label}</span>
      <div className="line" />
    </DividerBox>
  );
}
