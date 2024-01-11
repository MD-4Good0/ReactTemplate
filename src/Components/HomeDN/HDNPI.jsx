import React, { useState, useRef, useEffect } from 'react';
import logo_icon from '../Assets/Logo.png';
import './HDNPI.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { db } from '../../Firebase';
import { doc, getDoc, query, collection, where, getDocs } from 'firebase/firestore'; // Import the necessary functions

const HDNPI = () => {
    const { patientId } = useParams();
    const [patientData, setPatientData] = useState(null);
    const [specimens, setSpecimens] = useState([]);
    const [isScrollbarVisible, setIsScrollbarVisible] = useState(false);
    const tableContainerRef = useRef(null);

    // Function to check for scrollbar visibility
    const checkForScrollbar = () => {
        const el = tableContainerRef.current;
        if (el) {
            const hasScrollbar = el.scrollHeight > el.clientHeight;
            setIsScrollbarVisible(hasScrollbar);
        }
    };

    useEffect(() => {
        const fetchPatientData = async () => {
            try {
                const patientDocRef = doc(db, 'patient', `patient_${patientId}_id`);
                const patientDocSnapshot = await getDoc(patientDocRef);
                if (patientDocSnapshot.exists()) {
                    setPatientData({ ...patientDocSnapshot.data(), id: patientDocSnapshot.id });
                } else {
                    console.log(`No patient found with ID: ${patientId}`);
                }
            } catch (error) {
                console.error('Error fetching patient data:', error.message);
            }
        };

        const fetchSpecimens = async () => {
            try {
                // Fetch patient document to get the patient ID
                const patientDocRef = doc(db, 'patient', `patient_${patientId}_id`);
                const patientDocSnapshot = await getDoc(patientDocRef);
        
                if (patientDocSnapshot.exists()) {
                    const patientData = patientDocSnapshot.data();
        
                    // Now, use the patient's ID to query specimens
                    const specimensQuery = query(collection(db, 'specimen'), where('patientid', '==', patientData.patientid));
                    const specimensSnapshot = await getDocs(specimensQuery);
        
                    // Log the specimens for debugging
                    console.log('Specimens:', specimensSnapshot.docs.map(doc => doc.data()));
        
                    // Array to store specimen data with patient details
                    const specimensData = [];
        
                    // Iterate over the specimens in the specimen collection
                    for (const specimenDoc of specimensSnapshot.docs) {
                        const specimenData = specimenDoc.data();
        
                        // Combine patient and specimen data
                        specimensData.push({
                            ...specimenData,
                            datetime_requested: specimenData.datetime_requested,
                            datetime_received: specimenData.datetime_received,
                            transactionid: specimenData.transactionid,
                            specimenid: specimenData.specimenid,
                            recommending_doctor: patientData.requesting_physician, // Add the recommending doctor here
                        });
                    }
        
                    // Update the state with the combined data
                    setSpecimens(specimensData);
                } else {
                    console.log(`No patient found with ID: ${patientId}`);
                }
            } catch (error) {
                console.error('Error fetching specimens:', error.message);
            }
        };        

        fetchPatientData();
        fetchSpecimens();
    }, [patientId]);

    useEffect(() => {
        checkForScrollbar(); // Call on mount
        window.addEventListener('resize', checkForScrollbar); // Add listener on window resize
        return () => {
            window.removeEventListener('resize', checkForScrollbar); // Clean up listener on unmount
        };
    }, [specimens]);

    const navigate = useNavigate();

    const redirectToPatientView = (patientId, transactionId, specimenId) => {
        // Add your logic to redirect to the new view with the provided parameters
        console.log(`Redirecting to patient view for Patient ID: ${patientId}, Transaction ID: ${transactionId}, Specimen ID: ${specimenId}`);
        // Example navigation using react-router-dom
        navigate(`/patient/${patientId}/${transactionId}/${specimenId}`);
        // history.push(`/new-view/${patientId}/${testCode}/${transactionId}`);
    };

    return (
        <div className="hdnpi-container">
            <div className="hdnpi-title">
                <img src={logo_icon} alt="Logo" />
                <div>Laboratory Test Portal</div>
            </div>

            <div className="hdnpi-info-container">
                {patientData && (
                    <div className="hdnpi-patient-info-header-row">
                        <div className="hdnpi-p-i-h-t-indiv">Family Name: {patientData.patientlastname}</div>
                        <div className="hdnpi-p-i-h-t-indiv">First Name: {patientData.patientfirstname}</div>
                        <div className="hdnpi-p-i-h-t-indiv">Date of Birth: {patientData.dateofbirth}</div>
                        <div className="hdnpi-p-i-h-t-indiv">Age: {patientData.age}</div>
                        <div className="hdnpi-p-i-h-t-indiv">Sex: {patientData.sex}</div>
                        <div className="hdnpi-p-i-h-t-indiv">Patient ID: {patientData.patientid}</div>
                    </div>
                )}
                <div className="hdnpi-patient-detailed-info-header-row">
                    <div className="hdnpi-patients-header">
                        <div className="hdnpi-p-h">Date & Time Requested</div>
                        <div className="hdnpi-p-h-separator">|</div>
                        <div className="hdnpi-p-h">Date & Time Received</div>
                        <div className="hdnpi-p-h-separator">|</div>
                        <div className="hdnpi-p-h">Transaction ID</div>
                        <div className="hdnpi-p-h-separator">|</div>
                        <div className="hdnpi-p-h">Recommending Doctor</div>
                    </div>

                    <div className={`hdnpi-patients-table-container ${isScrollbarVisible ? '' : 'add-padding'}`} ref={tableContainerRef}>
                        <div className="hdnpi-p-t-c-table">
                            {/* Display specimens */}
                            {specimens.map((specimen) => (
                                <button key={specimen.id} className="hdnpi-patients-row" onClick={() => redirectToPatientView(specimen.patientid, specimen.transactionid, specimen.specimenid)}>
                                    <div className="hdnpi-p-h-cell">{specimen.datetime_requested}</div>
                                    <div className="hdnpi-p-h-separator">|</div>
                                    <div className="hdnpi-p-h-cell">{specimen.datetime_received}</div>
                                    <div className="hdnpi-p-h-separator">|</div>
                                    <div className="hdnpi-p-h-cell">{specimen.transactionid}</div>
                                    <div className="hdnpi-p-h-separator">|</div>
                                    <div className="hdnpi-p-h-cell">{specimen.recommending_doctor}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="dn-tagline">- Accurate, Fast, and Reliable Laboratory Results -</div>
        </div>
    );
};

export default HDNPI;