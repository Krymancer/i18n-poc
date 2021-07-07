import React from 'react';

import { useTranslation } from 'react-i18next';
import { namespaces } from '../../internationalization/constants';

import './index.css';

import heartFill from '../../assets/heart-fill.png';
import heartOutline from '../../assets/heart-outline.png';

interface props {
  author: string;
  title: string;
  date: string;
  image: string;
  description?: string;
  liked: boolean;
  likeCount: number;
}

const Card: React.FC<props> = (props: props) => {
  const { t, i18n } = useTranslation(namespaces.components);

  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-date">{props.date}</div>
        </div>
      </div>
      <img className="card-image" src={props.image} alt="Logo" />
      <div className="card-text">{t('description')}</div>
      <div className="card-like-bar">
        {props.liked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{props.likeCount}</b>
        </div>
      </div>
    </div>
  );
};

export default Card;
