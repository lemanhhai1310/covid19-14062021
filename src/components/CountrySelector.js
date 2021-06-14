import React from 'react'

const CountrySelector = ({countries}) => {
    return (
        <>
            <div className="uk-margin">
                <div uk-form-custom="target: > * > span:first-child">
                    <select>
                        {
                            countries.map((item) => {
                                return <option key={item.ISO2} value={item.ISO2.toLowerCase()}>{item.Country}</option>
                            })
                        }
                    </select>
                    <button className="uk-button uk-button-default" type="button" tabIndex="-1">
                        <span></span>
                        <span uk-icon="icon: chevron-down"></span>
                    </button>
                </div>
            </div>
        </>
    )
}
export default CountrySelector