import useStore from '../store/useStore';
import { List, ListItem, ListItemText } from '@mui/material';

const IndicatorsList: React.FC = () => {
  const { indicators } = useStore();

  return (
    <List>
      {indicators.map(indicator => (
        <ListItem key={indicator.indicator_id} divider>
          <ListItemText primary={indicator.indicator_info} />
        </ListItem>
      ))}
    </List>
  );
}

export default IndicatorsList;
