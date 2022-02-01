import React from 'react';
import { useRouter } from 'next/router';
import styles from './FeedBack.module.sass'
// import
export default function FeedBack(props) {
  const router = useRouter();
  console.log('🚀 ~ file: FeedBack.js ~ line 6 ~ FeedBack ~ router', router);
  const [formStatus, setFormStatus] = React.useState('show');
  const [formState, setFormState] = React.useState({
    clientName: '',
    clientPhone: '',
    body: '',
    clientEmail: '',
  });
  const [checkFormStatus, setCheckFormStatus] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  function checkForm() {
    let res = false;
    let a = Promise.resolve(/^[а-я, А-Я, a-z, A-Z]{3,20}$/.test(formState.clientName));
    let b = Promise.resolve(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(formState.clientPhone));
    let c = Promise.resolve(/.{3,500}/.test(formState.body));
    let d = Promise.resolve(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        formState.clientEmail
      )
    );
    return Promise.all([a, b, c, d]).then((values) => {
      console.log(values);
      res = true;
      values.map((item, index) => {
        if (!item) {
          res = false;
          setCheckFormStatus((state) => {
            return { ...state, [index]: true };
          });
          setTimeout(() => {
            setCheckFormStatus((state) => {
              return { ...state, [index]: false };
            });
          }, 300000);
        }
      });
      return res;
    });
  }

  function resetForm() {
    setFormState({
      clientName: '',
      clientPhone: '',
      body: '',
      clientEmail: '',
    });
  }

  async function sendForm() {
    let check = await checkForm();
    if (!check) {
      return;
    }
    setFormStatus('pending');
    try {
      props.onFulfilled('loading');
    } catch (err) {}

    fetch('/api/sendform', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formState, path: router.asPath }),
    })
      .then((res) => {
        if (res.ok) {
          console.log('Succeeded!');
          resetForm();
        }
        if (!res.ok) {
          console.log('Error!');
          resetForm();
        }
        setTimeout(() => {
          return res;
        }, 1000);
      })
      .then(() => {
        setFormStatus('complete');
        try {
          props.onFulfilled('success');
        } catch (err) {}
        setTimeout(() => {
          setFormStatus('show');
        }, 4000);
      });
  }

  return (
      <form className={styles.form}>
        <h3>СВЯЖИТЕСЬ С НАМИ</h3>

        {formStatus === 'show' && (
          <>
            <div className={styles.form_top}>
                <div className={styles.form_wrap} >
                  <input
                    className={`${styles.user_form_input} ${checkFormStatus[0] ? `${styles.user_form_alert_borders}` : ``}`}
                    required
                    id='FeedBackFormClientName'
                    placeholder='Имя'
                    value={formState.clientName}
                    onChange={(e) =>
                      setFormState((state) => {
                        return { ...state, clientName: e.target.value };
                      })
                    }
                  />
                  {checkFormStatus[0] && <p className={styles.user_form_alert}>Имя должно быть больше 3 символов</p>}
                </div>
                <div className={styles.form_wrap} >
                  <input
                    className={`${styles.user_form_input} ${checkFormStatus[1] ? `${styles.user_form_alert_borders}` : ``}`}
                    required
                    id='FeedBackFormClientPhone'
                    placeholder='Телефон'
                    value={formState.clientPhone}
                    onChange={(e) =>
                      setFormState((state) => {
                        return { ...state, clientPhone: e.target.value };
                      })
                    }
                  />
                  {checkFormStatus[1] && <p className={styles.user_form_alert}>Введите корректный номер</p>}

                </div>
            </div>
            <div className={styles.form_wrap} >
              <textarea
                className={`${`${styles.user_form_input} ${styles.textarea}`} ${checkFormStatus[2] ? `${styles.user_form_alert_borders}` : ``}`}
                required
                id='FeedBackFormBody'
                placeholder='Сообщение'
                rows={4}
                value={formState.body}
                onChange={(e) =>
                  setFormState((state) => {
                    return { ...state, body: e.target.value };
                  })
                }
              />
              {checkFormStatus[2] && <p className={styles.user_form_alert}>Сообщение должен быть больше 10 символов</p>}

            </div>
              
            <div className={styles.form_bottom}>
                <div className={styles.form_wrap} >
                  <input
                    className={`${styles.user_form_input} ${checkFormStatus[3] ? `${styles.user_form_alert_borders}` : ``}`}
                    required
                    id='FeedBackFormClientEmail'
                    placeholder='E-mail'
                    value={formState.clientEmail}
                    onChange={(e) =>
                      setFormState((state) => {
                        return { ...state, clientEmail: e.target.value };
                      })
                    }
                  />
                  {checkFormStatus[3] && <p className={styles.user_form_alert}>Введите корректный email</p>}

                </div>
                <button
                  onClick={sendForm}
                  className={styles.form_button}
                >
                  ОТПРАВИТЬ
                </button>

            </div>
          </>
        )}
        {formStatus === 'pending' && <p className={`text-center py-10`}>Отправка запроса</p>}
        {formStatus === 'complete' && (
          <p className={`text-center py-10`}>Запрос успешно отправлен. Спасибо за обращение!</p>
        )}
      </form>
  );
}
