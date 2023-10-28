import React, {useState} from 'react';

const Profile = () => {

    const [profile, setProfile] = useState({
        name: 'Manarbek',
        surname: 'Yessimseit',
        birthday : '23-05-2004',
        email : '369tan@mail.ru',
        password : 'password'
    })



    return (
        <div>
            <form>
                <strong>{profile.name}</strong>
            </form>
        </div>
    );
};

export default Profile;