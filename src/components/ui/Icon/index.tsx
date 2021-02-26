import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faInbox,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(
  fab,
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faInbox,
  faPaperPlane,
  faLinkedinIn,
  faTwitter
);

export type IconProps = any;

const Icon: React.FC<FontAwesomeIconProps> = ({ ...props }) => (
  <FontAwesomeIcon {...props} />
);

export default Icon;
