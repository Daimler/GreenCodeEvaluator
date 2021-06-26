import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import profileImge from '../img/profile_picture/foto-perfil.jpg';
import Card from 'react-bootstrap/esm/Card';

const TeamMembers = () => {
    const title = 'Memory';
    var team = [
        {
            name: "Romaïssa",
            role: "UX Specialist",
            desc:
               "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
            photo:
               "https://ca.slack-edge.com/T023KHBQZAP-U025AK974RL-b1c5c6c43b93-512",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/"
            
         },
        {
           name: "Lauren Romero",
           role: "UI Designer",
           desc:
              "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
           photo:
              "https://ca.slack-edge.com/T023KHBQZAP-U025AK8N3K8-fab94ddd4198-512",
           website: "https://rafaelalucas.com",
           email: "mailto:rafaelavlucas@gmail.com",
           linkedin: "https://www.linkedin.com/in/rafaelalucas/"
           
        },
        {
           name: "Nupur Kulkarni",
           role: "Project Manager",
           desc:
              "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
           photo:
              "https://ca.slack-edge.com/T023KHBQZAP-U025PHTUWLC-81a24ed54301-512",
           website: "https://rafaelalucas.com",
           email: "mailto:rafaelavlucas@gmail.com",
           linkedin: "https://www.linkedin.com/in/rafaelalucas/"
           
        },
        {
           name: "Cristina Bulnes",
           role: "UX Specialist",
           desc:
              "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
           photo:
              "https://ca.slack-edge.com/T023KHBQZAP-U0252L02LA3-ab3993591b43-512",
           website: "https://rafaelalucas.com",
           email: "mailto:rafaelavlucas@gmail.com",
           linkedin: "https://www.linkedin.com/in/rafaelalucas/"
           
        },
        {
           name: "Praise Thampi",
           role: "Front-End Developer",
           desc:
              "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
           photo:
              "https://ca.slack-edge.com/T023KHBQZAP-U02672RRCAC-c8b628e2eff1-512",
           website: "https://rafaelalucas.com",
           email: "mailto:rafaelavlucas@gmail.com",
           linkedin: "https://www.linkedin.com/in/rafaelalucas/"
          
        },
        {
           name: "Marta Seca",
           role: "Back-End Developer",
           desc:
              "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
           photo:
              "https://ca.slack-edge.com/T023KHBQZAP-U02672RRCAC-c8b628e2eff1-512",
           website: "https://rafaelalucas.com",
           email: "mailto:rafaelavlucas@gmail.com",
           linkedin: "https://www.linkedin.com/in/rafaelalucas/"
           
        },
        {
           name: "Lou Creemers",
           role: "Head of UI Design",
           desc:
              "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
           photo: 'https://ca.slack-edge.com/T023KHBQZAP-U025PHU4S8L-9675be4e4055-512',
           website: "https://rafaelalucas.com",
           email: "mailto:rafaelavlucas@gmail.com",
           linkedin: "https://www.linkedin.com/in/rafaelalucas/"
         
        }
     ];
  
     /* Social Icons */
     var icons = [
        {
           iWebsite: "https://rafaelalucas.com/dailyui/6/assets/link.svg",
           iEmail: "https://rafaelalucas.com/dailyui/6/assets/email.svg",
           iLinkedin: "https://rafaelalucas.com/dailyui/6/assets/linkedin.svg"
           
        }
     ];
    return (
        <Carousel className='carousel-container'>
            {(team.map((member) => 
                (<Carousel.Item>
                    <Card style={{ width: '18rem', margin: '0 auto' }}>
                        <Card.Img variant="top" src={member.photo} />
                        <Card.Body>
                            <Card.Title>{member.name}</Card.Title>
                            <Card.Text>
                            {member.desc}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </Carousel.Item>)
              ) )}
</Carousel>
    );

}

export default TeamMembers;