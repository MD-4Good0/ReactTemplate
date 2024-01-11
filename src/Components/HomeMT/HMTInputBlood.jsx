import React, { useState, useRef } from 'react';

import logo_icon from '../Assets/Logo.png';
import underline from '../Assets/Underline.png';
import './HMTInput.css';

const HMTInput = () => {
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
  
    const handleChange = (e) => {
      setDate(e.target.value);
    };

    return (
        <div className="hmti-container">
            <div className="hmti-title">
                <img src={logo_icon} alt="Logo" />
                <div>Input Test Results</div>
            </div>

            <div className="hmti-row">
                <div className="hmti-column">
                    <div className="hmti-basic-info">
                        <div className="hmti-basic-info-1st-row">
                            <div className="hmti-b-i-1-row">
                                First Name
                                <div className="firstname">
                                    <input type="id"/>
                                </div>
                            </div>

                            <div className="hmti-b-i-1-row">
                                Middle Name
                                <div className="middlename">
                                    <input type="id"/>
                                </div>
                            </div>

                            <div className="hmti-b-i-1-row">
                                Surname
                                <div className="surname">
                                    <input type="id"/>
                                </div>
                            </div>

                            <div className="hmti-b-i-1-row">
                                Sex
                                <div className="sex">
                                    <select name="sex-choose">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="hmti-basic-info-2nd-row">
                            <div className="hmti-b-i-2-row">
                                Patient ID:
                                <div className="patientid">
                                    <input type="id"/>
                                </div>
                            </div>

                            <div className="hmti-b-i-2-row">
                                Birthdate:
                                <div className="birthdate">
                                    <input
                                        type="date"
                                        onChange={handleChange}
                                        ref={dateInputRef}
                                    />
                                </div>
                            </div>

                            <div className="hmti-b-i-2-row">
                                Age: 
                                <div className="age">
                                    <input type="id"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hmti-checklist">
                        <div className="hmti-checklist-title">Checklist Page</div>
                        <img src={underline} alt="underline"/>
                        <div className="hmti-checklist-start">
                            <div className="hmti-checklist-row">
                                Date & Time Requested:
                                <div className="requested">
                                    <input
                                        type="date"
                                        onChange={handleChange}
                                        ref={dateInputRef}
                                    />
                                </div>
                            </div>

                            <div className="hmti-checklist-row">
                                Date & Time Received:
                                <div className="received">
                                    <input
                                        type="date"
                                        onChange={handleChange}
                                        ref={dateInputRef}
                                    />
                                </div>
                            </div>

                            <div className="hmti-checklist-row">
                                Specimen Number:
                                <div className="specimen_number">
                                    <input type="id"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hmti-tests">
                    <div className="hmti-tests-title">Blood Laboratory Tests</div>
                    <img src={underline} alt="underline"/>
                    <div className="hmti-tests-row">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HMTInput;