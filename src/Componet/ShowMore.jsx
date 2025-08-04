import React from 'react'
import { useState } from 'react';
function ShowMore({description}) {

    const [showMore, setShowMore] = useState(false);

  
  return (
    <div>
      <div >
      <p>
        {showMore ? description : `${description.substring(0, 50)}`}
      </p>
      <button  onClick={() => setShowMore(!showMore)}> {showMore ? 'Show less' : 'Show more'}</button>
    </div>
    </div>
  )
}

export default ShowMore
