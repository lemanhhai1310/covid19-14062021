import React from 'react'
import NumberFormat from "react-number-format";

const Highlight = ({report}) => {
    const data = report && report.length ? report[report.length - 1] : []
    const summary = [
        {
            title: 'Số ca nhiễm',
            count: data.Confirmed,
        },
        {
            title: 'Số ca hồi phục',
            count: data.Recovered,
        },
        {
            title: 'Số ca tử vong',
            count: data.Deaths,
        },
    ]

    return (
        <div className="uk-child-width-1-3@m uk-grid uk-grid-match">
            {
                summary.map((item) => {
                    return (
                        <div key={item.title}>
                            <div className="uk-card uk-card-default uk-card-body">
                                <h3 className="uk-card-title">{item.title}</h3>
                                <p>
                                    <NumberFormat
                                        value={item.count}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        decimalScale={1}
                                        renderText={(value) => (
                                            <span>{value}</span>
                                        )}
                                    />
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Highlight