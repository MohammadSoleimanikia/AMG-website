import { SettingsContext } from '@/context/SettingsContext';
import { useContext } from 'react';

// ----------------------------------------------------------------------

const useSettings = () => useContext(SettingsContext);

export default useSettings;