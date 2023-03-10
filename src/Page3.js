import React from 'react'

import shape1 from "./images/shape1.png"
import shape2 from "./images/shape2.png"
import shape3 from "./images/shape3.png"
import skill1 from "./images/skill1.png"
import skill2 from "./images/skill2.png"
import line from "./images/line1.png"

const sampletext = "Lorem mpsum dolor smt amet, consectetur admpmscmng elmt, sed do emusmod tempor mncmdmdunt ut labore et dolore magna almqua. Ut enmm ad mmnmm venmam, qums nostrud exercmtatmon ullamco laborms nmsm ut almqump ex ea commodo.Lorem mpsudolor smt amet, consectetur admpmscmng elmt, sed do emusmod tempor mncmdmdunt ut labore et dolore magna almqua. Ut enmm ad mmnmm venmam, qums nostrud exercmtatmon ullamco laborms nmsm ut almqump ex ea commodo venmam, qums nostrud exercmtatmon."

function Page3() {
  return (
    <>
      <div className=" absolute parent-grid grid grid-cols-2 gap-6 border-solid border-black h-auto border-4 pr-20 pl-16 pt-28 mx-48 font-sans">
        <img src={shape1} alt="shape" className="absolute top-0 left-0 z-0 w-96" />
        <img src={shape2} alt="shape" className="absolute bottom-0 z-0" />
        <img src={shape3} alt="shape" className="absolute bottom-0 right-0 z-0" />



        <div className="language row-span-1 h-min font-medium my-10">
          <h2 className="font-bold text-4xl mb-4">Language</h2>
          <h2 className="font-bold text-xl my-3">English</h2>
          <img src={skill1} alt="skill-meter" />
          <h2 className="font-bold text-xl my-3 ">Hindi</h2>
          <img src={skill2} alt="skill-meter" />
          <h2 className="font-bold text-xl my-3 ">French</h2>
          <img src={skill1} alt="skill-meter" />
        </div>


        <div className="projects row-span-4 mt-10">
          <h1 className="font-bold text-4xl mb-4">Projects</h1>
          <h3 className="font-semibold text-3xl my-2">Project Title</h3>
          <p className="my-4 font-normal">Jan 2022 - Ongoing</p>
          <h3 className="font-bold text-2xl my-2">Client name</h3>
          <p className=" mt-2 font-medium">{sampletext}</p>
          <img src={line} alt="blue-line"  className="my-8 h-1"></img>
          <h3 className="font-semibold text-3xl my-2">Project Title</h3>
          <p className="my-4 font-normal">Jan 2020 - Jan 2021</p>
          <h3 className="font-bold text-2xl my-2">Client name</h3>
          <p className=" mt-2 font-medium">{sampletext}</p>
        </div>




        <div className="internships row-span-2 w-72 mt-4 mr-6 h-min font-medium">
          <h2 className="font-bold text-4xl mb-2">Internships</h2>
          <h2 className="font-semibold text-2xl mb-2">Internship 1</h2>
          <p className="my-3 font-normal">Jan 2019 - Jun 2019</p>
          <p className="font-semibold">Company 1 | City | Country</p>
          <p className="my-3 font-normal">URL : www.example1.com</p>
          <ul className="list-disc ml-8 my-2">
            <li>It's very important for the patient to be patient, and the patient will be followed.</li>
            <li>It's very important for the patient to be patient, and the patient will be followed.</li>
          </ul>
        </div>


        <div className="interests row-span-1 h-min mt-1 z-10">
          <h2 className="font-bold text-4xl mt-6 mb-6">Personal Interests</h2>
          <ul className="list-disc ml-8  my-2">
            <li className="my-1 font-medium">It's very important.</li>
            <li className="my-1 font-medium">It's very important.</li>
            <li className="my-1 font-medium">It's very important.</li>
            <li className="my-1 font-medium">It's very important.</li>
            <li className="my-1 font-medium">It's very important.</li>
            <li className="my-1 font-medium">It's very important.</li>
          </ul>
        </div>

        <div className="row-span-2"></div>

        <div className="training row-span-2 mb-20 mr-6 font-medium">
          <h2 className="font-bold text-4xl mb-4">Training</h2>
          <h2 className="font-semibold text-2xl mb-2">Training Title</h2>
          <p className="my-2 font-normal">Jan 2018 - Jun 2018</p>
          <p className="font-semibold">Institution</p>
          <p className=" mt-2 font-medium">{sampletext}</p>
        </div>
      </div>
    </>
  )
}

export default Page3