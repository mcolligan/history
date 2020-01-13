import React from 'react';

const HistoryList = (props) => {
  console.log('--', props)
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"><u>{props.info.date}</u></h5>
          <p className="card-text">{props.info.description}</p>
        </div>
      </div>
    </div>
  )
}

export default HistoryList;