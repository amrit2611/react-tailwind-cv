import React from 'react'

import shape1 from "./images/shape1.png";
import shape2 from "./images/shape2.png";
import shape3 from "./images/shape3.png";
import line from "./images/line1.png";
import skill from "./images/skill3.png"

const sampletext = "Lorem mpsum dolor smt amet, consectetur admpmscmng elmt, sed do emusmod tempor mncmdmdunt ut labore et dolore magna almqua. Ut enmm ad mmnmm venmam, qums nostrud exercmtatmon ullamco laborms nmsm ut almqump ex ea commodo.Lorem mpsudolor smt amet, consectetur admpmscmng elmt, sed do emusmod tempor mncmdmdunt ut labore et dolore magna almqua. Ut enmm ad mmnmm venmam, qums nostrud exercmtatmon ullamco laborms nmsm ut almqump ex ea commodo venmam, qums nostrud exercmtatmon."

function Page2() {
  return (
    <>
      <div className=" absolute parent-grid grid grid-cols-2 gap-6 border-solid border-black h-auto border-4 pr-20 pl-16 pt-28 mx-48 font-sans">
        <img src={shape1} alt="shape" className="absolute top-0 left-0 z-0 w-96" />
        <img src={shape2} alt="shape" className="absolute bottom-0 z-0" />
        <img src={shape3} alt="shape" className="absolute bottom-0 right-0 z-0" />



        <div className="techskills row-span-1 font-medium my-10">
          <h2 className="font-bold text-4xl mb-6">Technical Skills</h2>
          <h2 className="font-bold text-xl my-3">Technical Skill 1</h2>
          <img src={skill} alt="skill-meter" />
          <h2 className="font-bold text-xl my-3 ">Technical Skill 1</h2>
          <img src={skill} alt="skill-meter" />
          <h2 className="font-bold text-xl my-3 ">Technical Skill 1</h2>
          <img src={skill} alt="skill-meter" />
        </div>


        <div className="experience row-span-3 mt-5 mb-20">
          <h1 className="font-bold text-4xl mb-6">Work Experience</h1>
          <h3 className="font-semibold text-3xl my-2">Senior Graphic Designer</h3>
          <p className="my-4 font-normal">Jan 2022 - Present</p>
          <h3 className="font-bold text-2xl my-2">Invision Company | City | Country</h3>
          <p className=" mt-2 font-medium">{sampletext}</p>
          <img src={line} alt="blue-line"  className="my-8 h-1"></img>
          <h3 className="font-semibold text-3xl my-2">Junior Graphic Designer</h3>
          <p className="my-4 font-normal">Jan 2020 - Jan 2021</p>
          <h3 className="font-bold text-2xl my-2">Invision Company | City | Country</h3>
          <p className=" mt-2 font-medium">{sampletext}</p>
          <img src={line} alt="blue-line" className="my-8 h-1"></img>
          <h3 className="font-semibold text-3xl my-2">Graphic Designer</h3>
          <p className="my-4 font-normal">Jan 2018 - Jan 2020</p>
          <h3 className="font-bold text-2xl my-2">Invision Company | City | Country</h3>
          <p className=" mt-2 font-medium">{sampletext}</p>
        </div>




        <div className="awards row-span-1 my-2 mr-6 font-medium">
          <h2 className="font-bold text-4xl mb-4">Awards</h2>
          <h2 className="font-semibold text-2xl mb-2">Award 1</h2>
          <p className="my-2 font-normal">Jan 2019</p>
          <p className="font-semibold">Company 1</p>
          <p className="my-2 font-normal">URL : www.example1.com</p>
          <ul className="list-disc ml-8 my-2"><li>It's very important for the patient to be patient, and the patient will be followed.</li></ul>
          <h2 className="font-semibold text-2xl mb-2 mt-4">Award 2</h2>
          <p className="font-normal my-2">Dec 2018</p>
          <p className="font-semibold">Company 2</p>
          <p className="my-2 font-normal">URL : www.example1.com</p>
          <ul className="list-disc ml-8 my-2"><li>It's very important for the patient to be patient, and the patient will be followed.</li></ul>
        </div>


        <div className="certifications row-span-1 my-4 mb-10 z-10">
          <h2 className="font-bold text-4xl mt-6">Certifications</h2>
          <h2 className="font-semibold text-2xl mt-4">Azure Fundamentals</h2>
          <p className="my-2 font-normal">Jan 2019</p>
          <p className="font-semibold">Udemy</p>
          <p className="my-2 font-normal">URL : www.example1.com</p>
          <ul className="list-disc ml-8  my-2"><li>It's very important for the patient to be patient, and the patient will be followed.</li></ul>
          <h2 className="font-semibold text-2xl mt-4">AWS</h2>
          <p className=" my-2 font-normal">Dec 2018</p>
          <p className="font-semibold">Udemy</p>
          <p className="my-2 font-normal">URL : www.example1.com</p>
          <ul className="list-disc ml-8 my-2"><li>It's very important for the patient to be patient, and the patient will be followed.</li></ul>

        </div>
      </div>
    </>
  )
}

export default Page2