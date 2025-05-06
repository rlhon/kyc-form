const Step2 = ({ next, back, data, update }: any) => {
    const handleSubmit = (e: any) => {
      e.preventDefault();
      const { address, country, phone } = e.target;
      update({
        address: address.value,
        country: country.value,
        phone: phone.value,
      });
      next();
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="address" defaultValue={data.address} placeholder="Address" className="input" required />
        <select name="country" defaultValue={data.country} className="input" required>
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
        <input name="phone" defaultValue={data.phone} placeholder="Phone Number" className="input" required />
        <div className="flex justify-between">
          <button type="button" className="btn" onClick={back}>Back</button>
          <button type="submit" className="btn">Next</button>
        </div>
      </form>
    );
  };
  
  export default Step2;