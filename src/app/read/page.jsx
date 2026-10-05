import SeriesList from '@components/SeriesListLinkSSR';
import { Skeleton } from 'antd';
import { Suspense } from 'react';

export default function page() {
    return (
    <main>
        <h2>Get - Read</h2>
        <p>O servidor chama a API com api-key privada: o Skeleton aparece até que as séries cheguem usando a tag nativa do React (Suspense).</p>
        <p>Abra a Devtools - Network: a chama à API não aparece. Clique numa série para busca-lá pelo ID.</p>
        <Suspense 
        fallback={
            <div className='skeleton'>
                <Skeleton active />
            </div>
        }>
            <SeriesList />
        </Suspense>
    </main>
    );
}