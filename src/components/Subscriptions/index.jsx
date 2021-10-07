import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Subscription from "./Subscription";
import {
  fetchSubscriptions,
  removeSubscription,
  selectSubscriptionsByFilter,
} from "../../redux/features/subsriptions";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { selectDate } from "../../redux/features/date";
import warningIcon from "../../assets/img/warning.svg";

import cl from "./subscriptions.module.css";

function Subscriptions() {
  const dispatch = useDispatch();
  const [visibleModal, setVisibleModal] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [paginationCount, setPaginationCount] = useState(1);
  const date = useSelector(selectDate);
  const subscriptions = useSelector(selectSubscriptionsByFilter(date, paginationCount));

  useEffect(() => {
    dispatch(fetchSubscriptions());
  }, [dispatch, currentId]);

  const onRemoveClick = useCallback((id) => {
    setVisibleModal(true);
    setCurrentId(id);
  }, []);

  const onRemoveSubscription = () => {
    dispatch(removeSubscription(currentId));
    setVisibleModal(false);
    setCurrentId(null);
  };

  const handleLoadMoreClick = () => {
    setPaginationCount(paginationCount + 1);
  };

  return (
    <div className={cl.subscriptions}>
      {subscriptions &&
        subscriptions.map((item) => (
          <Subscription key={item.id} {...item} onRemoveClick={onRemoveClick} />
        ))}
      <div className={cl.loadMore}>
        <Button onClick={handleLoadMoreClick}>загрузить больше</Button>
      </div>
      {visibleModal && (
        <Modal setVisible={setVisibleModal}>
          <div className={cl.removePopup}>
            <h3>
              <img src={warningIcon} alt="" />
              Вы уверены, что хотите отказаться?
            </h3>
            <div className={cl.buttons}>
              <Button onClick={() => setVisibleModal(false)}>Нет</Button>
              <Button primary onClick={onRemoveSubscription}>
                Да
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Subscriptions;
