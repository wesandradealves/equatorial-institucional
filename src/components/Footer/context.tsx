import { createContext } from "react";
import { NavigationTypo } from '@/types/enums';

const NavigationProvider = createContext<NavigationTypo | undefined>(undefined);

export default NavigationProvider;