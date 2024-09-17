"use client";
import { fetchData } from "@/utils";
import { SearchBar, SearchField, Submit, Icon, Filter } from "./style";
import {
    Label,
    FilterWrapper,
    Select,
    Option,
    SelectWrapper,
} from "@/components/Tables/style";
import { useEffect, useState } from "react";

export default function FaqFilter(props: any, onFilter: any) {
    const [data, setData] = useState<any>(null);
    const [queryUrl, setQueryUrl] = useState<any>(['/api/busca_tipo?type=faq']);
    const [s, setSearchQuery] = useState<string>('');
    const [t, setTaxonomy] = useState<string>('');
    const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
    const debounceDuration = 1000;

    useEffect(() => {
        props?.onFilter(!s && !t ? null : queryUrl.join("&"));
    }, [queryUrl]);    

    const handleSearch = () => {
        if (s && !queryUrl.some((e: any) => e.includes(`s=${s}`))) {
            setQueryUrl([...queryUrl, `s=${s}`]);
        } else {
            setQueryUrl(queryUrl.filter((v: any) => !v.includes(`s=`)))
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);

        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        const timeout = setTimeout(() => {
            handleSearch();
        }, debounceDuration);

        setTypingTimeout(timeout);
    };

    useEffect(() => {
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        const timeout = setTimeout(() => {
            handleSearch();
        }, debounceDuration);

        setTypingTimeout(timeout);

        return () => {
            if (typingTimeout) {
                clearTimeout(typingTimeout);
            }
        };
    }, [s]);

    const handleTaxonomy = (t: any) => {
        setTaxonomy(t);

        if (t && !queryUrl.some((e: any) => e.includes(`cat=${t}`))) {
            setQueryUrl([...queryUrl, `cat=${t}`]);
        } else {
            setQueryUrl(queryUrl.filter((v: any) => !v.includes(`cat=`)))
        }
    };

    useEffect(() => {
        if (!data) {
            fetchData(`/api/taxonomy/faq`)
                .then((response: any) => {
                    setData(response);
                })
                .catch(console.error);
        }
    }, [data]);

    return (
        <>
            {data && (
                <Filter className={props?.className}>
                    <SearchBar className="col-12 d-flex align-items-center mb-5">
                        <SearchField
                            onChange={handleInputChange}
                            placeholder="Procurar por tópico ou tema"
                            className="w-100"
                        />
                        <Submit className="flex-fill">
                            <Icon className="fa-solid fa-magnifying-glass"></Icon>
                        </Submit>
                    </SearchBar>

                    <FilterWrapper className="col-12 d-flex align-items-center">
                        <Label>Filtrar perguntas por</Label>
                        <SelectWrapper>
                            <Select onChange={(e) => handleTaxonomy(e.target.value)}>
                                <Option key={0} value="">
                                    -
                                </Option>

                                {data.map((term: any, i: number) => (
                                    <Option key={i + 1} value={term?.tid[0]?.value}>
                                        {term?.name[0]?.value}
                                    </Option>
                                ))}
                            </Select>
                        </SelectWrapper>
                    </FilterWrapper>
                </Filter>
            )}
        </>
    );
}
