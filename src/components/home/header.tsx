"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {LoginModal} from "@/components/login/login-modal.tsx";
import {RegisterModal} from "@/components/register/register-modal.tsx";


export function Header() {
    const [openRegister, setOpenRegister] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)

    return (
        <>
            <header className="bg-secondary/80 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <a href="/">
                            <h1 className="font-orbitron text-2xl font-bold text-primary tracking-wider cursor-pointer hover:text-primary-light">
                                CONNECT<span className="text-accent">PLAY</span>
                            </h1>
                        </a>

                        <nav className="hidden md:flex space-x-8">
                            <a href="#features" className="font-inter text-foreground hover:text-primary-light">Recursos</a>
                            <a href="#how-it-works" className="font-inter text-foreground hover:text-primary-light">Como Funciona</a>
                            <a href="#games" className="font-inter text-foreground hover:text-primary-light">Jogos</a>
                            <a href="#community" className="font-inter text-foreground hover:text-primary-light">Comunidade</a>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <Button variant="outline" size="sm" onClick={() => setOpenLogin(true)}>Login</Button>
                            <Button variant="primary" size="sm" onClick={() => setOpenRegister(true)}>Cadastrar</Button>                        </div>
                    </div>
                </div>
            </header>

            <LoginModal
                isOpen={openLogin}
                onClose={() => setOpenLogin(false)}
                onSwitchToRegister={() => {
                    setOpenLogin(false)
                    setOpenRegister(true)
                }}
            />
            <RegisterModal
                isOpen={openRegister}
                onClose={() => setOpenRegister(false)}
                onSwitchToLogin={() => {
                    setOpenRegister(false)
                    setOpenLogin(true)
                }}
            />

        </>
    )
}
