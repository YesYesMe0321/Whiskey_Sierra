import React from 'react';
import Navbar from './components/Navbar';
import Ads from './components/Ads';
import GameList from './components/GameList';
import './components/styles/custom.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4" style={{ maxWidth: '100%' }}>
        <div className="row">
          {/* 좌측 큰 광고 */}
          <div className="ad-col" style={{ width: '25%' }}>
            <Ads size="large" title="메인 광고 (최대 1개)" />
          </div>

          {/* 중앙 열의 광고 3개 */}
          <div className="ad-col" style={{ width: '25%' }}>
            <Ads size="small" title="최근 등록된 게임 광고 (최대 5개)" />
            <Ads size="small" title="최근 후원을 연 게임 광고 (최대 5개)" />
            <Ads size="small" title="최근 출시된 게임 광고 (최대 5개)" />
          </div>

          {/* 우측 게임 리스트 */}
          <div className="col-lg-4" style={{ width: '50%' }}>
            <GameList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
