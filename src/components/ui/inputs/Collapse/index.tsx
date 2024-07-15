'use client';
import './collapse.scss';
import { useEffect, useState, ReactNode } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export interface CollapseProps {
    title: string,
    description?: string,
    box?: boolean,
    textColor?: string,
    iconColor?: string,
    backgroundColor?: string,
    children?: ReactNode,
    expandState?: boolean,
    alterExpandState: (expandState: boolean) => void
}

export default function Collapse(props: CollapseProps) {
    const { title, description, box, backgroundColor = '#FFFFFF', textColor = 'inherit', iconColor = 'inherit', children, expandState } = props;
    const [collapsState, setCollapseState] = useState(expandState || false);
    const [collapsClass, setCollapsClass] = useState<string>('');

    useEffect(() => {
        setCollapsClass(`collapsibleBase ${box ? 'collapsibleBaseBox' : ''}`);
    }, [box]);

    useEffect(() => {
        setCollapseState(expandState || false);
    }, [expandState]);

    const handleToggle = () => {
        props.alterExpandState(!collapsState);
        setCollapseState(!collapsState);
    }

    return (
        <div className={'container-collapse'}>
            <div className={`collapse-panel ${collapsState ? 'collapse-panel-active' : ''}`}>
                <button
                    type="button"
                    className={collapsClass}
                    onClick={handleToggle}
                    aria-expanded={collapsState}
                    style={{ color: textColor }}
                >
                    <span>{title}</span>
                    {collapsState ? <MdKeyboardArrowUp size={30} color={iconColor} /> :
                        <MdKeyboardArrowDown size={30} color={iconColor} />}
                </button>
            </div>
            <div className={`collapse-content ${collapsState ? 'collapse-content-active' : ''}`}>
                <div>
                    {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
                    {children}
                </div>
            </div>
        </div>
    );
}
