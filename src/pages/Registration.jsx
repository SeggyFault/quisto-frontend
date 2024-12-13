import { useState } from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";

const Registration = () => {
  const [formData, setFormData] = useState({
    pob: "",
    email: "",
    password: "",
    // phone: "",
    // code: "",
    // consent: false,
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Error registrating user");
    }
  }
  return (
    <div>
      <main className="flex justify-center">
        <form onSubmit={handleSubmit} action="POST" className="min-w-[550px] max-w-[580px] px-5 md:px-10 my-10 flex flex-col gap-5">
          <Heading level={1} className="mb-8 text-3xl text-center md:text-5xl text-midnight-400">Registrati e scopri i nostri prezzi</Heading>

          {/* Postal Code */}
          <fieldset>
            <label htmlFor="pob"></label>
            <input 
              id="pob" 
              type="text" 
              name="pob"
              value={formData.pob}
              onChange={handleChange}
              pattern="^\d{5}$" 
              placeholder="CAP del tuo locale" 
              className="p-5 text-base font-inter border-[1px] border-grey-200 rounded-lg w-full" 
            />
          </fieldset>

          {/* Email */}
          <fieldset>
            <label htmlFor="email"></label>
            <input 
              id="email" 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Indirizzo e-mail" className="p-5 text-base font-inter border-[1px] border-grey-200 rounded-lg w-full" 
            />
          </fieldset>

          {/* Password */}
          <fieldset>
            <label htmlFor="password"></label>
            <input 
              id="password" 
              type="text" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password" 
              className="p-5 text-base font-inter border-[1px] border-grey-200 rounded-lg w-full" 
            />
          </fieldset>

          {/* Telephone */}
          {/* <fieldset className="flex justify-between">
            <label htmlFor="phone"></label>
            <select className="p-5 mr-3 text-base font-inter border-[1px] border-grey-200 rounded-lg">
              <option value="+39">IT(+39)</option>
            </select>
            <input 
              id="phone" 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange} 
              placeholder="Numero tel." 
              className="p-5 text-base font-inter border-[1px] border-grey-200 rounded-lg w-full" 
            />
          </fieldset> */}

          {/* Agent Code */}
          {/* <fieldset>
            <label htmlFor="agent-code"></label>
            <input 
              id="agent-code" 
              type="text" 
              name="code"
              value={formData.code}
              onChange={handleChange}
              placeholder="Codice agente" 
              className="p-5 text-base font-inter border-[1px] border-grey-200 rounded-lg w-full" 
            />
          </fieldset> */}
          
          {/* Consent Checkbox */}
          {/* <fieldset className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="consent-checkbox"
              name="consent"
              value={formData.conscent}
              onChange={handleChange}
            />
            <label htmlFor="consent-checkbox">Acconsento all'uso dei miei dati per ricevere OMAGGI e SCONTI da usare sui miei ordini Quisto</label>
          </fieldset> */}

          <Button type="submit" label="Registrati" className="py-5 mt-4 font-bold px-11 text-grey-50 hover:bg-flamingo-400 bg-flamingo-300"/>
        </form>
      </main>
    </div>
  );
};

export default Registration;