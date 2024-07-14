"use client";

import React, { useState, useEffect, ReactElement } from 'react';

export default function DynamicComponent(props: any) {
  const [importedComponent, setImportedComponent] = useState<ReactElement | null>(null);

  const importComponent = async () => {
    const module = await import(`@/components/${props?.componentName}/${props?.componentName}`);
    const DynamicComponent = module.default;
    setImportedComponent(<DynamicComponent data={props?.data} />);
  };  

  useEffect(() => {
    importComponent();
  }, []);

  return (importedComponent && <>{importedComponent}</>);
};