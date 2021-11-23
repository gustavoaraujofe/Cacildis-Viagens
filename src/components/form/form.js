import "./form.css";
import FormField from "../form-field/form-field";
import CheckboxInput from "../input-checkbox/input-checkbox";
import InputSelect from "../input-select/InputSelect";
import InputTexto from "../input-texto/input-texto";
import ButtonPink from "../button-pink/button-pink";

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      Nome Completo:
      <InputTexto />
      {/* Input Gênero */}
      <InputSelect
        label="Como gostaria de ser chamado:"
        id="genero"
        name="genero"
        onChange={props.handleChange}
        value={props.formData.genero}
      >
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
        required
      />
      {/* Input senha */}
      <FormField
        label="Defina a sua senha:"
        id="exampleInputPassword1"
        type="password"
        name="password"
        onChange={props.handleChange}
        value={props.formData.password}
      />
      {/* Input Data Nascimento */}
      <FormField
        label="Data de Nascimento:"
        id="exampleInputDate"
        type="date"
        name="birthDate"
        onChange={props.handleChange}
        value={props.formData.birthDate}
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
      />
      
    </form>
  );
}

export default Form;
