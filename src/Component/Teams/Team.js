import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


const Team = (props) => {
    const {strTeam,strAlternate,strLeague,strTeamBadge,strWebsite,strFacebook,strTwitter,strSport,idTeam} =props.team
    // let id = {idTeam}
    // console.log(id)

    // const history = useHistory();
    // const showComments = idTeam => {
    //     const url =`users/${idTeam}`;
    //     history.push(url);
    // }
    return (
        <div className=" col my-4  d-flex justify-content-center  ">
        <Card className="text-center  " style={{width: '15rem',margin:'20px',padding:'20px'}}>
            <Card.Img className="p-4" variant="top" src={strTeamBadge}/>
            <Card.Body>
                <Card.Title>{strTeam}</Card.Title>
                <Card.Text>  Sports type: {strSport} <br />
                    </Card.Text>
                    {/* <Button variant="success" onClick={() => showComments(idTeam)}>Explore </Button> */}
                    <Link to={`post/${idTeam}`}><Button  variant="success">Explore</Button></Link>
                </Card.Body>
            </Card>
           
        </div>
    );
};

export default Team;