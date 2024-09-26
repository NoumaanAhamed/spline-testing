import React from 'react';
import Spline from '@splinetool/react-spline/next';
import { Menu, X, Github, Twitter, Linkedin } from 'lucide-react';

const Navbar = () => (
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-xl">Noumaan.</div>
            <div className="hidden md:flex space-x-4">
                MainCharacters
            </div>
            <div className="md:hidden">
                <Menu className="text-white" />
            </div>
        </div>
    </nav>
);

const Footer = () => (
    <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div>&copy; 2024 Dashboard. All rights reserved.</div>
            <div className="flex space-x-4">
                <Github className="hover:text-gray-300 cursor-pointer" />
                <Linkedin className="hover:text-gray-300 cursor-pointer" />
            </div>
        </div>
    </footer>
);

const SplineModel = () => (
    <div className="h-[calc(100vh-8rem)] w-full">
        <Spline scene="https://prod.spline.design/L0zuiTdW1kmQuYYq/scene.splinecode" />
    </div>
);

const Dashboard = () => (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
            <SplineModel />
        </main>
        <Footer />
    </div>
);

export default Dashboard;