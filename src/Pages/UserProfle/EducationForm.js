import React from 'react'
import useAccountStore from '../../store/useAccountStore';


export default function EducationForm(props) {
    const {eduData, onEditClick,eduDetails} = props;
    const deleteEducationById = useAccountStore((state) => state.deleteEducationById);
    console.log(eduDetails)
  return (
    <>
    {/* {eduDetails? <div className='edit-educ-sec'>
      <h4>{eduDetails.degreeName},{eduDetails.degreeName}<span id={eduDetails.id} onClick={()=>deleteEducationById(eduDetails.id)}><i className='fa fa-close'></i></span></h4>
        <p>{eduDetails.collegeName} | {eduDetails.yearofCompletion} <span id={eduDetails.id} onClick={()=>onEditClick(eduDetails.id)}>Edit</span></p>

      </div>:""

  } */}
  
      {eduData && <div className='edit-educ-sec'>
      <h4>{eduData.degreeName[1]},{eduData.fieldOfStudy[1]}<span id={eduData.id} onClick={()=>deleteEducationById(eduData.id)}><i className='fa fa-close'></i></span></h4>
        <p>{eduData.clgName[1]} | {eduData.yearOfCompletion[1]} <span id={eduData.id} onClick={()=>onEditClick(eduData.id)}>Edit</span></p>

      </div>

  }
    </>
  );
}