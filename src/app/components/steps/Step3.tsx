const Step3 = ({ next, back, data, update }: any) => {
    const handleSubmit = (e: any) => {
      e.preventDefault();
      const idFile = e.target.idFile.files[0];
      const proofFile = e.target.proofFile.files[0];
      update({ idFile, proofFile });
      next();
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="file" name="idFile" accept="image/*,.pdf" className="input" required />
        <input type="file" name="proofFile" accept="image/*,.pdf" className="input" required />
        <div className="flex justify-between">
          <button type="button" className="btn" onClick={back}>Back</button>
          <button type="submit" className="btn">Next</button>
        </div>
      </form>
    );
  };
  
  export default Step3;