import React from "react";
import { Appointment } from "./Appointment";

export const AppointmentsDayView = ({ appointments }) => {
    return <div id="appointmentsDayView">
        <ol>
            {
                appointments.map((appointment) => (
                    <li key={appointment.startsAt}>{appointmentsTimeOfDay(appointment.startsAt)}</li>
                ))
            }
        </ol>
        {
            appointments.length > 0 ? (
                <Appointment {...appointments[0]} />
            ) : (
                <p>There are no appointments scheduled for today.</p>
            )
        }
    </div>
}

const appointmentsTimeOfDay = startsAt => {
    const [h, m] = new Date(startsAt).toTimeString().split(':');
    return `${h}:${m}`;
}