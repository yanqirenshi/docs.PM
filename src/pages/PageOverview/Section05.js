import React from 'react';

import 'bulma/css/bulma.min.css';

function Section05 () {
    const master = {
        0: 'なし',
        1: 'ほとんどなし',
        2: '多少あり',
        3: '相当あり',
    };
    const data = [
        { name: '公式',   a: 0, b:3, c:0, d:0, e:0 },
        { name: '報酬',   a: 2, b:2, c:2, d:1, e:1 },
        { name: '罰則',   a: 0, b:2, c:2, d:1, e:1 },
        { name: '専門家', a: 3, b:3, c:3, d:3, e:3 },
        { name: '後ろ盾', a: 3, b:3, c:3, d:3, e:3 },
    ];

  return (
      <div>

        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                使用可能な権威と影響
              </h1>

              <div className="Contents">
                <p>権威が行使された場合の影響度</p>
                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                  <thead>
                    <tr>
                      <th>権威</th>
                      <th>上級管理者</th>
                      <th>部下</th>
                      <th>機能部門<br/>出身者</th>
                      <th>機能部門<br/>マネージャ</th>
                      <th>外部<br/>(顧客、行政)</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.map((d) => {
                        return <tr key={d.name}>
                                 <td>{d.name}</td>
                                 <td>{master[d.a]}</td>
                                 <td>{master[d.b]}</td>
                                 <td>{master[d.c]}</td>
                                 <td>{master[d.d]}</td>
                                 <td>{master[d.e]}</td>
                               </tr>;
                    })}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </section>

      </div>
  );
}

export default Section05;
