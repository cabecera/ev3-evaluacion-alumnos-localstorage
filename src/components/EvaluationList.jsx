import EvaluationItem from './EvaluationItem';

//Renderiza la lista de evaluaciones guardadas,mostrando un mensaje si no hay
//evaluaciones o muestra las evaluaciones en un cuadro de evaluaciones
function EvaluationList({ evaluations, onEdit, onDelete }) {
  return (
    <div className="evaluations-section">
      <h2>Evaluaciones Guardadas</h2>

      {evaluations.length === 0 ? (
        <p>No hay evaluaciones guardadas aún. ¡Agrega una!</p>
      ) : (
        <div className="evaluations-grid">
          {evaluations.map(evaluation => (
            <EvaluationItem
              key={evaluation.id}
              evaluation={evaluation}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default EvaluationList;