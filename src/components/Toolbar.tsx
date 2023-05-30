import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { ThemeContext } from '../ThemeContext';
import ToggleSwitch from './ToggleSwitch';
import { useContext } from 'react';

const Toolbar = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useContext(ThemeContext);

  const handleClickHome = () => {
    navigate('/home')
  };

  const handleClickProducts = () => {
    navigate('/products')
  };
  
  
  return (
    <nav style={{
      padding: "30px",
      borderBottom: '1px solid',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button color="#24a0ed" onClick={handleClickHome}>
          Home
        </Button>
        <Button color="#24a0ed" onClick={handleClickProducts}>
          Products
        </Button>
      </div>
      <ToggleSwitch onToggle={toggleTheme} />
    </nav>
  );
};

export default Toolbar;