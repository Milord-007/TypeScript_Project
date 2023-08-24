import {useState} from "react"
const Createproduct = () => {
  
  const handleSubmit = (event: React.FormEvent) =>{
    event.preventDefault()
  }
  return (
    <div>
      <form action=""  onSubmit={handleSubmit}>
        <input type="text" className="border-2 py-2 w-full outline-0 px-4 mb-2" placeholder="Enter Product Title"/>
        <button type="submit" className="py-2 px-4 border-2 bg-yellow-400">Create</button>
      </form>
    </div>
  );
};

export default Createproduct;