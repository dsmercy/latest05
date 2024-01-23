import React from 'react'
import useAccountStore from '../../store/useAccountStore';

export default function EducationForm(props) {
    const {eduData, onEditClick} = props;
    console.log("edu",eduData)
    const deleteEducationById = useAccountStore((state) => state.deleteEducationById);
 
  return (
    <>
      
      {eduData && (
        <div className="edit-educ-sec">
          <h4>
            {eduData?.degreeName},{eduData.fieldOfStudyName}
            <span
              id={eduData.id}
              onClick={() => deleteEducationById(eduData.id)}
            >
              <i className="fa fa-close"></i>
            </span>
          </h4>
          <p>
            {eduData.collegeName} | {eduData.yearofCompletion}{" "}
            <span id={eduData.id} onClick={() => onEditClick(eduData.id)}>
              Edit
            </span>
          </p>
        </div>
      )}
    </>
  );
}