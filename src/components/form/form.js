import "./form.css";
import FormField from "../form-field/form-field";
import CheckboxInput from "../input-checkbox/input-checkbox";
import InputSelect from "../input-select/InputSelect";
import InputTexto from "../input-texto/input-texto";
import "../button-pink/button-pink.css";

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <InputTexto
        label="Nome Completo:"
        name="nome"
        onChange={props.handleChange}
        value={props.formData.nome}
        required={true}
      />
      {/* Input Gênero */}
      <InputSelect
        label="Como gostaria de ser chamado:"
        id="genero"
        name="genero"
        onChange={props.handleChange}
        value={props.formData.genero}
      >
        <option value="" disabled></option>
        <option value="Mulher">Sra.</option>
        <option value="Homem">Sr.</option>
        <option value="Outro">Prefiro não dizer</option>
      </InputSelect>
      {/* Input Email */}
      <FormField
        label="Digite o seu e-mail:"
        id="exampleInputEmail1"
        type="email"
        name="email"
        onChange={props.handleChange}
        value={props.formData.email}
        required={true}
      />
      {/* Input senha */}
      <FormField
        label="Defina a sua senha:"
        id="exampleInputPassword1"
        type="password"
        name="password"
        onChange={props.handleChange}
        value={props.formData.password}
        required={true}
      />
      {/* Input Data Nascimento */}
      <FormField
        label="Data de Nascimento:"
        id="exampleInputDate"
        type="date"
        name="birthDate"
        onChange={props.handleChange}
        value={props.formData.birthDate}
        required={true}
      />
      {/* Input Termos e Condições  */}
      <CheckboxInput
        label="Eu aceito os Termos e Condições."
        id="exampleInputTerms"
        name="acceptedTerms"
        onChange={(event) =>
          props.setFormData({
            ...props.formData,
            [event.target.name]: event.target.checked,
          })
        }
        checked={props.formData.acceptedTerms}
        required={true}
      />
      <div className="btn-middle">
        <button className="btn-pink" disabled={props.isSending} type="submit">
          {props.isSending ? (
            <span role="status" aria-hidden="true"></span>
          ) : null}
          {props.textBtn}
        </button>
      </div>
    </form>
  );
}

export default Form;
