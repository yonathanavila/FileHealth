import React from 'react'

import { useState, useReducer } from 'react'
import { ethers } from "ethers"
import { Row, Form, Button } from 'react-bootstrap'

import { Buffer } from 'buffer';
import { create } from 'ipfs-http-client';
import { CarReader } from '@ipld/car';
import {db} from '../firebase-config'
import {collection,getDocs} from 'firebase/firestore'
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


// web3 Storage
import { Web3Storage } from 'web3.storage'

//allow user to pick files
// function getFiles() {
//     const fileInput = document.querySelector('input[type="file"]')
//     return setFiles(fileInput.files

// }

//Firebase
// const TreatmentCollectionRef = collection()

export default function DoctorScreen() {

    const [messages, showMessage] = useReducer((msgs, m) => msgs.concat(m), [])
    const [patient, setPatient] = useState('')
    const [image, setImage] = useState('')
    const [treatment, setTreatment] = useState('')
    const [description, setDescription] = useState('')
    const [doctor, setDoctor] = useState('')
    const [files, setFiles] = useState([])

    const formHandler = async (event) => {

        // return cid
        // don't reload the page!
        // event.preventDefault()

        // showMessage('> 📦 creating web3.storage client')
        // const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQ4MUNGRWU5NDRmQTY4MDIwNzlFREMxOTYyZkQ4NGZDMjI1MUU4MTgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njg5NDQxNDQ3MzUsIm5hbWUiOiJGRVZNIn0.xF_XaN7INglTh1eRSJlXnSyF1pO6_S_CWatjZKQfrO8" })

        // showMessage('> 🤖 chunking and hashing the files (in your browser!) to calculate the Content ID')
        
        // const cid = await client.put(files, {
        //     onRootCidReady: localCid => {
        //         showMessage(`> 🔑 locally calculated Content ID: ${localCid} `)
        //         showMessage('> 📡 sending files to web3.storage ')
        //     },
        //     onStoredChunk: bytes => showMessage(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`)
        // })
        // showMessage(`> ✅ web3.storage now hosting ${cid}`)
        // showLink(`https://dweb.link/ipfs/${cid}`)

        // showMessage('> 📡 fetching the list of all unique uploads on this account')
        // let totalBytes = 0
        // for await (const upload of client.list()) {
        //     showMessage(`> 📄 ${upload.cid}  ${upload.name}`)
        //     totalBytes += upload.dagSize || 0
        // }
        // showMessage(`> ⁂ ${totalBytes.toLocaleString()} bytes stored!`)


        // return cid

    }

    function showLink(url) {
        showMessage(<span>&gt; 🔗 <a href={url}>{url}</a></span>)
    }

    const uploadToIPFS = async (event) => {
        event.preventDefault()
        const file = event.target.files[0]
        if (typeof file !== 'undefined') {
            try {
                const result = await client.add(file)
                console.log(result)
                // setImage(`https://ipfs.infura.io/ipfs/${result.path}`)

                setImage(`https://fevm.infura-ipfs.io/ipfs/${result.path}`)

            } catch (error) {
                console.log("ipfs image upload error: ", error)
            }
        }
    }

    //Address, Treatment, Doctor, Image

    return (
        <>
            <header>
                <h1>⁂
                    <span>Add patient Record</span>
                </h1>
            </header>


            <form id='upload-form' onSubmit={formHandler}>

                <label >Patient Address</label>
                <input type='text' placeholder='0x...' id='patientAddress' onChange={e => setPatient(e.target.value)} required />

                <label >Treatment</label>
                <input type='text' placeholder='Burn treatment' id='treatment' onChange={e => setTreatment(e.target.value)} required />

                <label >Description</label>
                <input type='text' placeholder='explanation' id='description' onChange={e => setDescription(e.target.value)} required />

                {/* <label >Doctor </label>
                <input type='text' placeholder='John Doe' id='doctor' onChange={e => setDoctor(e.target.value)} required /> */}

                <label htmlFor='filepicker'>Pick files to store</label>
                <input type='file' id='filepicker' name='fileList' onChange={e => uploadToIPFS(e.target.files)} multiple required />

                {/* button */}
                <input type='submit' value='Submit' id='submit' />

            </form>
            {/* 
            <div id='output'>
                &gt; ⁂ waiting for form submission...
                {messages.map((m, i) => <div key={m + i}>{m}</div>)}
            </div> */}

        </>


    )
}
