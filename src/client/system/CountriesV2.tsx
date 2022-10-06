import  React,  { useEffect, useState } from "react"
import { Geography } from "./Geography"
import { Utils } from "./Utils"

const CountriesV2: React.FC = () => {
    const [countryOptions, setCountryOptions] = useState<JSX.Element[]>([]);
    
    useEffect(() => {
        Geography.GetCountryListNamesOnly().then((model) => {
            if (model)
            {
                let optionElements: JSX.Element[] = [];
                optionElements = model?.map((country, index) => {
                    let key = `country-${Utils.GenerateRandomID()}`;
                    return (
                        <option key={key} value={country}>{country}</option>
                    )
                });

                setCountryOptions(optionElements);
            }
            
        })
    }, [])

    return (
        <>
        {
            countryOptions
        }
        </>
    )
}

export default CountriesV2;