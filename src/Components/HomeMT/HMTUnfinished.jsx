import React, { useState, useRef, useEffect } from 'react';

import './HMTUnfinished.css';

import logo_icon from '../Assets/Logo.png';

const HMTUnfinished = () => {
    const [isScrollbarVisible, setIsScrollbarVisible] = useState(false);
    const tableContainerRef = useRef(null);

    const checkForScrollbar = () => {
        const el = tableContainerRef.current;
        if (el) {
            const hasScrollbar = el.scrollHeight > el.clientHeight;
            setIsScrollbarVisible(hasScrollbar);
        }
    };

    useEffect(() => {
        checkForScrollbar(); // Call on mount
        window.addEventListener('resize', checkForScrollbar); // Add listener on window resize
        return () => {
            window.removeEventListener('resize', checkForScrollbar); // Clean up listener on unmount
        };
    }, []);
    return (
        <div className="hmtuf-container"> 
            <div className="hmtuf-title">
                <img src={logo_icon} alt="Logo" />
                <div>Unfinished Test Results</div>
            </div>

            <div className="hmtuf-info-container">
                <div className="hmtuf-patient-detailed-info-header-row">
                    <div className="hmtuf-patients-header">
                        <div className="hmtuf-p-h">Date & Time Requested</div>
                        <div className="hmtuf-p-h-separator">|</div>
                        <div className="hmtuf-p-h">Patient ID Number</div>
                        <div className="hmtuf-p-h-separator">|</div>
                        <div className="hmtuf-p-h">Transaction ID</div>
                        <div className="hmtuf-p-h-separator">|</div>
                        <div className="hmtuf-p-h">Unfinished Tests</div>
                    </div>

                    <div className={`hmtuf-patients-table-container ${isScrollbarVisible ? '' : 'add-padding'}`} ref={tableContainerRef}>
                        <div className="hmtuf-p-t-c-table">
                            <div className="hmtuf-patients-row">
                                <div className="hmtuf-p-h-cell">08/10/23 09:00</div>
                                <div className="hmtuf-p-h-separator">|</div>
                                <div className="hmtuf-p-h-cell">123456789</div>
                                <div className="hmtuf-p-h-separator">|</div>
                                <div className="hmtuf-p-h-cell">121212121</div>
                                <div className="hmtuf-p-h-separator">|</div>
                                <button className="hmtuf-p-h-cell">Click to Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HMTUnfinished; 