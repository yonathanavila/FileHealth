import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useConnect } from 'wagmi'


//<a href="https://www.linkpicture.com/view.php?img=LPic63783515de592311680753"><img src="https://www.linkpicture.com/q/ethereum-patient-medical-records.png" type="image"></a>

function Navbar() {

    const { connect, connectors, error, isLoading:isLoadingConnect, pendingConnector } =
        useConnect()

    const [_connectors, setConnector] = useState([])
    const [_isLoadingConnect, setIsLoadingConnect] = useState(false)
    const [_pendingConnector, setPendingConnector] = useState(null)
    const [_error, setError] = useState(null)

    useEffect(() => {
        if (connectors) {
            setConnector(connectors)
        }
    }, [connectors])

    useEffect(() => {
        if (isLoadingConnect) {
            setIsLoadingConnect(isLoadingConnect)
        }
    }, [isLoadingConnect])

    useEffect(() => {
        if (pendingConnector) {
            setPendingConnector(pendingConnector)
        }
    }, [pendingConnector])

    useEffect(() => {
        if (error) {
            setError(error)
        }
    }, [error])

    return (
        // <div>Navbar</div>
        <>
            <header className='border border-1-0 border-r-0  bg-[#1B2129] border-white/10 h-[9vh] flex items-center justify-center  fixed top-0 left-0 right-0 opacity-100 z-[2000]'>

                <nav className='flex items-center justify-between w-10/12 lg:w-11/12 m-auto'>

                    <Link href={`/`} passHref legacyBehavior>
                        <a className='flex items-center'>
                            <Image src={`https://raw.githubusercontent.com/thirdweb-dev/typescript-sdk/main/logo.svg`}
                                alt='thirdweb/logo'
                                width={45}
                                height={45}
                                priority decoding='async'
                                objectFit='contain'
                            />
                        </a>
                    </Link>

                    <ul className='flex items-center'>
                        <div>
                            {_connectors.map((connector) => (
                                <button className="text-lg text-blue-500 ring-2 ring-blue-600 rounded-lg px-5 py-1.5 hover:bg-blue-600 hover:text-slate-300 transition-all active:scale-90 shadow-lg hover:shadow-blue-600 md:text-sm md:px-4 md:py-1"
                                    disabled={!connector.ready}
                                    key={connector.id}
                                    onClick={() => connect({ connector })}
                                >
                                    {connector.name}
                                    {!connector.ready && ' (unsupported)'}
                                    {_isLoadingConnect &&
                                        connector.id === _pendingConnector?.id &&
                                        ' (connecting)'}
                                </button>
                            ))}

                            {error && <div>{error.message}</div>}
                        </div>
                        {/* <button type='button' className='className="text-lg text-blue-500 ring-2 ring-blue-600 rounded-lg px-5 py-1.5 hover:bg-blue-600 hover:text-slate-300 transition-all active:scale-90 shadow-lg hover:shadow-blue-600 md:text-sm md:px-4 md:py-1" onClick={connectMetaMask}'>Connect Wallet</button> */}
                    </ul>

                </nav>
            </header>
        </>
    )
}

export default Navbar