import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaPencilAlt } from "react-icons/fa";

function About(){
    return (
        <>
        <div className="mt-60px">
            <div className="mockup-window border bg-base-300 mt-8 mx-4">
                <div className="hero min-h-fit bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-screen">
                            <h1 className="text-5xl font-bold text-warning">Why Us</h1>
                            <p className="py-6 md:text-xl sm:text-xl">MediTrack is a comprehensible patient identification system designed for hospitals, and medical professionals. Our easy to use platform provides you with all the tools to access and manage a patients health record system</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* mission and vision */}
        <div className="mt-60px">
            <div className="mockup-window border bg-base-300 mt-8 mx-4">
                <div className="hero min-h-fit bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-screen">
                            <h1 className="text-5xl font-bold text-warning">Mission</h1>
                            <p className="py-6 md:text-xl sm:text-xl">At Meditrack, we are commmitted to ensuring confidentiality and security of patient Identification. Our platform uses the latest encryption technology to keep all data safe and secure</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="mt-60px">
            <div className="mockup-window border bg-base-300 mt-8 mx-4">
                <div className="hero min-h-fit bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-screen">
                            <h1 className="text-5xl font-bold text-warning">Vision</h1>
                            <p className="py-6 md:text-xl sm:text-xl">MediTrack is a comprehensible patient identification system designed for hospitals, and medical professionals. Our easy to use platform provides you with all the tools to access and manage a patients health record system</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}