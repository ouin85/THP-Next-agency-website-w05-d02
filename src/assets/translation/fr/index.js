import home from './home.json';
import about from './about.json';
import works from './works.json';
import caseStudies from './case-studies.json';
import normalize from '../../../tools/normalize';

const fr = {
  ...home, ...about, ...works, ...normalize(caseStudies),
};

export default fr;
