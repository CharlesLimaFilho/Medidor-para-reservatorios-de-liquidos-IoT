import { ref, onMounted } from 'vue';
import api from '../api';

export function useTarefas() {
  const tarefas = ref([]);

  const fetchTarefas = async () => {
    try {
      const response = await api.get('auth/login');
      tarefas.value = response.data;
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  onMounted(fetchTarefas);

  return { tarefas };
}