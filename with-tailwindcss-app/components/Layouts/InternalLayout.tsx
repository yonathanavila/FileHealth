import Head from "next/head"
import Navbar from './../Navbar'
import Connect from './../Connect'
import Footer from './../Footer'
import SignUp from './../SignUp'
import DoctorScreen from './../DoctorScreen'
import PatientScreen from './../PatientScreen'



export default function Index({ children }:any) {
    // const { address, isConnected } = useAccount()

    const address = true;

    return (
        <>
            {/* ask Yonathan */}

            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />

            {children}

            {/* <h1 className="text-blue-500 font-bold"> Welcome to FileHealth : Decentralized Medical Records</h1> */}
            <Footer />

        </>
    )
}

