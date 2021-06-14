import React, {useEffect, useState} from 'react'
import 'uikit/dist/css/uikit.min.css'
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import {getCountries, getReportByCountry} from "./api";

const App = () => {
    const [countries,setCountries] = useState([])
    const [report,setReport] = useState([])
    const [selectedCountryId,setSelectedCountryId] = useState('')

    useEffect(() => {
        getCountries().then(res => {
            setCountries(res.data)
        })
    },[])

    const handleOnChange = (e) => {
        setSelectedCountryId(e.target.value)
    }

    useEffect(() => {
        if (selectedCountryId){
            const {Slug} = countries.find(country => country.ISO2.toLowerCase() === selectedCountryId)

            getReportByCountry(Slug).then(res => {
                setReport(res.data)
                console.log(res.data)
            })
        }
    },[countries,selectedCountryId])

    return (
        <div className="uk-section uk-background-muted">
            <div className="uk-container uk-container-large">
                <div className="uk-card uk-card-default uk-card-body">
                    <CountrySelector countries={countries} handleOnChange={handleOnChange} />
                    <Highlight report={report}/>
                    <Summary/>
                </div>
            </div>
        </div>
    )
}
export default App