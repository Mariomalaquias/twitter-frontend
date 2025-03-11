"use client"

import { faAdd, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

type Props = {
    password?: boolean
}

export const Teste = ({password}: Props) => {

    const [testeField, setTesteField] = useState('');
    const [ver, setVer] = useState(true);

    return(
        <div>
            <input 
            className="text-black"
                type={password && ver ? "password" : "test"}
                placeholder="Digite aqui"
                value={testeField}
                onChange={e => setTesteField(e.target.value)}
            />
            <FontAwesomeIcon icon={ver ? faEye : faEyeSlash} 
            onClick={() => setVer(!ver)}
            className="cursor-pointer"
            />
            <div>
                <h2>{testeField}</h2>
            </div>

        </div>
    )
}