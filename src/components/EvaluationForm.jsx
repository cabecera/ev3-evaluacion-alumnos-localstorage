import { useState, useEffect } from 'react';

function EvaluationForm({ onSubmit, initialData, buttonText, title }) {
  const [evaluation, setEvaluation] = useState({
    studentName: '',
    subject: '',
    average: 0.0
  });

  useEffect(() => {
    if (initialData) setEvaluation(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvaluation({ ...evaluation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...evaluation,
      average: parseFloat(evaluation.average)
    });
    if (!initialData) {
      setEvaluation({
        studentName: '',
        subject: '',
        average: 0.0
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="evaluation-form">
      {title && <h2>{title}</h2>}
      <div className="form-group">
        <label>Nombre del Alumno:</label>
        <input
          type="text"
          name="studentName"
          value={evaluation.studentName}
          onChange={handleChange}
          placeholder="Ej: Juan Pérez"
          required
        />
      </div>

      <div className="form-group">
        <label>Asignatura:</label>
        <input
          type="text"
          name="subject"
          value={evaluation.subject}
          onChange={handleChange}
          placeholder="Ej: Matemáticas"
          required
        />
      </div>

      <div className="form-group">
        <label>Promedio (0.0 - 7.0):</label>
        <input
          type="number"
          name="average"
          value={evaluation.average}
          onChange={handleChange}
          min="0"
          max="7"
          step="0.1"
          placeholder="Ej: 5.5"
          required
        />
      </div>

      <button type="submit" className="submit-btn">
        {buttonText}
      </button>
    </form>
  );
}

export default EvaluationForm;