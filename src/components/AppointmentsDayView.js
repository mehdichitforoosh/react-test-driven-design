import React, { useState } from "react";
import { Appointment } from "./Appointment";

export const AppointmentsDayView = ({ appointments }) => {

    const [index, setIndex] = useState(0);

    return <div id="appointmentsDayView">
        <ol>
            {
                appointments.map((appointment, index) => (
                    <li key={appointment.startsAt}>
                        <button type="button" onClick={() => setIndex(index)} >
                            {appointmentsTimeOfDay(appointment.startsAt)}
                        </button>
                    </li>
                ))
            }
        </ol>
        {
            appointments.length > 0 ? (
                <Appointment {...appointments[index]} />
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