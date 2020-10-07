import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { ProfileContext } from '../../context/profile-context';
import Button from '../../components/UI/Button'
import classes from './index.module.css';

const Profile = props => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    const { getProfile } = useContext(ProfileContext);

    useEffect(() => {
        setProfile(getProfile(props.match.params.id));
        setLoading(false);
    }, [setProfile, setLoading, getProfile, props.match.params.id]);

    const goBack = () => {
        props.history.push("/");
    };

    let profileContent = "Loading profile...";
    if (profile) {
        profileContent = (
            <div className={classes.profile}>
                <img 
                    className={classes.profile__photo}
                    src={profile.picture.large} 
                    alt={`${profile.name.first} ${profile.name.first}`} 
                />
                <h2 className={classes.profile__title}>
                    {profile.name.first} {profile.name.last}
                </h2>
                <table className={classes.profile__info}>
                    <tbody>
                        <tr>
                            <td>Cell:</td>
                            <td>{profile.cell}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{profile.email}</td>
                        </tr>
                        <tr>
                            <td>Country:</td>
                            <td>{profile.location.country}</td>
                        </tr>
                        <tr>
                            <td>City:</td>
                            <td>{profile.location.city}</td>
                        </tr>
                        <tr>
                            <td>State:</td>
                            <td>{profile.location.state}</td>
                        </tr>
                        <tr>
                            <td>Post Code:</td>
                            <td>{profile.location.postcode}</td>
                        </tr>
                        <tr>
                            <td>Street Name:</td>
                            <td>{profile.location.street.name}</td>
                        </tr>
                    </tbody>
                </table>
                <Button clicked={goBack}>Back</Button>
            </div>
        );
    }

    return !loading && !profile ? <Redirect to="/" /> : profileContent;
}

export default Profile;