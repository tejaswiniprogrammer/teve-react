import React from 'react'
// import { useEffect,useState } from 'react'
import { useEffect,useContext } from 'react';
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'
import GithubContext from '../../context/github/GithubContext';
function UserResults() {
    // This is in the GithubContext
    // const [users, setUsers] = useState([])
    // const [loading,setLoading] = useState(true)
   
    // we pull out what we want from the context, and we just pass in GithubContext here. and we can take out any of the values from 
    // return <GithubContext.Provider value={{
    //     users,    <--
    //     loading, <--
    //     fetchUsers, <--  
    // }}>

    const {users, loading, fetchUsers } = useContext(GithubContext)
    
    useEffect(() => {
        fetchUsers();
    }, []);

       // This is in the GithubContext
    // const fetchUsers = async () => { 
    //     const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
    //         headers: {
    //             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    //         }
    //     });
        
    //     const data = await response.json()
    //     // console.log(data);
    //     setUsers(data)
    //     setLoading(false)
    // }

    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {
                    users.map(
                        (user) => (
                            <UserItem
                                key={user.id}
                                user={user} />
                        )
                    )
                }
            </div>
        )
    }
    else { 
        return <Spinner/>
    }
}
export default UserResults;