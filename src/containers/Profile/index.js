import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { ProfileContext } from '../../context/profile-context';

const Profile = props => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const getProfile = useContext(ProfileContext).getProfile;

    useEffect(() => {
        setProfile(getProfile(props.match.params.id));
        setLoading(false);
    }, [setProfile, setLoading, getProfile, props.match.params.id]);

    let profileContent = "Loading profile...";
    if (profile) {
        profileContent = (
            <React.Fragment>
                <img 
                    src={profile.picture.large} 
                    alt={`${profile.name.first} ${profile.name.first}`} 
                />
                <div>{profile.name.first} {profile.name.last}</div>
                <div>{profile.location.city}</div>
            </React.Fragment>
        );
    }

    return (
        <div>
            {!loading && !profile ? <Redirect to="/" /> : profileContent}
        </div>
    );
}

export default Profile;