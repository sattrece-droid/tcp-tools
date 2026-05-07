import { useContext } from 'react';
import { IpDataContext } from '../context/IpDataContext';

export function useIpDataContext() {
  return useContext(IpDataContext);
}
