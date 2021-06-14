import React from 'react'

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
            <div>
                <div className="uk-card uk-card-default uk-card-body">
                    <h3 className="uk-card-title">Default</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div>
                <div className="uk-card uk-card-primary uk-card-body">
                    <h3 className="uk-card-title">Default</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div>
                <div className="uk-card uk-card-secondary uk-card-body">
                    <h3 className="uk-card-title">Default</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}
export default Highlight