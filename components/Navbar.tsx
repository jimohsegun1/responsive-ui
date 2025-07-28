import Link from 'next/link';
const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="text-white hover:underline">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/login" className="text-white hover:underline">
                        login
                    </Link>
                </li>
                <li>
                    <Link href="/forgot-password" className="text-white hover:underline">
                        forgot password
                    </Link>
                </li>
                <li>
                    <Link href="/mfa" className="text-white hover:underline">
                        mfa
                    </Link>
                </li>
                <li>
                    <Link href="/password-reset-sent" className="text-white hover:underline">
                        password reset sent
                    </Link>
                </li>
                <li>
                    <Link href="/set-new-password" className="text-white hover:underline">
                        set new password
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default NavBar;