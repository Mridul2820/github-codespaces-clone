import React from 'react'

const SectionEnv = ({ data }) => {
  return (
<div className="my-16 pb-16 mx-auto max-w-7xl h-auto">
      <div className="-mx-6 flex items-center">
        <div className="px-6 py-4 w-1/2 -mt-[7%]">
          <div className="pr-5">
            <h3 className="mb-4 text-5xl font-extrabold " 
            dangerouslySetInnerHTML={{ __html: data.title }}
            />
            <p className="text-gh-secondary text-xl mb-5 max-w-[ 40.5rem]"
            dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>
        </div>

        <div className="px-6 py-4 w-1/2 relative self-start">
          
        </div>
      </div>
    </div>
  )
}

export default SectionEnv
