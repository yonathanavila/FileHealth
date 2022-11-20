import Head from "next/head"
import Navbar from '../components/Navbar'
import Connect from '../components/Connect'
import Footer from '../components/Footer'
import SignUp from '../components/SignUp'
import DoctorScreen from '../components/DoctorScreen'
import PatientScreen from '../components/PatientScreen'
import { useAccount } from "wagmi"


export default function Patients() {
    const { address, isConnected } = useAccount()

    return (
        <>
            {!isConnected ? <Connect /> : <PatientScreen />}
        </>
    )
}