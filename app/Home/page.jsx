import React from 'react';


function Home() {
    return (
        <div className="flex flex-row flex-wrap mx-5">
            <div className="card w-96 h-96 mx-auto my-4 bg-base-200 shadow-xl image-full">
                <figure><img src={records} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-info text-xl font-bold text-center">Patient Identification System</h2>
                    <p className="m-auto text-xl text-center">With Meditracks advanced Patient  Identification System,health providers can easily and securely manage patient information. The system utilizes facial recognition and fingerprint technology to accurately identify patients, reducing the risk of errors and improving patient care </p>
                </div>
            </div>
            <div className="card w-96 h-96 mx-auto my-4 bg-base-200 shadow-xl image-full">
                <figure><img src="{login1}" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-info text-xl font-bold text-center">Data Analysis</h2>
                    <p className="m-auto text-xl text-center">Meditracks data analysis tools provide healthcare providers with valuable insights into patient care and operational performanc. Our platfor includes comprehensive reporting and analytics features that help providers identify trends,track outcomes, and make data-driven decisions</p>
                </div>
            </div>
            <div className="card w-96 h-96 mx-auto my-4 bg-base-200 shadow-xl image-full">
                <figure><img src="{support}" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-info text-xl font-bold text-center">Technical Support</h2>
                    <p className="m-auto text-xl text-center">Meditracks data analysis tools provide healthcare providers with valuable insights into patient care and operational performanc. Our platfor includes comprehensive reporting and analytics features that help providers identify trends,track outcomes, and make data-driven decisions</p>

                </div>
            </div>
        </div>
    )
}
export default Home;