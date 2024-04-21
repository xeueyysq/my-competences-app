import CompetencesList from './components/CompetencesList';
import IndicatorsList from './components/IndicatorsList';
import { CssBaseline, Container, Grid, Typography } from '@mui/material';

function App() {
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h4" gutterBottom>
        Компетенции
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CompetencesList />
        </Grid>
        <Grid item xs={12} md={6}>
          <IndicatorsList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
