import React from 'react'
import LineChart from "./Charts/LineChart";
import HighMaps from "./Charts/HighMaps";

const Summary = () => {
    return (
        <div className="uk-grid">
            <div className="uk-width-2-3@m">
                <LineChart/>
            </div>
            <div className="uk-width-expand">
                <HighMaps/>
            </div>
        </div>
    )
}
export default Summary