import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(()=> {
  //     fetch('https://api.github.com/users/YashKhati')
  //     .then( res => res.json())
  //     .then(data => {
  //         console.log(data)
  //         setData(data)
  //     })
  // },[])

  return (
    <div className="m-4 text-center text-white bg-gray-400">
      <p style={{ marginBottom: "10px" }}>User: {data.login}</p>
      <p>GitHub Followers: {data.followers}</p>
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/YashKhati");
  return response.json();
};
