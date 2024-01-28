import { useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/selectors';
import { useEffect, useState } from 'react';

const DotsLoader = () => {
  const isLoading = useSelector(getIsLoading);
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDots(c => (c.length >= 3 ? '' : c + '.'));
      }, 200);
      return () => window.clearInterval(interval);
    }
  }, [isLoading]);

  if (!isLoading) {
    return null;
  }

  return <span>{dots}</span>;
};
export default DotsLoader;
