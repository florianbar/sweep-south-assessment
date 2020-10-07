import React, { useContext } from 'react';
import { withRouter } from 'react-router'

import { ProfileContext } from '../../context/profile-context';
import Card from '../UI/Card'
import classes from './index.module.css';

const ProfileList = props => {
    const filteredProfiles = useContext(ProfileContext).filteredProfiles;

    const goToProfile = id => {
        props.history.push(`/profile/${id}`);
    };

    let listContent = "Loading profiles...";
    if (filteredProfiles) {
        listContent = filteredProfiles.map(profile => {
            return (
                <li key={profile.login.uuid} className={classes.profileList__item}>
                    <Card 
                        image={profile.picture.large}
                        title={`${profile.name.first} ${profile.name.last}`}
                        subtitle={profile.location.city}
                        clicked={() => goToProfile(profile.login.uuid)}
                    />
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

export default withRouter(ProfileList);