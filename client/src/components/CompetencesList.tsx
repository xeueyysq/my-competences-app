import { useEffect } from 'react';
import useStore from '../store/useStore';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const CompetencesList: React.FC = () => {
  const { competences, fetchCompetences, fetchIndicators } = useStore();

  useEffect(() => {
    fetchCompetences();
  }, [fetchCompetences]);

  return (
    <List>
      {competences.map(competence => (
        <ListItem key={competence.competence_id} divider>
          <ListItemText primary={competence.competence_info} />
          <Button onClick={() => fetchIndicators(competence.competence_id)} color="primary">
            Индикаторы
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default CompetencesList;
