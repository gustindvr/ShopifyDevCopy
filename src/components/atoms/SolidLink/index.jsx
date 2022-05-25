import { Link } from '@chakra-ui/react';
import React from 'react';

const SolidLink = ({ url, text }) => {
  return (
    <Link href={url} variant="solid">
      {text}
    </Link>
  );
};

export default SolidLink;
