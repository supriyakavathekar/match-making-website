import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Match({ users, user, matches, setMatches ,setCheckPerson }) {
  const [matched, setMatched] = useState();
  const [count, setCount] = useState(0)

  console.log("matched",matched);
  function getMatches() {
    let matchcesArray = "";
    matches.forEach((element) => {
      matchcesArray = matchcesArray + `&id=${element.to}`
    });
    console.log(matchcesArray);
    setTimeout(() => {

      axios(`https://matchmaking-4wh6.onrender.com/users/?${matchcesArray}`).then(i => setMatched(i.data)).catch(i => console.log(i))
    }, 1500)
  }

  function remove(e) {
    const result = matched.filter(i=> i.id != e)
    setMatched(result);
    axios(`https://matchmaking-4wh6.onrender.com/matches/?from=${user.id}&to=${e}`).then(i => {
      axios.delete(`https://matchmaking-4wh6.onrender.com/matches/${i.data[0].id}`)
    }).catch(i => console.log(i))
    console.log(result);
    setCount(i => i + 1)


  }

  const navigate = useNavigate();

  useEffect(() => {
    axios(`https://matchmaking-4wh6.onrender.com/matches/?from=${user.id}`)
      .then((i) => setMatches(i.data))
      .catch((i) => console.log(i));
  }, [count]);
  return (
    <div>
      
      {/* {matched && matched.length} */}
      <div className=" min-h-screen  overflow-x-auto">

      <button  className="btn btn-ghost btn-xs getmatch" onClick={getMatches}>Your Matches</button>

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
             
              </th>
              <th>FullName</th>
              <th>Occupation</th>
              <th>Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {matched &&
              matched.map((i) => (
                <tr>
                  <th>
                 
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={i.pics}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold"></div>
                        <div className="text-sm opacity-50"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {i.fullName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                     {i.occupation}
                    </span>
                  </td>
                  <td>{i.age}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs match-btn"onClick={()=>{
                setCheckPerson(i)
                navigate('/detail')
              }} >Details</button>
                  </th>

                  <th>
                    <button className="btn btn-ghost btn-xs match-btn" onClick={() => remove(i.id)} >Delete </button>
                  </th>


                </tr>
              ))}
           
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Match;
