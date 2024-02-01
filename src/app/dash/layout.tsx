import Navbar from '../components/Navbar'
import { Inter } from "next/font/google";
import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <Navbar></Navbar>
    );
  }