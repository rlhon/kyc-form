const Step1 = ({ next, data, update }: any) => {
    const handleSubmit = (e: any) => {
      e.preventDefault();
      const { fullName, dob, ssn } = e.target;
      update({
        fullName: fullName.value,
        dob: dob.value,
        ssn: ssn.value,
      });
      next();
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="fullName" defaultValue={data.fullName} placeholder="Full Name" className="input" required />
        <input type="date" name="dob" defaultValue={data.dob} className="input" required />
        <input name="ssn" defaultValue={data.ssn} placeholder="SSN" className="input" required />
        <button type="submit" className="btn">Next</button>
      </form>
    );
  };
  
  export default Step1;