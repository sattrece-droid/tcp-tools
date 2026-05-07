import { createContext } from 'react';
import { useIpData } from '../hooks/useIpData';

// eslint-disable-next-line react-refresh/only-export-components
export const IpDataContext = createContext(null);

export function IpDataProvider({ children }) {
  const value = useIpData();
  return <IpDataContext.Provider value={value}>{children}</IpDataContext.Provider>;
}
