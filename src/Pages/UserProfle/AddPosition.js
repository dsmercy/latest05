import React from 'react'

export const AddPosition = (props) => {
  const {expData}= props;
  return (
  <>
   <>
      <div className='edit-educ-sec'>
        {" "}
        <h4>{expData.jobTitle}<span><i className='fa fa-close'></i></span></h4>
        <p>{expData.companyName} | {expData.endDate} <span>Edit</span></p>
      
      </div>
    </>
  </>
  )
}
