
import { useState, useEffect } from 'react';

const useForm = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    correo: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://gist.githubbusercontent.com/Anonymous01J/559e7681155c05894364f6/raw/017515018hopqfhw4e21e187hd81/data.json'); 
      const data = await response.json();
      setForm(data); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

 
  const saveData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://gist.githubbusercontent.com/Anonymous01J/559e7681155c05894364f6/raw/017515018hopqfhw4e21e187hd81/data.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error('Error al guardar los datos');
      alert('Datos guardados correctamente');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const insertar = (nombre, value) => {
    setForm((prevForm) => ({ ...prevForm, [nombre]: value }));
  };

  const validateFields = () => {
    return form.nombre && form.apellido && form.correo && form.cedula;
  };


  useEffect(() => {
    fetchData();
  }, []);

  return {
    form,
    insertar,
    validateFields,
    saveData,
    loading,
    error,
  };
};

export default useForm;