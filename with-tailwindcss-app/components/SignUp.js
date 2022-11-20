//rfc snippet to create functional component
import React from 'react'
import Link from 'next/link';

export default function SignUp() {

    const signUpFunc = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const res = await fetch('/api/contact', {
            body: JSON.stringify({
                name: name,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        const result = await res.json();
        alert(`Is this your full name: ${result.name}`);

        // const res = await fetch(`https://api.agify.io/?name=${name}`)
        // alert(`Welcome User ${event.target.name.value}?`);
    }

    return (
        <div className="flex items-center justify-center h-[75vh] w-10/12 m-auto lg:w-11/12">
            <div className="grid items-center justify-items-center text-center max-w-3xl">
                <h1 className="text-4xl md:text-4xl sm:text-4xl font-bold text-slate-300 underline">Sign Up Please</h1>

                <div>
                    <form action="/send-data-here" method="post" onSubmit={signUpFunc}>
                        {/* <label for="roll">Roll Number</label>
                        <input
                            type="text"
                            id="roll"
                            name="roll"
                            required
                            minlength="10"
                            maxlength="20"
                        /> */}
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label for="name">About:</label>
                        <input type="text" id="name" name="name" required />

                        <label for="name">Date of Birth:</label>
                        <input type="text" id="name" name="name" required />

                        <label for="name">Account Type:</label>
                        <input type="text" id="name" name="name" required />
                        <Link href='/patients' className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
                            Submit
                        </Link>
                    </form>
                </div>
            </div>

        </div>
    )
}
