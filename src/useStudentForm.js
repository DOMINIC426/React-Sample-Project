import { useState } from "react"

export function useStudentForm() {
  const [student, setStudent] = useState([
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Dominic", age: 30 }
  ]);

  const [subject , setSubject] = useState(["kiswahili","English","Mathematics"]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  function addItem(e) {
    e.preventDefault();

    if (name.trim() === "") {
      setMessage("please fill your name");
      return;
    }
    if(age.trim() === "") {
      setMessage("please fill your age");
      setAge("");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name,
      age: age
    };

    setStudent([...student, newStudent]);
    setName("");
    setAge("");
  }

  function handleName(e) {
    const validate = e.target.value;

    if (validate.trim() === "") {
      setMessage("please fill your name");
    } else {
      setMessage("");
    }

    setName(validate);
  }

  function handleAgeChange(e) {
    const validate = e.target.value.replace(/\D/g, "");
    if (validate.length <= 2) {
      setAge(validate);
    }
  }

  function deleteUser(id) {

    setStudent(previous =>
        previous.filter(student => student.id != id)
    );

    function addSubject(e){
e.preventDefault()
   setStudent()
    }

}

  // the hook hands back everything the JSX needs to display and react t=
  return { student, name, age, message, addItem, handleName, handleAgeChange,deleteUser,subject ,addSubject};
}