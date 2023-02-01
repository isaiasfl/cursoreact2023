import React from "react";
import { useForm } from "react-hook-form";
import { validarEdad } from "./misValidaciones";

const FormularioDatos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      nombre: "Isaías",
    },
  });

  const miSubmit = (data) => {
    console.log(data);
  };

  const tieneCarnet = watch("carnet");
  console.log(tieneCarnet);

  return (
    <div>
      <form onSubmit={handleSubmit(miSubmit)}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            {...register("nombre", {
              required: true,
              maxLength: 10,
            })}
          />
          {errors.nombre?.type === "required" && <p>Campo obligatorio</p>}
          {errors.nombre?.type === "maxLength" && (
            <p style={{ color: "red", fontSize: "7pt" }}>
              <h4>No puedes introducir más de 10 caractéres</h4>
            </p>
          )}
        </div>
        <div>
          <label>Apellidos</label>
          <input type="text" {...register("apellidos")} />
        </div>
        <div>
          <label>Edad</label>
          <input
            type="text"
            {...register("edad", {
              required: true,
              validate: validarEdad,
            })}
          />
          {errors.edad && <p>La edad debe ser un número</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
        </div>
        {errors.email?.type === "pattern" && <p>Email Incorrecto</p>}
        <div>
          <label>CP</label>
          <input
            type="text"
            {...register("cp", {
              required: true,
              pattern: /^[0-5][0-9]{4}$/gm,
            })}
          />
          {errors.cp?.type === "pattern" && <p>CP erróneo</p>}
        </div>
        <div>
          <select {...register("procedencia")}>
            <option value="andalucia">Andalucía</option>
            <option value="no_andalucia">Fuera de Andalucía</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Enviar" />
        </div>
        <label>Uso del Watch: {watch("nombre")}</label>
        <div>
          <label>Dispone de carnet de conducir</label>
          <input type="checkbox" {...register("carnet")} />
        </div>
        {tieneCarnet && (
          <div>
            <label>Introduzca fecha expedición</label>
            <input type="text" {...register("fechaExpedicion")} />
          </div>
        )}
      </form>
    </div>
  );
};

export default FormularioDatos;
