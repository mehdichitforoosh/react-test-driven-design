import React, { useState } from "react";
import { Appointment } from "./Appointment";
import { appointmentsTimeOfDay } from '../util';

export const AppointmentsDayView = ({ appointments }) => {

    const [index, setIndex] = useState(0);

    return <div id="appointmentsDayView" className="container">
        <div className="row">
            <div className="col-3">
                <ol className="list-group">
                    {
                        appointments.map((appointment, index) => (
                            <li key={appointment.startsAt} className="list-group-item">
                                <button type="button" className="btn btn-primary" onClick={() => setIndex(index)} >
                                    {appointmentsTimeOfDay(appointment.startsAt)}
                                </button>
                                <span className="mx-2" />
                                {appointment.customer.firstName}
                            </li>
                        ))
                    }
                </ol>
            </div>
            <div className="col-9">
                {
                    appointments.length > 0 ? (
                        <Appointment {...appointments[index]} />
                    ) : (
                        <p>There are no appointments scheduled for today.</p>
                    )
                }
            </div>
        </div>
    </div>
}