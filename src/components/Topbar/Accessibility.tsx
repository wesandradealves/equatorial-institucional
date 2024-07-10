import { useEffect, useState } from "react";
import { Container, TariffBand, Text, Accessibility, Ico } from "./style";
import { HttpService } from "@/services";
import { HeaderTypo } from "@/types/enums";
import AccessibilityIcon from '@mui/icons-material/Accessibility';

export default function AccessibilityShortcut() {
  return (
    <Accessibility className="accessibility">
      <Ico className="d-flex align-items-center justify-content-center">
        <AccessibilityIcon />
      </Ico>
    </Accessibility>
  );
};