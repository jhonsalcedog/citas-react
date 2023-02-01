import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import Error from '../Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const initialValues = { mascota: '', propietario: '', email: '', alta: '', sintomas: '', id: generateId() };

  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState(false);

  const { mascota, propietario, email, alta, sintomas } = formValues;

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setFormValues({ ...paciente });
    }
  }, [paciente]);

  function generateId() {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString();

    return random + fecha;
  }

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mascota === '' || propietario === '' || email === '' || alta === '' || sintomas === '') {
      return setFormError(true);
    }
    setFormError(false);

    delete formValues.id;

    if (paciente.id) {
      //Editar
      formValues.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? formValues : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //Nuevo registro
      formValues.id = generateId();
      //formValues recibe los valores
      //paciente toma esos valores

      setPacientes([...pacientes, formValues]);
    }

    setFormValues(initialValues);
  };

  const colorButton = paciente.id ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-indigo-600 hover:bg-indigo-700';

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-5" onSubmit={handleSubmit}>
        {formError && <Error>Todos los campos son obligatorios</Error>}
        <TextField
          labelName="Nombre Mascota"
          htmlFor="mascota"
          placeholder="Nombre de la Mascota"
          name="mascota"
          onChange={handleChange}
          value={mascota}
        />

        <TextField
          labelName="Nombre Propietario"
          htmlFor="propietario"
          placeholder="Nombre del Propietario"
          name="propietario"
          onChange={handleChange}
          value={propietario}
        />

        <TextField
          labelName="Email"
          htmlFor="email"
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />

        <TextField labelName="Alta" htmlFor="alta" type="date" name="alta" onChange={handleChange} value={alta} />

        <TextField
          labelName="Sintomas"
          htmlFor="sintomas"
          type="text"
          textarea
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        />

        <button
          type="submit"
          className={`${colorButton} w-full p-3 text-white uppercase font-bold transition-all rounded-md`}
        >
          {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        </button>

        {paciente.id ? (
          <button
            type="submit"
            className="w-full p-3 text-indigo-600 uppercase font-bold transition-all rounded-md border-indigo-600 border-2 mt-6"
          >
            Cancelar
          </button>
        ) : (
          ''
        )}
      </form>
    </div>
  );
};

Formulario.displayName = 'Formulario';

Formulario.propTypes = {
  mascota: PropTypes.string,
  propietario: PropTypes.string,
  email: PropTypes.string,
  alta: PropTypes.string,
  sintomas: PropTypes.string,
  setPacientes: PropTypes.func,
  pacientes: PropTypes.array,
  paciente: PropTypes.object,
  setPaciente: PropTypes.func,
};

export default Formulario;
