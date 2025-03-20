import React, { useState } from "react";
import { ethers } from "ethers";

const Donation = () => {
    const [donors, setDonors] = useState([
        { id: 1, name: "Anonymous", address: "0x4F3a...9dE7" },
        { id: 2, name: "CryptoEnthusiast", address: "0x9A12...8B56" },
        { id: 3, name: "BlockchainGuru", address: "0x7B6C...3EFA" },
    ]);
    const [amount, setAmount] = useState("");

    const handleDonate = async () => {
        if (!window.ethereum) {
            alert("MetaMask not detected! Please install MetaMask.");
            return;
        }

        if (!amount.trim()) {
            alert("Please enter a donation amount.");
            return;
        }

        try {
            // Request MetaMask connection
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();

            // Get donor's wallet address
            const donorAddress = await signer.getAddress();

            // Define transaction details
            const transaction = {
                to: "0x5f4392b98d2ffCC187D94679BB05Ac8af4De826d", // Decentraise main address
                value: ethers.utils.parseEther(amount), // Convert ETH to Wei
            };

            // Send transaction
            const tx = await signer.sendTransaction(transaction);
            await tx.wait(); // Wait for confirmation

            alert(`Transaction Successful! Hash: ${tx.hash}`);

            // Add donor using functional state update
            setDonors((prevDonors) => [
                ...prevDonors,
                {
                    id: prevDonors.length + 1,
                    name: "Anonymous Donor",
                    address: donorAddress, // Store real donor's address
                },
            ]);

            setAmount(""); // Reset input field
        } catch (error) {
            console.error("Donation Error:", error);
            alert("Transaction failed! Please try again.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-3xl font-bold text-center mb-6">Support Our Decentralized Projects</h1>
            <p className="text-gray-600 text-center mb-4">Your contributions help us maintain and grow our decentralized ecosystem.</p>
            <p className="text-xl font-semibold text-center text-black-700 mb-6">
                Donate some contribution to <span className="text-black-900">DECENTRAISE</span>, a platform that supports people's welfare.
            </p>
            <div className="flex justify-center mb-6">
                <input
                    type="number"
                    placeholder="Enter donation amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="px-4 py-2 border rounded-l-md focus:outline-none"
                />
                <button
                    onClick={handleDonate}
                    className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-r-md">
                    Donate
                </button>
            </div>

            <h2 className="text-2xl font-semibold text-center mb-4">Recent Donors</h2>
            <ul className="bg-gray-100 p-4 rounded-lg">
                {donors.map((donor) => (
                    <li key={donor.id} className="p-2 border-b last:border-none">
                        <span className="font-semibold">{donor.name}</span> - <span className="text-gray-500">{donor.address}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Donation;
