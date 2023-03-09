import React from 'react'

import profileImages from "./images/girl_image.png";
import linkedinLogo from "./images/linkedin.png";
import websiteLogo from "./images/website.png";
import nationalityLogo from "./images/nationality.png";
import mailLogo from "./images/mail.png";
import locationLogo from "./images/location.png";
import birthdateLogo from "./images/birthdate.png";
import mobileLogo from "./images/mobile.png";
import skill1 from "./images/skill1.png";
import skill2 from "./images/skill2.png";
import skill3 from "./images/skill3-removebg-preview.png";
import skill4 from "./images/skill4-removebg-preview.png";
import skill5 from "./images/skill5-removebg-preview.png";
import shape1 from "./images/shape1.png";
import shape2 from "./images/shape2.png";
import shape3 from "./images/shape3.png";
import cvLogo from "./images/cv.png";

const profileDetails = "It is important to take care of the pain itself, and it will be followed by the growth of the patient, but at the same time it will happen that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come out; that is toil."


function Page1() {
    return (
        <>
            <div className=" absolute parent-grid grid grid-cols-2 gap-10 border-solid border-black h-auto border-4 p-24 mx-48 font-sans">
                <img src={shape1} className="absolute top-0 left-6 z-0 w-96" />
                <img src={shape2} className="absolute bottom-0 z-0" />
                <img src={shape3} className="absolute bottom-0 right-0 z-0" />
                <img className="profile-image row-span-1 w-60 align-middle mr-auto mb-8 z-10" src={profileImages} alt='Profile Image' />
                <div className="intro row-span-2 mt-28 mb-4">
                    <h1 className="font-bold text-6xl my-2">Devon Lane</h1>
                    <h3 className="font-bold text-3xl text-gray-600 my-5">Graphic Designer</h3>
                    <p className=" mt-2 font-medium">{profileDetails}</p>
                </div>
                <div className="contact row-span-2 font-medium mt-2">
                    <h2 className="font-semibold text-4xl mb-8">Contact</h2>
                    <div className="my-6"><img src={mobileLogo} alt="mobile" className='inline w-3 mr-5' /><span>+91-855-570-4521</span></div>
                    <div className="my-6"><img src={mailLogo} alt="mail" className='inline w-4 mr-5' /><span>devonlane@gmail.com</span></div>
                    <div className="my-6"><img src={websiteLogo} alt="website" className='inline w-4 mr-5' /><span>www.devonlane.com</span></div>
                    <div className="my-6"><img src={locationLogo} alt="location" className='inline w-4 mr-5' /><span>52 Reservoir Singapore</span></div>
                    <div className="my-6"><img src={linkedinLogo} alt="linkedin" className='inline w-4 mr-5' /><span>www.example1.com</span></div>
                    <div className="my-6"><img src={nationalityLogo} alt="nationality" className='inline w-4 mr-5' /><span> Indian</span></div>
                    <div className="my-6"><img src={birthdateLogo} alt="birthdate" className='inline w-4 mr-5' /><span>Jan 15, 1996</span></div>
                </div>
                <div className="education row-span-2 my-2 font-medium">
                    <h2 className="font-semibold text-4xl mb-6">Education</h2>
                    <p className="my-4 font-normal">Jun 2019 - Jun 2020</p>
                    <h2 className="font-medium text-2xl mb-4">Masters in Graphic Design</h2>
                    <p className="font-normal">University of Chicago | City | Country</p>
                    <ul className="list-disc ml-8  my-2"><li>It's very important for the patient to be patient, and the patient will be followed.</li></ul>
                    <p className="font-normal">June 2018 - June 2019</p>
                    <h2 className="font-medium text-2xl my-4">BA in Graphic Design</h2>
                    <p className="font-normal">University of Chicago | City | Country</p>
                    <ul className="list-disc ml-8 my-2"><li>It's very important for the patient to be patient, and the patient will be followed.</li></ul>
                </div>
                <div className="skill row-span-2 my-4 z-10">
                    <h2 className="font-semibold text-4xl my-8">Skills</h2>
                    <h3 className="text-2xl font-semibold mb-4">Skill 1</h3>
                    <img src={skill1} alt="example"></img>
                    <h3 className="text-2xl font-semibold my-4">Skill 2</h3>
                    <img src={skill2} alt="example"></img>
                    <h3 className="text-2xl font-semibold my-4">Skill 3</h3>
                    <img src={skill3} alt="example"></img>
                    <h3 className="text-2xl font-semibold my-4">Skill 4</h3>
                    <img src={skill4} alt="example"></img>
                    <h3 className="text-2xl font-semibold my-4">Skill 5</h3>
                    <img src={skill5} alt="example"></img>
                </div>
                <div className="achievements row-span-1 font-medium">
                    <h2 className="font-semibold text-4xl mb-10">Achievements</h2>
                    <ul className="list-disc ml-8 my-4">
                        <li className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li className="my-3">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquea commodo consequat veniam, quis</li>
                        <li className="my-3">Ut enim ad minim veniam, quis nostrud.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Page1