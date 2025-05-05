//1. projeye react hook form'u yükle
//npm install react-hook-form

//2. useForm'u import et.
import { useForm } from "react-hook-form";

//3. useForm hook'undan gerekli metodları al ve ayarları yap.
const {
  register,
  handleSubmit,
  formState: { errors, isValid },
} = useForm({
  defaultValues: {
    firstName: "",
    lastName: "",
  },
  mode: "onChange",
});

//4. form elemanlarını register et ve validasyonları kullan
// https://react-hook-form.com/get-started#Applyvalidation
// https://react-hook-form.com/docs/useform/register
/*
  <input {...register("firstName", { required: true, maxLength: 20 })} />
  <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
  <input
  {...register("test", {
      maxLength : {
        value: 2,
        message: 'error message'
      }
  })}
  <input
  {...register("test", {
    validate: value => value === '1' || 'error message'
  })}
/>
/>
*/

//5. hata mesajlarını göster
/*
{ errors.firstName && 
 (
    <div className="form-error"> 
        { errors.firstName.message }  
    </div>
  )  
}
*/

//6.submit fonksiyonunu yaz ve kullan

const submitFormData = (formData) => {
  console.log(formData);
  //axios.post(URL, formData);
};

/*
<form onSubmit={handleSubmit(submitFormData)}>
...
</form>
*/

//7. submit butonunu isValid ise enable et
/*
<button disabled={ !isValid } >
	Gönder
</button>

*/
