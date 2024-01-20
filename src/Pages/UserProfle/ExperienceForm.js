import React, { useEffect, useState } from "react";
import useAccountStore from "../../store/useAccountStore";

export default function ExperienceForm(props) {
  const {expData,handleEditClick} = props;
  console.log("expData",expData)
  const deleteExperiencById = useAccountStore((state) => state.deleteExperiencById);
 
  return (
    <>
    {/* data coming from the Store */}
    {expData && (
      <div className="edit-educ-sec">
        <h4>
          {expData.companyName},{expData.jobDescription}
          <span onClick={()=>deleteExperiencById(expData.id)}>
            <i className="fa fa-close"></i>
          </span>
        </h4>
        <p>
          {expData.yearOfExperience} | {expData.jobTitle}
          <span onClick={()=>handleEditClick(expData.id)}>Edit</span>
        </p>
      </div>
    )}
  </>
  );
}
