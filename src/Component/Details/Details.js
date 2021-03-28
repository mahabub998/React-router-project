import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';



const Details = () => {
    
    const {idTeam,strDescriptionEN,strTeamBanner,strTeam,strSport,} =useParams();

    const [users,setUsers] = useState({})
    useEffect(() => {
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data.teams[0]))
    },[idTeam])
    return (
       <Container>
           <div>
            <img src={users.strTeamBanner} alt=""/>
          <h4>{users.strTeam}</h4>
          <h5>{users.strSport}</h5>
          <p>Description : {users.strDescriptionEN}</p>
         
        </div> 
        <div>
          
          
        </div>
       </Container>
    );
};

export default Details;