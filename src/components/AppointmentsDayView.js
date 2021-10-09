import React from "react";

export const AppointmentsDayView = ({ appointments }) => {
    return <div id="appointmentsDayView">
        <ol>
            {
                appointments.map((appointment) => (
                    <li key={appointment.startsAt} >{appointmentsTimeOfDay(appointment.startsAt)}</li>
                ))
            }
        </ol>
    </div>
}

const appointmentsTimeOfDay = startsAt => {
    const [h, m] = new Date(startsAt).toTimeString().split(':');
    return `${h}:${m}`;
}