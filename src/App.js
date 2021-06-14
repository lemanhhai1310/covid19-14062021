import React, {useEffect, useState} from 'react'
import 'uikit/dist/css/uikit.min.css'
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import {getCountries} from "./api";

const App = () => {
    const [countries,setCountries] = useState([])

    useEffect(() => {
        getCountries().then(res => {
            setCountries(res.data)
        })
    },[])

    return (
        <div className="uk-section uk-background-muted">
            <div className="uk-container uk-container-large">
                <div className="uk-card uk-card-default uk-card-body">
                    <CountrySelector countries={countries}/>
                    <Highlight/>
                    <Summary/>
                </div>
            </div>
        </div>
    )
}
export default App