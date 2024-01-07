import React from 'react'


export default function EducationForm(props) {
    const {eduData}= props;
  return (
    <>
      <div className='edit-educ-sec'>
        {" "}
        <h4>{eduData.degreeName},{eduData.fieldOfStudyName}<span><i className='fa fa-close'></i></span></h4>
        <p>{eduData.collegeName} | {eduData.yearofCompletion} <span>Edit</span></p>
      
      </div>
    </>
  );
}
