"use client"; 

import Link from 'next/link';
import React from 'react'; 

const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <ul className="flex flex-wrap justify-center sm:justify-start space-x-4">
                <li>
                    <Link href="/" className="hover:underline text-sm sm:text-base">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/login" className="hover:underline text-sm sm:text-base">
                        Login
                    </Link>
                </li>
                <li>
                    <Link href="/forgot-password" className="hover:underline text-sm sm:text-base">
                        Forgot Password
                    </Link>
                </li>
                <li>
                    <Link href="/mfa" className="hover:underline text-sm sm:text-base">
                        MFA
                    </Link>
                </li>
                <li>
                    <Link href="/password-reset-sent" className="hover:underline text-sm sm:text-base">
                        Password Reset Sent
                    </Link>
                </li>
                <li>
                    <Link href="/set-new-password" className="hover:underline text-sm sm:text-base">
                        Set New Password
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;