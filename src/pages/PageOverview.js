import React from 'react';

import Section01 from './PageOverview/Section01.js';
import Section02 from './PageOverview/Section02.js';
import Section03 from './PageOverview/Section03.js';
import Section04 from './PageOverview/Section04.js';
import Section05 from './PageOverview/Section05.js';

import './Page.css';

function PageOverview () {
  return (
    <div className="page">
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
    </div>
  );
}

export default PageOverview;
