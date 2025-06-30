import { useState, useEffect } from 'react';
import EvaluationForm from './components/EvaluationForm';
import EvaluationList from './components/EvaluationList';
import './App.css';

function App() {
  const [evaluations, setEvaluations] = useState([]);
  const [editingEvaluation, setEditingEvaluation] = useState(null);

  // Cargar para cargar datos al iniciar
  useEffect(() => {
    const saved = localStorage.getItem('evaluations');
    if (saved) setEvaluations(JSON.parse(saved));
  }, []);

  // Guardar evaluaciones en localStorage automaticamente
  useEffect(() => {
    localStorage.setItem('evaluations', JSON.stringify(evaluations));
  }, [evaluations]);

  //Agrega una nueva evaluacion al array, le asigna un ID unico con Date.now()
  const addEvaluation = (evaluation) => {
    setEvaluations([...evaluations, { ...evaluation, id: Date.now() }]);
  };

  //Actualiza una evaluacion existente buscandola por su ID para reemplazarla con la nueva
  //luego se limpia el estado de edicion
  const updateEvaluation = (updatedEvaluation) => {
    setEvaluations(evaluations.map(item =>
      item.id === updatedEvaluation.id ? updatedEvaluation : item
    ));
    setEditingEvaluation(null);
  };

  //Elimina una evaluacion del array buscando por su ID
  const deleteEvaluation = (id) => {
    setEvaluations(evaluations.filter(item => item.id !== id));
  };

  return (
    <div className="app-container">
      <div className="header-section">
        <h1>Evaluación de Alumnos</h1>
      </div>

      <div className="form-section">
        {editingEvaluation ? (
          <div className="edit-section">
            <EvaluationForm
              onSubmit={updateEvaluation}
              initialData={editingEvaluation}
              buttonText="Actualizar Evaluación"
              title="Editar Evaluación"
            />
          </div>
        ) : (
          <div className="add-section">
            <EvaluationForm
              onSubmit={addEvaluation}
              buttonText="Agregar Evaluación"
              title="Agregar Nueva Evaluación"
            />
          </div>
        )}
      </div>

      <div className="list-section">
        <EvaluationList
          evaluations={evaluations}
          onEdit={setEditingEvaluation}
          onDelete={deleteEvaluation}
        />
      </div>
    </div>
  );
}

export default App;