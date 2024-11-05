import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Git() {
  const data = useLoaderData()
  console.log(data)
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https:/api.github.com/users/Jitesh38")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  return (<div className='bg-gray-600 text-white text-3xl p-4'>{data.followers}</div>);
}

export default Git;

export const githubInfo = async ()=>{
  const response = await fetch('https://api.github.com/users/Jitesh38')
  return response.json()
}