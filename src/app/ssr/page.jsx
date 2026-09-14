import axios from "axios";

export default async function GetPage() {
    let series = [];

    try {
        const resp = await axios.get(
            `${process.env.API_URL_SERIES}?limit=50`,
            {
                headers: {
                    "x-api-key": process.env.API_KEY,
                },
            }
        );

        series = resp.data.data;
    } catch (error) {
        console.error(error);
    }

    return (
        <main>
            <h2>
                Busca feita pelo servidor, com api-key privada
            </h2>

            <p>
                DevTools → Network: essa chamada nem aparece lá, pois ela
                acontece no servidor.
            </p>

            <ul>
                {series.map((serie) => (
                    <li key={serie.id}>
                        {serie.title}
                    </li>
                ))}
            </ul>
        </main>
    );
}