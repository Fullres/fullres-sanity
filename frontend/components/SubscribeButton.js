import { fullres } from 'fullres-nextjs';

const SubscribeButton = ({ label }) => {
  const handleClick = () => {
    fullres.events.push({ key: 'subscribe_button_click', position: 'Inline Post 3' });
  };

  return <button onClick={handleClick}>{label}</button>;
};

export default SubscribeButton;