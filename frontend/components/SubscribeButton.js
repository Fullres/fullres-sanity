import { trackEvent } from 'fullres-nextjs';

const SubscribeButton = ({ label }) => {
  const handleClick = () => {
    trackEvent('subscribe_button_click', { position: 'Inline Post' });
  };

  return <button onClick={handleClick}>{label}</button>;
};

export default SubscribeButton;