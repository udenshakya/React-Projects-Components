import axios from "axios";
import { useEffect, useState } from "react";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("udenshakya");
  const [userData, setUserData] = useState<UserCardProps | null>(null);

  const fetchData = async () => {
   try {
    const { data } = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      if(data){
          setUserData(data);
      }
   } catch (error) {
    console.log(error)
   }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = () => {
    fetchData();
    setUserName("")
  };

  // console.log(userData)

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center p-2 gap-2">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border-2 px-2 py-1 rounded-md"
          placeholder="Enter Github Username.."
        />
        <button
          onClick={handleSubmit}
          className="bg-gray-400 rounded-md px-3 py-1 "
        >
          Search
        </button>
      </div>
      <div>{userData !== null ? <UserCard user={userData} /> : null}</div>
    </div>
  );
};

export default GithubProfileFinder;

export type UserCardProps = {
  avatar_url: string;
  login: string;
  followers: number;
  following: number;
  html_url: string;
  public_repos: number;
};

export type User = {
  user: UserCardProps;
};

const UserCard = ({ user }:User) => {
    
  return (
    <div>
      <div className="bg-gray-300 p-10 flex flex-col justify-center items-center">
        <img src={user?.avatar_url} alt="image" className="rounded-full h-[300px] w-[300px]" />
        <h1 className="font-bold mt-10">Username: {user?.login} </h1>
        <h2>Followers: {user?.followers} </h2>
        <h2>Followings: {user?.following} </h2>
        <h2>Public Repositories: {user?.public_repos} </h2>
        <a href={user?.html_url} className="bg-gray-400 rounded-lg px-3 mt-4" target="_blank">Link to Github Profile </a>
      </div>
    </div>
  );
};
