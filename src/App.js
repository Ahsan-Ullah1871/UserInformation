import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [user, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then((response) => response.json())
            .then((data) => setUsers(data.results[0]));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h3>Users Information</h3>
            </header>
            <section>
                <RandomUser data={user} />
            </section>
        </div>
    );
}

export default App;

function RandomUser(props) {
    const UserStyle = {
        backgroundColor: 'rgb(0,0,36)',
        color: 'white',
        height: '300px',
        width: '550px',
        borderRadius: '20px',
        margin: ' 20px auto',
        padding: '20px',
        boxShadow: '10px 10px 10px black',
        display: 'flex',
        alignItems: 'center',
    };
    // Separate Data:
    const fullData = props;

    // Separate full Data
    const DestructureData = fullData.data;

    // // // Separate Name:
    const Name = DestructureData && DestructureData.name;
    console.log(Name);
    const title = Name && Name.title;
    const first = Name && Name.first;
    const last = Name && Name.last;

    // Image:
    const image = DestructureData && DestructureData.picture;
    const Image = image && image.thumbnail;

    // location:
    const City = DestructureData && DestructureData.location;
    const city = City && City.city;
    const Country = DestructureData && DestructureData.location;
    const country = Country && Country.country;

    return (
        <div style={UserStyle}>
            <div className="nameAndPic">
                <img src={Image} alt="" />

                <h2>
                    Name:{title} {first} {last}
                </h2>
                <h3>Gender : {DestructureData.gender}</h3>
            </div>
            <div className="extrainformation">
                <h4>City:{city}</h4>
                <h4>Country:{country}</h4>
                <h4>Email:{DestructureData.email}</h4>
                <h4>Phone:{DestructureData.phone}</h4>
                <h4>Cell:{DestructureData.cell}</h4>
            </div>
        </div>
    );
}
