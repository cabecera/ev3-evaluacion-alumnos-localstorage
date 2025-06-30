function EvaluationItem({ evaluation, onEdit, onDelete }) {
  const isOutstanding = evaluation.average >= 6.0;

  return (
    <div className={`evaluation-card ${isOutstanding ? 'outstanding' : ''}`}>
      <div className="evaluation-info">
        <h3>Alumno: {evaluation.studentName}</h3>
        <p>Asignatura: {evaluation.subject}</p>
        <p>Promedio: {evaluation.average.toFixed(1)}</p>
        {isOutstanding && <span className="badge">Destacado</span>}
      </div>

      <div className="evaluation-actions">
        <button onClick={() => onEdit(evaluation)} className="edit-btn">
          Editar
        </button>
        <button onClick={() => onDelete(evaluation.id)} className="delete-btn">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default EvaluationItem;