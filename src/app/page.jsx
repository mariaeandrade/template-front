import Card from '@components/Card';
import { examples } from '@/data/crud';
import { crud } from '@/data/crud';
import styles from './page.module.css';


export default async function Page() {
    //await new Promise((resolve) => setTimeout(resolve, 1000));

    return (
        <>
            <main className={styles.main}>
                {examples.map(({ id, method, verb, description, Icon }) => (
                    <Card
                        key={id}
                        id={id}
                        verb={verb}
                        method={method}
                        description={description}
                        Icon={Icon}
                    />))}

                {crud.map(({ id, method, verb, description, Icon }) => (
                    <Card
                        key={id}
                        id={id}
                        verb={verb}
                        method={method}
                        description={description}
                        Icon={Icon}
                    />))}
            </main>
            <footer className={styles.footer}>
                <p>Codeverse &copy; {new Date().getFullYear()}</p>
                <p>Next.js - Axios - Ant Design - Lucite </p>
            </footer>
        </>
    )
}
