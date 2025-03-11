"use client"

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Input } from "./input"
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
    defaultValue?: string;
    hideOnSearch?: boolean;
}
export const SearchInput = ({defaultValue, hideOnSearch}: Props) => { 
    const router = useRouter();
    const pathname = usePathname()
    const [searchInput, setSearchInput] = useState(defaultValue ?? ''); // Define o estado do input, iniciando com defaultValue ou vazio

    const handleSearchEnter = () => {
        if(searchInput) {
            router.push('/search?q=' + encodeURIComponent(searchInput)); // Redireciona para a página de busca com o termo digitado na URL
        }
    }

    if (hideOnSearch && pathname === '/search') return null; 
    return (
        <Input 
            placeholder="Buscar"
            icon={faMagnifyingGlass}
            filled
            value={searchInput}
            onChange={t => setSearchInput(t)}
            onEnter={handleSearchEnter}
        />
    )
}