import "./form.css";
import FormField from "../form-field/form-field";
import CheckboxInput from "../input-checkbox/input-checkbox";
import InputSelect from "../input-select/InputSelect";
import InputTexto from "../input-texto/input-texto";

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      Nome Completo
      <InputTexto />

      {/* Input Gênero */}
      <InputSelect
        label="Gênero"
        id="genero"
        name="genero"
        onChange={props.handleChange}
        value={props.formData.genero}
      >
        <option value="" disabled>
          Selecione o genero
        </option>
        <option value="Mulher">Sra.</option>
        <option value="Homem">Sr.</option>
        <option value="Outro">Prefiro não dizer</option>
      </InputSelect>
      {/* Input Email */}
      <FormField
        label="Email Address"
        id="exampleInputEmail1"
        type="email"
        name="email"
        onChange={props.handleChange}
        value={props.formData.email}
        required
      />
      {/* Input senha */}
      <FormField
        label="Password"
        id="exampleInputPassword1"
        type="password"
        name="password"
        onChange={props.handleChange}
        value={props.formData.password}
      />
      
      {/* Input Data Nascimento */}
      <FormField
        label="Date of Birth"
        id="exampleInputDate"
        type="date"
        name="birthDate"
        onChange={props.handleChange}
        value={new Date(props.formData.birthDate).toISOString().slice(0, 10)}
      />
      {/* Input Termos e Condições  */}
      <CheckboxInput
        label="I accept the terms and conditions"
        id="exampleInputTerms"
        name="acceptedTerms"
        onChange={(event) =>
          props.setFormData({
            ...props.formData,
            [event.target.name]: event.target.checked,
          })
        }
        checked={props.formData.acceptedTerms}
      />
     
      <div className="mt-3 text-end">
        <button
          disabled={props.isSending}
          type="submit"
          className="btn btn-primary"
        >
          {props.isSending ? (
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
          ) : null}
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
