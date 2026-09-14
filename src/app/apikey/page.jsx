"use client";

import { Skeleton } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ApiKeyPage() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function buscarSeries() {
            try {
                const resp = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_SERIES}?limit=50`,
                    {
                        headers: {
                            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
                        },
                    }
                );

                toast.success("Séries carregadas com sucesso", {
                    id: "getApiKey",
                });

                setSeries(resp.data.data);
            } catch (error) {
                toast.error("Erro ao buscar as séries.", {
                    id: "getApiKey",
                });
            } finally {
                setLoading(false);
            }
        }

        buscarSeries();
    }, []);

    return (
        <main>
            <h2>
                Veja a API key ficando exposta no header desta chamada
            </h2>

            <p>DevTools → Network → Headers → series</p>

            <p>
                Axios.get direto na API, com API key exposta no navegador
            </p>

            {loading ? (
                <div className="skeleton">
                    <Skeleton />
                </div>
            ) : (
                <ul>
                    {series.map((serie) => (
                        <li key={serie.id}>
                            {serie.title}
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}
