const Review = ({ data, back }: any) => {
    const handleSubmit = () => alert("Submitted!");
  
    return (
      <div className="space-y-2">
        <p><strong>Name:</strong> {data.fullName}</p>
        <p><strong>DOB:</strong> {data.dob}</p>
        <p><strong>SSN:</strong> {data.ssn}</p>
        <p><strong>Address:</strong> {data.address}</p>
        <p><strong>Country:</strong> {data.country}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>ID File:</strong> {data.idFile?.name}</p>
        <p><strong>Proof File:</strong> {data.proofFile?.name}</p>
        <div className="flex justify-between mt-4">
          <button className="btn" onClick={back}>Back</button>
          <button className="btn" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    );
  };
  
  export default Review;