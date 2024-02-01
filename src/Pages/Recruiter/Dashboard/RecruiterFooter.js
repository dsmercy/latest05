import React from 'react'

const RecruiterFooter = () => {
  const currentYear = new Date().getFullYear()
  console.log(currentYear);

  return (
    <>
      <div className='rec-footer'>
        <p>{currentYear} copyright: Poppin’ Job.com</p>
      </div>
    </>
  )
}

export default RecruiterFooter
