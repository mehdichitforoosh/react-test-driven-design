import React from "react";
import { appointmentsTimeOfDay } from '../util';

export const Appointment = ({ startsAt, customer: { firstName, lastName } }) => (
    <div>
        <h2>Today's appointment is at {appointmentsTimeOfDay(startsAt)}</h2>
        <p className="font-weight-bold">{firstName}</p>
    </div>
)