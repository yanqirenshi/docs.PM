import React from 'react';

import 'bulma/css/bulma.min.css';

function Section01 () {
  return (
      <div>

        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                プロジェクトとは。
              </h1>

              <div className="Contents">
                <p>以下の属性によって特徴づけることが出来る。</p>
                <ul>
                  <li>スコープ</li>
                  <li>新規性</li>
                  <li>複雑さ</li>
                  <li>投資</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

      </div>
  );
}

export default Section01;
