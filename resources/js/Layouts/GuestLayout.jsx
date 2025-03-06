import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="flex flex-col items-center pt-6 min-h-screen sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
                </Link>
            </div>

            <div className="overflow-hidden py-4 px-6 mt-6 w-full bg-white sm:max-w-md">
                {children}
            </div>
        </div>
    );
}
