import React from 'react'

function JobPostDescription() {
  return (
    <>
      <div className="job-post-describe">
        <h4>Describe the job</h4>
        <h5>Job Description <span className="text-danger">*</span></h5>
        <p>Describe the responsibilities of the role, required work experience,skills and education.</p>

        <div className="cont-editor">
          <div id="editor" contenteditable="false">
            <section id="toolbar">
              <div id="bold" className="icon fa fa-bold"></div>
              <div id="italic" className="icon fa fa-italic"></div>
              <div id="createLink" className="icon fa fa-link"></div>
              <div id="insertUnorderedList" className="icon fa fa-list"></div>
              <div id="insertOrderedList" className="icon fa fa-list-ol"></div>
              <div id="justifyLeft" className="icon fa fa-align-left"></div>
              <div id="justifyRight" className="icon fa fa-align-right"></div>
              <div id="justifyCenter" className="icon fa fa-align-center"></div>
              <div id="justifyFull" className="icon fa fa-align-justify"></div>
            </section>

            <div id="page" contenteditable="true">
              <p id="page-content"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobPostDescription