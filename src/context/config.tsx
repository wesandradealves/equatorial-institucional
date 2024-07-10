import { createContext } from "react";
import { ConfigTypo, NavTypo } from '@/types/enums';

const ConfigProvider = createContext<ConfigTypo | undefined>(undefined);

export default ConfigProvider;