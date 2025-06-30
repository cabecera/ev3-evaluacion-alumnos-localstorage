import EvaluationItem from './EvaluationItem';

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