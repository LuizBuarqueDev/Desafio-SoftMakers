import axios from 'axios';
import { Pet } from '@/types/Pet';

const API_URL = 'http://localhost:3000/pets';

class PetService {
  
  static async getPets() {
    try {
      const response = await axios.get<Pet[]>(`${API_URL}/all`); // Rota para listar todos os pets
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar pets:', error);
      throw error;
    }
  }

  static async createPet(pet: Pet) {
    try {
      const response = await axios.post<Pet>(`${API_URL}/create`, pet); // Rota para criar um novo pet
      return response.data;
    } catch (error) {
      console.error('Erro ao cadastrar pet:', error);
      throw error;
    }
  }

  static async updatePet(id: string, pet: Pet) {
    try {
      const response = await axios.put<Pet>(`${API_URL}/update/${id}`, pet); // Rota para atualizar pet por ID
      return response.data;
    } catch (error) {
      console.error('Erro ao editar pet:', error);
      throw error;
    }
  }

  static async removePet(id: string) {
    try {
      await axios.delete(`${API_URL}/remove/${id}`); // Rota para remover pet por ID
    } catch (error) {
      console.error('Erro ao remover pet:', error);
      throw error;
    }
  }
}

export default PetService;