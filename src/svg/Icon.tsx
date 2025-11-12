import { IconFacebook, IconInstagram, IconPinterest } from '.';

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'facebook':
      return <IconFacebook />;
    case 'instagram':
      return <IconInstagram />;
    case 'pinterest':
      return <IconPinterest />;
    default:
      return <IconFacebook />;
  }
};

export default Icon;
