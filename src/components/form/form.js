import "./form.css"
import FormField from "./FormField";
import CheckboxInput from "./CheckboxInput";
import RadioInput from "./RadioInput";

function Form(props) {
    return (
      <form onSubmit={props.handleSubmit}>
        Nome Completo
        <InputTexto />

        {/* Input Gênero */}
        <fieldset className="mt-3">
          <legend>Como prefere ser chamado:</legend>
          <RadioInput
            label="Mulher"
            id="Mulher"
            name="genero"
            onChange={props.handleChange}
            value="Sra."
            checked={props.formData.genero === "Mulher"}
          />
          <RadioInput
            label="Homem"
            id="Homem"
            name="genero"
            onChange={props.handleChange}
            value="Sr."
            checked={props.formData.genero === "Homem"}
          />
          <RadioInput
            label="Outro"
            id="Outro"
            name="genero"
            onChange={props.handleChange}
            value="Prefiro não dizer"
            checked={props.formData.genero === "Outro"}
          />
        </fieldset>

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
          // Bloqueia a entrega caso a senha não atenda os requisitos mínimos (8 caracteres, conter letra maiúscula e minúscula, conter números e caracteres especiais)
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
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

        {/* IMPORTANTE: o botão de entrega do formulário precisa estar DENTRO da tag <form> e precisa ter seu atributo 'type' setado para 'submit' */}
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