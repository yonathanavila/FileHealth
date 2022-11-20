import React from 'react'

import { useState } from 'react'
import { ethers } from "ethers"
import { Row, Form, Button } from 'react-bootstrap'
// import { create as ipfsHttpClient } from 'ipfs-http-client'
//import { create as ipfsHttpClient } from 'ipfs-http-client'
import { Buffer } from 'buffer';
import {create} from 'ipfs-http-client';
// const ipfsClient = ipfsClient

const projectId = "2HmvAI8WpTd4EtDSz9V3S0iyzp5";
const projectSecret = "80000ed1eda9dc25b4fe324feb20fffa";
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
    authorization: auth,
    },
});

export default function DoctorScreen() {

    const [image, setImage] = useState('')
    const [treatment, setTreatment] = useState('')
    const [description, setDescription] = useState('')

    const formHandler = async(event) =>{
        console.log('hello')
    }
    const uploadToIPFS = async (event) => {
        event.preventDefault()
        const file = event.target.files[0]
        if (typeof file !== 'undefined') {
            try {
                const result = await client.add(file)
                console.log(result)
                // setImage(`https://ipfs.infura.io/ipfs/${result.path}`)
                //https://charrocrypto.infura-ipfs.io
                setImage(`https://fevm.infura-ipfs.io/ipfs/${result.path}`)

            } catch (error) {
                console.log("ipfs image upload error: ", error)
            }
        }
    }



    return (


        <form className="px-8 pt-6 pb-8 mb-4 rounded">

            <div className="mb-4">
                <label
                    className="block mb-2 text-sm font-bold text-white"
                    htmlFor="treatment"
                >
                    Treatment
                </label>
                <input
                    className="w-3/4 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="treatment"
                    type="text"
                    value={treatment}
                    onChange={(event) => {
                        setTreatment(
                            event.target.value
                        );
                    }}
                    placeholder="Enter Patient Treatment"
                />

                <label
                    className="block mb-2 text-sm font-bold text-white mt-4"
                    htmlFor="money"
                >
                    Description
                </label>
                <input type="text" className='w-80 h-28 text-black' value={description} onChange={(e) => setDescription(e.target.value)} />
                
                <label
                    className="block mb-2 text-sm font-bold text-white mt-4"
                    htmlFor="money"
                >
                    Image
                </label>
                <input
                    className="w-3/4 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="discharge"
                    type="file"
                    placeholder="Upload Treatment Image..."
                    onChange={uploadToIPFS}
                />
            </div>
            <div className="mb-6 text-center">
                <button
                    className="px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={formHandler}
                >
                    Add
                </button>
            </div>

            {/* <div className="flex justify-center">
                {error ? (
                    <h1 className="text-lg bg-red-600 p-1 px-3 rounded-lg mb-4 -mt-4">
                        {error}
                    </h1>
                ) : (
                    <></>
                )}
            </div> */}
            <hr className="mb-6 border-t" />
        </form>
    )
}
