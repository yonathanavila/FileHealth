import React from 'react'
import Image from 'next/image'

import { useAccount, useConnect, useEnsName ,useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

function Connect() {

  // const { address, isConnected } = useAccount()
  // const { data: ensName } = useEnsName({ address })
  // const { connect } = useConnect({
  //   connector: new InjectedConnector(),
  // })

  const { connect, connectors, error, isLoading, pendingConnector } =
  useConnect()
  
  return (
    <>
    <div className="flex items-center justify-center h-[95vh] w-10/12 m-auto lg:w-11/12 ">
      <div className="grid items-center justify-items-center text-center max-w-3xl opacity-100 z-[1700]">
          <h1 className="text-6xl md:text-5xl sm:text-4xl font-bold text-slate-300 underline">FileHealth</h1>
          <h1 className="text-5xl md:text-5xl sm:text-4xl font-bold text-slate-300"><span>Decentralized</span> Medical Records</h1>
          <p className="text-base md:text-sm text-slate-500 my-5
          ">By combining Filecoin's Virtual Machine and Ethereum - - we store, protect and provide medical records. You can access your records from anywhere, and share them with the persons you have chosen.</p>
          
          {/* <button type="button" className="bg-blue-600 px-7 py-1.5 text-lg md:text-sm rounded-md shadow-lg shadow-blue-600 active:scale-90 hover:translate-y-2 transition-all" onClick={() => connect()}>Connect Wallet</button> */}
    {/* wagmi */}
          <div>
      {connectors.map((connector) => (
        <button className="bg-blue-600 px-7 py-1.5 text-lg md:text-sm rounded-md shadow-lg shadow-blue-600 active:scale-90 hover:translate-y-2 transition-all"
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </button>
      ))}
 
      {error && <div>{error.message}</div>}
    </div>

      </div>

      <div className="h-[54vh] absolute top-1 right-0 rounded-md overflow-hidden opacity-100 z-[1500]">
            <Image src={`https://img.seadn.io/files/4b5e1469b134d0c6cc20a113e34b2c65.jpg?fit=max&auto=format`} alt='hero/ethiconimg' decoding="async" priority width={400} height={450} objectFit='fill' />
      </div>

    </div>
  </>
  )
}

export default Connect