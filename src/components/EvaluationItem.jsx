
//Determina el nivel de rendimiento basado en el promedio del alumno
//según los rangos establecidos
function EvaluationItem({ evaluation, onEdit, onDelete }) {
  const getPerformanceLevel = (average) => {
    if (average >= 1.0 && average < 4.0) return 'deficiente';
    if (average >= 4.0 && average <= 5.5) return 'con-mejora';
    if (average >= 5.6 && average <= 6.4) return 'buen-trabajo';
    if (average >= 6.5 && average <= 7.0) return 'destacado';
    return '';
  };

  const performanceLevel = getPerformanceLevel(evaluation.average);

  //Concierte el elrendimiento en texto para mostrar en la interfaz
  const getPerformanceText = (level) => {
    switch (level) {
      case 'deficiente': return 'Deficiente';
      case 'con-mejora': return 'Con Mejora';
      case 'buen-trabajo': return 'Buen Trabajo';
      case 'destacado': return 'Destacado';
      default: return '';
    }
  };

  return (
    <div className={`evaluation-card ${performanceLevel}`}>
      <div className="evaluation-info">
        <h3>Alumno: {evaluation.studentName}</h3>
        <p>Asignatura: {evaluation.subject}</p>
        <p>Promedio: {evaluation.average.toFixed(1)}</p>
        {performanceLevel && <span className="badge">{getPerformanceText(performanceLevel)}</span>}
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