import React from 'react';
import './styles/custom.css';  // 커스텀 CSS 파일을 불러옴

const Ads = ({ size, title }) => {
  return (
    <div className={`card ${size === 'large' ? 'ad-large' : 'ad-small'} mb-3`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">광고 콘텐츠가 여기에 표시됩니다.</p>
      </div>
    </div>
  );
};

export default Ads;
