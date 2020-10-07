import React, { useContext } from 'react';

import { ProfileContext } from '../../context/profile-context';
import Input from '../UI/Input';
import Button from '../UI/Button';

const ProfileControls = props => {
    const searchValue = useContext(ProfileContext).searchValue;
    const selectedGender = useContext(ProfileContext).selectedGender;
    const sortOrder = useContext(ProfileContext).sortOrder;
    const filterProfilesByName = useContext(ProfileContext).filterProfilesByName;
    const filterProfilesByGender = useContext(ProfileContext).filterProfilesByGender;
    const sortProfiles = useContext(ProfileContext).sortProfiles;

    return (
        <React.Fragment>
            <Input 
                type="text"
                placeholder="Search by name..." 
                value={searchValue}
                onChange={event => filterProfilesByName(event.target.value)} 
            />
            <Input 
                elementType="select"
                value={selectedGender}
                onChange={event => filterProfilesByGender(event.target.value)} 
                options={[
                    {value: "all", displayValue: "Male & Female"},
                    {value: "male", displayValue: "Male"},
                    {value: "female", displayValue: "Female"},
                ]}
            />
            <Button onClick={sortProfiles}>
                { sortOrder === "asc" ? "Ascending" : "Descending" }
            </Button>
        </React.Fragment>
    );
}

export default ProfileControls;