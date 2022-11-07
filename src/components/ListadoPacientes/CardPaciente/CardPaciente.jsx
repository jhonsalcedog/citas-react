import PropTypes from 'prop-types';
import Button from '../Button';

const CardPaciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { mascota, propietario, email, alta, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('Desea eliminar este paciente'); //eslint-disable-line no-alert

    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  const LabelCard = ({ titulo, texto }) => {
    return (
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {titulo}: <span className="font-normal normal-case">{texto}</span>
      </p>
    );
  };

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <LabelCard titulo="Nombre" texto={mascota} />
      <LabelCard titulo="Propietario" texto={propietario} />
      <LabelCard titulo="Email" texto={email} />
      <LabelCard titulo="Fecha Alta" texto={alta} />
      <LabelCard titulo="Sintomas" texto={sintomas} />

      <div className="flex flex-wrap space-x-4">
        <Button className="bg-indigo-600 hover:bg-indigo-700" onClick={() => setPaciente(paciente)}>
          Editar
        </Button>
        <Button className="bg-red-600 hover:bg-red-700" onClick={handleEliminar}>
          Eliminar
        </Button>
      </div>
    </div>
  );
};

CardPaciente.propTypes = {
  paciente: PropTypes.object,
  mascota: PropTypes.string,
  propietario: PropTypes.string,
  email: PropTypes.string,
  alta: PropTypes.string,
  sintomas: PropTypes.string,
  titulo: PropTypes.string,
  texto: PropTypes.string,
  setPaciente: PropTypes.func,
  eliminarPaciente: PropTypes.func,
};

export default CardPaciente;
