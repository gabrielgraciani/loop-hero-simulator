import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IModalProps {
  isActive: boolean;
  setIsActive?: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
  canClose?: boolean;
}

export interface IStyledModalProps {
  isActive: boolean;
}
