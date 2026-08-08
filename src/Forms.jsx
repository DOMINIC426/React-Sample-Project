import { useEffect, useState } from 'react';

export default function Forms() {
  const [person,setPerson]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState("");
  

  //itmes 
 useEffect(() => {
    async function loadUsers() {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }

            const data = await response.json();

            setPerson(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    loadUsers();
}, []);

if (loading) {
    return <h2>Loading...</h2>;
}

if (error) {
    return <h2 className='text-red-500 text-2xl'>{`${error} !!`}</h2>;
}

  return (
     <div>
      <h2>Sample to use Use Effect to fetch users</h2>

        

    <ul>
      {
        person.map(data=><li key={data.id}>{data.address.geo.lat}</li>)
      }
    </ul>

     </div>
      
  );
}
