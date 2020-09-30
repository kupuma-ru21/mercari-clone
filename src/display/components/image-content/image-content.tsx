import React from 'react';
import { src } from '@/constans/imgageContent';

const ImageContent: React.FC = () => {
  return (
    <div>
      <img src={src} alt="mainLogo" />
    </div>
  );
};

export default ImageContent;
