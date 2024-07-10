import { createContext } from "react";
import { LanguagesTypo } from '@/types/enums';

const LanguageProvider = createContext<LanguagesTypo | undefined>(undefined);

export default LanguageProvider;