import React, { useContext } from 'react';

import { ProfileContext } from '../../context/profile-context';

const ProfileControls = props => {
    const searchValue = useContext(ProfileContext).searchValue;
    const selectedGender = useContext(ProfileContext).selectedGender;
    const sortOrder = useContext(ProfileContext).sortOrder;
    const filterProfilesByName = useContext(ProfileContext).filterProfilesByName;
    const filterProfilesByGender = useContext(ProfileContext).filterProfilesByGender;
    const sortProfiles = useContext(ProfileContext).sortProfiles;

    return (
        <React.Fragment>
            <input 
                type="text" 
                placeholder="Search by name..." 
                value={searchValue} 
                onChange={event => filterProfilesByName(event.target.value)} 
            />

            <select 
                value={selectedGender} 
                onChange={event => filterProfilesByGender(event.target.value)}
            >
                <option value="all">Male &amp; Female</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <button onClick={sortProfiles}>
                { sortOrder === "asc" ? "Ascending" : "Descending" }
            </button>
        </React.Fragment>
    );
}

export default ProfileControls;