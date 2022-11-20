import React from 'react'
import { useState, useReducer } from 'react'
// import {db} from './firebase-config'
// import {collection,getDocs, addDoc} from 'firebase/firestore'
// import { addSyntheticLeadingComment } from 'typescript'
//     //Address, Treatment, Doctor, Image

export default function PatientScreen() {
    //   const [treatments, setTreatments] = useState([])
    // //   treatmentsCollectionRef = collection(db, "Treatments")

    //   const createTreatment = async() =>{
    //     await addDoc(treatmentsCollectionRef, {})
    //   }

    //   useEffect(() => {

    //     const getTreatments = async() =>{
    //         const data = await getDocs(treatmentsCollectionRef)
    //         setTreatments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    //     }

    //     getTreatments()

    //   }, [])

    return (
        <>
            <div className="flex items-center justify-center h-[95vh] w-10/12 m-auto lg:w-11/12 ">
                <div className="grid items-center justify-items-center text-center max-w-3xl opacity-100 z-[1700]">
                    <h1 className="text-6xl md:text-5xl sm:text-4xl font-bold text-slate-300 underline">Patient Treatments</h1>
                    
                    <form>
                            <label>
                                Patient Address:
                                <input type="text" name="patient address" placeholder='0x...' />
                            </label>
                        </form>
                    
                    <div className="container">



                        <img
                            className={"imgJR"}
                            src="https://assets.nhs.uk/nhsuk-cms/images/C0034381.width-320.jpg"
                            alt="Profile"
                            style={{ marginTop: "12%", display: "inline-block;" }}
                        ></img>
                        <p >
                            Eichiro Oda burned due to writing fire content <br />

                        </p>
                    </div>

                </div>




            </div>
        </>
    )
}
