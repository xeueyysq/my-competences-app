// components/IndicatorsList.tsx
import React from 'react';
import useStore from '../store/useStore';
import { List, ListItem, Typography } from '@mui/material';

const IndicatorsList: React.FC = () => {
  const indicators = useStore((state) => state.indicators);

  return (
    <List style={{ width: '100%' }}>
      {indicators.map(indicator => (
        <ListItem key={indicator.indicator_id} style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <Typography variant="subtitle1">
            {indicator.indicator_info}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}

export default IndicatorsList;
