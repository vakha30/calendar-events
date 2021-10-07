import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchEventById, selectEventById } from "../../redux/features/events";
import { Helmet } from "react-helmet";
import Modal from "../UI/Modal";

import cl from "./pages.module.css";
import Button from "../UI/Button";
import SubscribeForm from "../SubscibeForm";

function SingleEventPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [modalVisible, setModalVisible] = useState(false);

  const event = useSelector(selectEventById(id));
  const formatDate = event ? new Date(event.date) : "";

  useEffect(() => {
    dispatch(fetchEventById(id));
  }, [dispatch, id]);

  if (!event) {
    return <h1>Loading...</h1>;
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
              <Button primary arrow onClick={() => setModalVisible(true)}>
                Записаться
              </Button>
            </div>
          </div>
        </div>
        <div className={cl.subscribers}>
          <h4>Посетители</h4>
          <ul>
            <li>пока никто не записан</li>
          </ul>
        </div>
      </div>
      {modalVisible && (
        <Modal setVisible={setModalVisible}>
          <SubscribeForm
            setModalVisible={setModalVisible}
            title={event.title}
            description={event.description}
            image={event.image}
          />
        </Modal>
      )}
    </>
  );
}

export default SingleEventPage;
