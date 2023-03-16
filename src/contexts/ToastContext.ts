import {createContext} from 'react';
import {ToastContextType} from '../@types/contexts/types';

const ToastContext = createContext<ToastContextType | null>(null);

export default ToastContext;
