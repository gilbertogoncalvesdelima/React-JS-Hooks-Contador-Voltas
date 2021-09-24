import React from 'react'


const MostraVoltas = (props) => {
    const v = props.voltas
    const nVoltas = v < 2 ? 'Volta':'Voltas'
    return (
      <p className='voltas'>
        <span>
            {v}<br />
        </span>
        {nVoltas}    
      </p>
    )
  }

export default MostraVoltas