import React from 'react'


export default function EducationForm(props) {
  const { eduData } = props;
  return (
    <>
      {eduData && <div className='edit-educ-sec'>
        {" "}
        <h4>{eduData.degreeName},{eduData.fieldOfStudy}<span><i className='fa fa-close'></i></span></h4>
        <p>{eduData.universityName} | {eduData.yearOfCompletion} <span>Edit</span></p>

      </div>
      }

    </>
  );
}
