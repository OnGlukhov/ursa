import styles from './Contacts.module.sass'
import FeedBack from '../FeedBack/FeedBack'
import { contacts } from '../../data/contacts'

export default function Contacts(){
  return (
    <section className={styles.contacts} id="contacts">
      <h3 className={styles.contacts_title}>Контакты</h3>
      <div className={styles.block}>
        <FeedBack />
        <div className={styles.contacts_content}>
          <div className={styles.contacts_content_block}>
            <h6>ТЕЛЕФОН</h6>
            <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
          </div>
          <div className={styles.contacts_content_block}>
            <h6>E-MAIL</h6>
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </div>
          <div className={styles.contacts_content_block}>
            <h6>АДРЕС</h6>
            <p>{contacts.address}</p>
          </div>
        </div>
      </div>
    </section>
  )
}