import React from 'react'


export default function EducationForm(props) {
    const {eduData}= props;
  return (
    <>
      
      {eduData && <div className='edit-educ-sec'>
      <h4>{eduData.degreeName[1]},{eduData.fieldOfStudy[1]}<span><i className='fa fa-close'></i></span></h4>
        <p>{eduData.clgName[1]} | {eduData.yearOfCompletion[1]} <span>Edit</span></p>

      </div>

  }
    </>
  );
}
