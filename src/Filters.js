import React, {useState} from 'react'

function Filters(props) {

    const { filterName, data, filterData } = props;
    return (
        <>
            {
                (data && data.length > 0) &&
                <div className="filter_box">
                    <h4>{filterName}</h4>
                    <ul>
                        {data.map((item, i) =>
                            <li key={i}>
                                <input type="checkbox" onChange={(e)=> filterData(e, item, filterName)} id={item} />
                                <label htmlFor={item}>{item}</label>
                            </li>
                        )}
                    </ul>
                </div>
            }
        </>
    )
}

export default React.memo(Filters);
