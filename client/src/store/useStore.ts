import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type Competence = {
  competence_id: number;
  competence_info: string;
};

type Indicator = {
  indicator_id: number;
  competence_id: number;
  indicator_info: string;
};

type Store = {
  competences: Competence[];
  indicators: Indicator[];
  setCompetences: (competences: Competence[]) => void;
  setIndicators: (indicators: Indicator[]) => void;
};

const useStore = create<Store>()(immer((set) => ({
  competences: [],
  indicators: [],
  setCompetences: (competences) => set((state) => {
    state.competences = competences;
  }),
  setIndicators: (indicators) => set((state) => {
    state.indicators = indicators;
  })
})));

export default useStore;
