import React from 'react';
import Card from './Card';

function Home () {
    return (
        <div className="Home">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto mt-16">
                <Card title = "Patient Records" icon = "user">
                    <p className="text-lg">Securely Identify patients and effectively</p>
                    <p className="text-lg">Update patient information, add notes, and view medical histories</p>
                </Card>
                <Card title = "Appointment Scheduler" icon = "calendar">
                    <p className="text-lg">Schedule and manage patient appointments with ease</p>
                    <p className="text-lg">View upcoming appoinntments, send reminders, and reschedule as needed</p>

                </Card>
                <Card title = "Prescription Tracker" icon = "medkit">
                    <p className="text-lg">Track and manage ppatient prescriptions seamlessly</p>
                    <p className="text-lg">View medication history, refill prescriptions, and manage dosage changes</p>

                </Card>
            </div>
        </div>
    )
}

export default Home