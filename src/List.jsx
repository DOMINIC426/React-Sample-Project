import { useState } from "react";
import { DeleteIcon, Edit2Icon } from "lucide-react";

export default function List() {
  const [student, setStudent] = useState([
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Dominic", age: 30 }
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  // Stores the id of the student being edited
  const [editingId, setEditingId] = useState(null);

  function addItem(e) {
    e.preventDefault();

    if (name.trim() === "") {
      setMessage("Please fill your name");
      return;
    }

    if (age.trim() === "") {
      setMessage("Please fill your age");
      return;
    }

    
    // UPDATE STUDENT
    // ===========================
    if (editingId !== null) {
      setStudent(previous =>
        previous.map(item => {
          if (item.id === editingId) {
            return {
              ...item,
              name,
              age: Number(age)
            };
          }

          return item;
        })
      );

      setEditingId(null);
      setName("");
      setAge("");
      setMessage("");

      return;
    }

    // ===========================
    // ADD NEW STUDENT
    // ===========================
    const newStudent = {
      id: Date.now(),
      name,
      age: Number(age)
    };

    setStudent(previous => [...previous, newStudent]);

    setName("");
    setAge("");
    setMessage("");
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleAgeChange(e) {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length <= 2) {
      setAge(value);
    }
  }

  function deleteUser(id) {
    setStudent(previous =>
      previous.filter(item => item.id !== id)
    );
  }

  function updateUser(id) {
    const currentStudent = student.find(item => item.id === id);

    setName(currentStudent.name);
    setAge(currentStudent.age.toString());

    setEditingId(id);
  }

  return (
    <div className="p-5">

      <p className="text-red-600 mb-3">{message}</p>

      <div className="flex gap-3 mb-5">

        <input
          type="text"
          placeholder="Enter Name"
          className="border p-2"
          value={name}
          onChange={handleName}
        />

        <input
          type="text"
          placeholder="Age"
          value={age}
          maxLength={2}
          className="border p-2"
          onChange={handleAgeChange}
        />

        <button
          onClick={addItem}
          className={`p-2 rounded text-white ${
            editingId !== null
              ? "bg-green-600"
              : "bg-blue-600"
          }`}
        >
          {editingId !== null ? "Update Student" : "Add Student"}
        </button>

      </div>

      <table className="w-full bg-white">

        <thead className="bg-gray-300">

          <tr>

            <th>Name</th>
            <th>Age</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {student.map(item => (

            <tr key={item.id} className="border-b">

              <td className="text-center p-2">
                {item.name}
              </td>

              <td className="text-center p-2">
                {item.age}
              </td>

              <td className="flex justify-center gap-2 p-2">

                <button
                  onClick={() => updateUser(item.id)}
                  className="bg-green-600 text-white px-3 py-2 rounded flex items-center gap-2"
                >
                  Edit
                  <Edit2Icon size={18} />
                </button>

                <button
                  onClick={() => deleteUser(item.id)}
                  className="bg-red-600 text-white px-3 py-2 rounded flex items-center gap-2"
                >
                  Delete
                  <DeleteIcon size={18} />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}