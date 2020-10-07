import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProfileContext } from '../../context/profile-context';
import classes from './index.module.css';

const ProfileList = props => {
    const filteredProfiles = useContext(ProfileContext).filteredProfiles;

    let listContent = "Loading profiles...";
    if (filteredProfiles) {
        listContent = filteredProfiles.map(profile => {
            return (
                <li key={profile.login.uuid} className={classes.profileList__item}>
                    <Link to={`/profile/${profile.login.uuid}`} className={classes.profileList__card}>
                        <img
                            className={classes.profileList__photo} 
                            src={profile.picture.large} 
                            alt={`${profile.name.first} ${profile.name.first}`} 
                        />
                        <div className={classes.profileList__title}>
                            {profile.name.first} {profile.name.last}
                        </div>
                        <div className={classes.profileList__location}>
                            {profile.location.city}
                        </div>
                    </Link>
                </li>
            );
        });
    }

    return (
        <ul className={classes.profileList}>
            {listContent}
        </ul>
    );
}

export default ProfileList;