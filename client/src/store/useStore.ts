import { create } from 'zustand';
import axios from 'axios';

type Competence = {
  competence_id: number;
  competence_info: string;
}

type Indicator = {
  indicator_id: number;
  competence_id: number;
  indicator_info: string;
}

type Store = {
  competences: Competence[];
  indicators: Indicator[];
  fetchCompetences: () => Promise<void>;
  fetchIndicators: (id: number) => Promise<void>;
}

const useStore = create<Store>((set) => ({
  competences: [],
  indicators: [],
  fetchCompetences: async () => {
    const response = await axios.get('http://localhost:3001/competences');
    set({ competences: response.data });
  },
  fetchIndicators: async (id: number) => {
    const response = await axios.get(`http://localhost:3001/indicators/${id}`);
    set({ indicators: response.data });
  }
}));

export default useStore;
