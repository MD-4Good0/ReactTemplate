import React, { useState, useRef, useEffect } from 'react';
import logo_icon from '../Assets/Logo.png';
import './HDNPI.css';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';

const HDNPID = () => {

    const db = getFirestore();
    const { patientId, transactionId, specimenId } = useParams();
    const [patientData, setPatientData] = useState(null);
    const [testData, setTestData] = useState(null);
    const [siUnitData, setSiUnitData] = useState(null);
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
    }, [testData]);
  
    useEffect(() => {
        const fetchPatientAndTestData = async () => {
          try {
            // Fetch patient data
            const patientDocRef = doc(db, 'patient', `patient_${patientId}_id`);
            const patientDocSnapshot = await getDoc(patientDocRef);
    
            if (patientDocSnapshot.exists()) {
              const patientData = { ...patientDocSnapshot.data(), id: patientDocSnapshot.id };
    
              // Fetch transaction data
              const transactionDocRef = doc(db, 'transaction', `transaction_${transactionId}_id`);
              const transactionDocSnapshot = await getDoc(transactionDocRef);
    
              if (transactionDocSnapshot.exists()) {

                // Extract true values and testid from the transaction document
                const trueTests = Object.entries(transactionDocSnapshot.data())
                    .filter(([key, value]) => value === 'TRUE' && key !== 'transactionid' && key !== 'patientid')
                    .map(([key]) => key);
    
                // Fetch data from true test collections
                const testPromises = trueTests.map(async (test) => {
                    const collectionName = test; // Use the test directly as the collection name
                    const collectionRef = collection(db, collectionName);
    
                    const testQuery = query(collectionRef, where('specimenid', '==', specimenId));
                    const testSnapshot = await getDocs(testQuery);
    
                    if (!testSnapshot.empty) {
                        // Retrieve the first matching document and extract data
                        const testData = { ...testSnapshot.docs[0].data(), id: testSnapshot.docs[0].id };
                        return { test, testData };
                    }
    
                    return null;
                });
    
                // Wait for all test data to be fetched
                const testResults = await Promise.all(testPromises);
    
                // Construct the result object
                const result = {
                  patientData,
                  testData: testResults.filter((testResult) => testResult !== null),
                };
    
                // Update state variables
                setPatientData(result.patientData);
                setTestData(result.testData);
              } else {
                console.log(`No transaction found with ID: ${transactionId}`);
              }
            } else {
              console.log(`No patient found with ID: ${patientId}`);
            }
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
    
        fetchPatientAndTestData();
      }, [patientId, transactionId, specimenId]);

      useEffect(() => {
        const fetchSiUnitData = async () => {
            try {
                const siUnitDocRef = doc(db, 'si_unit', `si_unit_00000_id`);
                const siUnitDocSnapshot = await getDoc(siUnitDocRef);
                console.log('siUnitDocSnapshot:', siUnitDocSnapshot);

                if (siUnitDocSnapshot.exists()) {
                    const siUnitData = siUnitDocSnapshot.data();
                    console.log("line 106, siUnitData: ", siUnitData);
                    if (siUnitData != null) {
                        setSiUnitData(siUnitData);
                        console.log('line 109, siUnitData:', siUnitData);
                    } else {
                        console.log('No si_units found in SI Unit document');
                    }                
                } else {
                    console.log('No SI Unit document found');
                }
            } catch (error) {
                console.error('Error fetching SI Unit data:', error.message);
            }
        };
    
        fetchSiUnitData();
      }, [db]);

    return (
      <div className="hdnpi-container">
        <div className="hdnpi-title">
          <img src={logo_icon} alt="Logo" />
          <div>Laboratory Test Portal</div>
        </div>
  
        <div className="hdnpi-info-container">
          {/* Patient Data Rows */}
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
              <div className="hdnpi-p-h">Specimen ID</div>
              <div className="hdnpi-p-h-separator">|</div>
              <div className="hdnpi-p-h">Test</div>
              <div className="hdnpi-p-h-separator">|</div>
              <div className="hdnpi-p-h">Parameter</div>
              <div className="hdnpi-p-h-separator">|</div>
              <div className="hdnpi-p-h">Result</div>
              <div className="hdnpi-p-h-separator">|</div>
              <div className="hdnpi-p-h">SI Unit</div>
            </div>
  
            <div className={`hdnpi-patients-table-container ${isScrollbarVisible ? '' : 'add-padding'}`} ref={tableContainerRef}>
                <div className="hdnpi-p-t-c-table">
                {/* Display data from the retrieved collection */}
                {testData && testData.map((testResult) => (
                    <div className="hdnpi-patients-row" key={testResult.test}>
                    <div className="hdnpi-p-h-cell">{testResult.testData.specimenid}</div>
                    <div className="hdnpi-p-h-separator">|</div>
                    <div className="hdnpi-p-h-cell">{getBiggerTest(testResult.test)}</div>
                    <div className="hdnpi-p-h-separator">|</div>

                    {/* Include other fields from test data as needed */}
                    {/* Dynamic rendering of parameters based on true values in the transaction collection */}
                    {Object.keys(testResult.testData).map((param) => {
                        if (!['specimenid', 'testid', 'id'].includes(param) && testResult.testData[param]) {
                            const si_unit = siUnitData && siUnitData[param];
                            console.log('line 172, siUnitData: ', siUnitData);
                            console.log('line 173, siUnitData[param]: ', siUnitData[param]);
                            console.log('param:', param, 'si_unit:', si_unit);

                        return (
                            <React.Fragment key={param}>
                            <div className="hdnpi-p-h-cell">{param}</div>
                            <div className="hdnpi-p-h-separator">|</div>
                            <div className="hdnpi-p-h-cell">{testResult.testData[param]}</div>
                            <div className="hdnpi-p-h-separator">|</div>
                            <div className="hdnpi-p-h-cell">
                            {si_unit !== undefined ? <div>{si_unit}</div> : <div></div>}
                            </div>
                            </React.Fragment>
                        );
                        }
                        return null;
                    })}
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        <div className="dn-tagline">- Accurate, Fast, and Reliable Laboratory Results -</div>
      </div>
    );
  };

const getBiggerTest = (testCode) => {
switch (testCode) {
    case 'cbc':
        return 'Complete Blood Count';
    case 'blood_typing':
        return 'Blood Typing';
    case 'esr':
        return 'Erythrocyte Sedimentation Rate';
    case 'fbs':
        return 'Fasting Blood Sugar';
    case 'cholesterol':
        return 'Cholesterol';
    case 'triglyceride':
        return 'Triglyceride';
    case 'hdl':
        return 'High Density Lipoprotein';
    case 'ldl':
        return 'Low Density Lipoprotein';
    case 'vldl':
        return 'Very Low Density Lipoprotein';
    case 'bun':
        return 'Blood Urea Nitrogen';
    case 'creatine':
        return 'Creatinine';
    case 'bua':
        return 'Blood Uric Acid';
    case 'ast':
        return 'Aspartate Transaminase';
    case 'alt':
        return 'Alanine Transaminase';
    case 'alp':
        return 'Alkaline Phosphatase';
    case 'sodium':
        return 'Sodium';
    case 'potassium':
        return 'Potassium';
    case 'calcium':
        return 'Ionized Calcium';
    case 'urinalysis':
        return 'Routine Urinalysis';
    case 'pregnancy_test':
        return 'Pregnancy Test';
    case 'fecalysis':
        return 'Routine fecalysis';
    case 'fobt':
        return 'Fecal Occult Blood Test';
    case 'aso':
        return 'Anti-Streptolysin O Titer';
    case 'dengue_antibody':
        return 'Dengue Antibody (IgG,IgM)';
    case 'dengue_antigen':
        return 'Dengue antigen (NS1)';
    default:
        return `Test ${testCode}`;
}
};

export default HDNPID;