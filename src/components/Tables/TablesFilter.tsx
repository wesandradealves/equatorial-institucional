"use client";
import { useMemo } from "react";
import { Label, FilterWrapper, Select, Option, SelectWrapper } from "./style";

export default function TablesFilter(props: any) {  
    const _ = require("lodash");

    const options = useMemo(() => {
        return [
            '-',
            ..._.sortBy(_.uniq(props?.data.map((row: any) => {
                return row[props?.config?.field_filter_key[0]?.value].trim()
            })))
        ];
    }, [props]);      

    return (
        <FilterWrapper className="col-12 d-flex align-items-center">
            {props?.config?.field_key_label && props?.config?.field_key_label[0] && <Label>{props?.config?.field_key_label[0]?.value}</Label>}
            {options && <SelectWrapper>
                <Select onChange={(e: any) => props.onChange(e.target.value)}>
                    {options.map((v: any, i: number) => (
                        <Option key={i} value={v}>{v}</Option>
                    ))}    
                </Select>
            </SelectWrapper>}
        </FilterWrapper>
    );
};
