import { useEffect } from 'react';
import axios from 'axios';
import useStore from '../store/useStore';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const CompetencesList: React.FC = () => {
  const setCompetences = useStore((state) => state.setCompetences);
  const setIndicators = useStore((state) => state.setIndicators);

  useEffect(() => {
    const fetchCompetences = async () => {
      const response = await axios.get('http://localhost:3001/competences');
      setCompetences(response.data);
    };
    fetchCompetences();
  }, [setCompetences]);

  const competences = useStore((state) => state.competences);

  const handleShowIndicators = async (competenceId: number) => {
    const response = await axios.get(`http://localhost:3001/indicators/${competenceId}`);
    setIndicators(response.data);
  };

  return (
    <List>
      {competences.map(competence => (
        <ListItem key={competence.competence_id} divider>
          <ListItemText primary={competence.competence_info} />
          <Button onClick={() => handleShowIndicators(competence.competence_id)} color="primary">
            Индикаторы
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default CompetencesList;
