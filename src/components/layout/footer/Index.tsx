import Link from "next/link";
import { Container } from "../container/Index";

export const Footer = () => {
    return (
        <footer className="bg-white shadow">
            <div className="flex justify-between items-center py-4">
            <div>
                <Link href="/">
                <i className="text-xl font-bold text-gray-800">Ecommerce</i>
                </Link>
            </div>
            <div>
                <Link href="/cart">
                <i className="text-gray-800">Cart</i>
                </Link>
            </div>
            </div>
        </footer>
    );
    }