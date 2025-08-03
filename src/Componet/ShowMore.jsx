import React from 'react'
import { useState } from 'react';
function ShowMore({description}) {

    const [showMore, setShowMore] = useState(false);

  
  return (
    <div>
      <div className="App">
      <p>
        {showMore ? description : `${description.substring(0, 50)}`}
      </p>
      <button className="btn" onClick={() => setShowMore(!showMore)}> {showMore ? 'Show less' : 'Show more'}</button>
    </div>
    </div>
  )
}

export default ShowMore
