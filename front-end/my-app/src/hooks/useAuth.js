"use client";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export function useAuth() {
    const [usuario, setUsuario] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUsuario(decoded);
            } catch (error) {
                console.error("Token inválido", err);
                localStorage.removeItem("token");
            }
        }
        setCarregando(false);
    }, []);

    return { usuario, carregando }
}