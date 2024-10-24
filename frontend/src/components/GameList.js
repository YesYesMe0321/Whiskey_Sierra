import React from 'react';

const GameList = () => {
  return (
    <div>
      {/* 검색 필드 */}
      <input type="text" className="form-control mb-3" placeholder="게임 제목 / 게임 카테고리 검색" />

      {/* 게임 목록 */}
      <div className="row">
        {/* 1행에 3개의 카드가 표시되도록 col-lg-4 사용 */}
        <div className="col-lg-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">게임 제목</h5>
              <p className="card-text">게임 설명</p>
              <button className="btn btn-primary">보기</button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">게임 제목</h5>
              <p className="card-text">게임 설명</p>
              <button className="btn btn-primary">보기</button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">게임 제목</h5>
              <p className="card-text">게임 설명</p>
              <button className="btn btn-primary">보기</button>
            </div>
          </div>
        </div>

        {/* 2번째 행 */}
        <div className="col-lg-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">게임 제목</h5>
              <p className="card-text">게임 설명</p>
              <button className="btn btn-primary">보기</button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">게임 제목</h5>
              <p className="card-text">게임 설명</p>
              <button className="btn btn-primary">보기</button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">게임 제목</h5>
              <p className="card-text">게임 설명</p>
              <button className="btn btn-primary">보기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameList;
