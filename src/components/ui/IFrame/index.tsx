import React from 'react';

import * as Styled from './styles';
import { StyledProps } from './styles';

const IFrameSection: React.FC<Props> = ({ center }) => (
  <Styled.IFrameSection>
    <Styled.IFrameSubTitle center={center}>Certification</Styled.IFrameSubTitle>
    <Styled.IFrameTitle center={center}>
      UCF Data Analytics and Visualization
    </Styled.IFrameTitle>
    <Styled.Separator center={center} />
    <Styled.IFrameCard>
      <iframe
        src="https://api.badgr.io/public/assertions/dRop1WM_SOuKbOzdG_XaOA?embedVersion=1&embedWidth=330&embedHeight=186&identity__email=jovanirosado%40hotmail.com"
        title="Badge: UCF Data Boot Camp (Data Analytics & Visualization)"
        style={{ width: 330, height: 186, border: 0 }}
      />
    </Styled.IFrameCard>
  </Styled.IFrameSection>
);

export default IFrameSection;
