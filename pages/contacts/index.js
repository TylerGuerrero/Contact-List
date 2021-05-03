import styles from '../../styles/Contacts.module.css';
import Link  from 'next/link';

// route now will be /contacts because of index

// function to fetch data on a component
// we do this instead of useEffect because the component
// will already be rendered so instead we do this
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: {contacts: data}
    };
}

const Contacts = ({ contacts }) => {
    return (
        <div className="contacts">
            <h1>Contacts</h1>
            {contacts.map((contact) => {
                return (
                    <Link href={`/contacts/${contact.id}`} className="contact" key={contact.id}>
                        <a className={styles.single}>
                            <h3> {contact.name} </h3>
                        </a>
                    </Link>
                );
            })}
        </div>
    );
}

export default Contacts;