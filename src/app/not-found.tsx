"use client";

import ConfigProvider from "@/context/config";
import { Suspense, useContext, useEffect } from "react";
import Template from "./site/template";
import { ErrorPage, Mask } from "./style";
import LanguageProvider from "@/components/LanguageSwitcher/context";

function NotFoundPageContent() {
    const { config } = useContext<any>(ConfigProvider);
    const { lang } = useContext<any>(LanguageProvider);

    useEffect(() => {
        const el = document.body;
        el.classList.add("error-page");
    }, []);    

    return (
        <>
            {config && lang && (
                <>
                    <title>{`${config?.site_name} - 404 Página não encontrada`}</title>  
                    <ErrorPage className="overflow-hidden d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex flex-column justify-content-center align-items-center" 
                             dangerouslySetInnerHTML={{ __html: config?.error_page[lang?.key.replace("-", "_") || 'pt_br']?.value }} />
                        <Mask 
                            width="1920" height="930" viewBox="0 0 1920 930" fill="none" xmlns="http://www.w3.org/2000/Mask">
                            <path d="M1920 930V0C1260.76 346.549 661.963 -0.360321 0 286.389L6.5096e-05 930H1920Z" fill="#F6F8FF"/>
                        </Mask>                  
                    </ErrorPage>
                </>
            )}
        </>
    );
}

export default function NotFoundPage() {
    return (
        <Template>
            <Suspense fallback={<div>Loading...</div>}>
                <NotFoundPageContent />
            </Suspense>
        </Template>
    );
}
