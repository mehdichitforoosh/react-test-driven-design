import React from "react";

export const AppointmentsDayView = ({ appointments }) => {
    return <div id="appointmentsDayView">
        <ol>
            {
                appointments.map((appointment) => (
                    <li key={appointment.startsAt} >{appointment.startsAt}</li>
                ))
            }
        </ol>
    </div>
}