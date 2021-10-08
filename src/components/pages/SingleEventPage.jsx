import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchEventById, selectEventById } from "../../redux/features/events";
import { Helmet } from "react-helmet";
import Modal from "../UI/Modal";
import {
  removeSubscription,
  selectSubscriptions,
  setSubscriptions,
} from "../../redux/features/subsriptions";
import cl from "./pages.module.css";
import Button from "../UI/Button";
import SubscribeForm from "../SubscibeForm";
import warningIcon from "../../assets/img/warning.svg";

function SingleEventPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [subscribeModal, setSubscribeModal] = useState(false);
  const [unsubscribeModal, setUnsubscribeModal] = useState(false);

  const subscriptions = useSelector(selectSubscriptions);
  const event = useSelector(selectEventById(id));
  const formatDate = event ? new Date(event.date) : "";

  let subscribeEvent = subscriptions.find((item) => item.id === +id);

  useEffect(() => {
    dispatch(fetchEventById(id));
  }, [dispatch, id, subscribeEvent]);

  const subscribe = (data) => {
    dispatch(
      setSubscriptions({
        ...event,
        subscribers: [data],
      })
    );

    setSubscribeModal(false);
  };

  const onRemoveSubscription = () => {
    dispatch(removeSubscription(+id));
    setUnsubscribeModal(false);
  };

  if (!event) {
    return <h1 className="content-center">Loading...</h1>;
  }

  return (
    <>
      <Helmet>
        <title>{"Событие " + event.title}</title>
      </Helmet>
      <div className="container">
        <div className={cl.eventPage}>
          <div className={cl.eventPageImg}>
            <img src={event.image} alt={event.title} />
          </div>
          <div className={cl.eventPageInfo}>
            <div className={cl.infoTop}>
              <h2>{event.title}</h2>
              <span>{formatDate.toLocaleDateString()}</span>
            </div>
            <p className={cl.infoText}>{event.description}</p>
            <div className={cl.infoBtn}>
              {!subscribeEvent ? (
                <Button primary arrow onClick={() => setSubscribeModal(true)}>
                  Записаться
                </Button>
              ) : (
                <Button danger onClick={() => setUnsubscribeModal(true)}>
                  Отказаться
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className={cl.subscribers}>
          <h4>Посетители</h4>
          <ul>
            {subscribeEvent ? (
              subscribeEvent.subscribers.map((item, index) => (
                <li key={index}>{`${item.name} ${item.lastname}`}</li>
              ))
            ) : (
              <li>пока никто не записан</li>
            )}
          </ul>
        </div>
      </div>
      {subscribeModal && (
        <Modal setVisible={setSubscribeModal}>
          <SubscribeForm
            setModalVisible={setSubscribeModal}
            title={event.title}
            description={event.description}
            image={event.image}
            subscribe={subscribe}
          />
        </Modal>
      )}
      {unsubscribeModal && (
        <Modal setVisible={setUnsubscribeModal}>
          <div className={cl.removePopup}>
            <h3>
              <img src={warningIcon} alt="" />
              Вы уверены, что хотите отказаться?
            </h3>
            <div className={cl.buttons}>
              <Button onClick={() => setUnsubscribeModal(false)}>Нет</Button>
              <Button primary onClick={onRemoveSubscription}>
                Да
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default SingleEventPage;
