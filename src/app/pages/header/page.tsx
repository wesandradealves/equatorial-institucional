"use client";
import "./page.scss";
import Accessibility from "@/components/ui/header/accessibility/accessibility";
import Logo from "@/components/ui/header/logo/logo";
import Status from "@/components/ui/header/status/status";
import TextLink from "@/components/ui/header/text-link/text-link";
import Toggle from "@/components/ui/header/togglecx";
import React, { useState } from "react";

export default function Header() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <div className="component">
        <h1>Componente de Accessibility</h1>
        <div className="template">
          <Accessibility></Accessibility>
        </div>
      </div>

      <div className="component">
        <h1>componente de Logo</h1>
        <div className="template">
          <Logo></Logo>
        </div>
      </div>
      <div className="component">
        <h1>componente de Status</h1>
        <div className="template">
          <Status></Status>
        </div>
      </div>

      <div className="component">
        <h1>componente de Text Link</h1>
        <div className="template">
          <TextLink label="Text Link" url="https://nextjs.org/"></TextLink>
          <TextLink
            label="Text Link"
            url="https://nextjs.org/"
            icon="add_circle_outline"
          ></TextLink>
          <TextLink
            label="Text Link"
            url="https://nextjs.org/"
            icon="add_circle"
            position="left"
          ></TextLink>
        </div>
      </div>

      <div className="component">
        <h1>componente de Toggle</h1>
        <div className="template">
          <Toggle
            rounded={true}
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          />
        </div>
      </div>
    </>
  );
}
