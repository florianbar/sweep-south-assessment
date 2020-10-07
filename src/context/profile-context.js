import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

export const ProfileContext = React.createContext({
    filteredProfiles: [],
    searchValue: "",
    selectedGender: "",
    sortOrder: "",
    fetchProfiles: () => {},
    getProfileHandler: () => {},
    filterProfilesByName: () => {},
    filterProfilesByGender: () => {},
    sortProfiles: () => {}
});

export default props => {
    const [profiles, setProfiles] = useState(null);
    const [filteredProfiles, setFilteredProfiles] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [selectedGender, setSelectedGender] = useState("all");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        setFilteredProfiles(profiles);
    }, [profiles, setFilteredProfiles]);

    const fetchProfiles = useCallback(() => {
        if (profiles === null) {
            axios.get(" https://randomuser.me/api/?results=20")
                .then(response => {
                    setProfiles(response.data.results);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [profiles, setProfiles]);

    const getProfile = id => {
        if (profiles) {
            return profiles.find(profile => profile.login.uuid === id);
        }
        return null;
    };

    const filterProfilesByName = search => {
        setSearchValue(search);
        filterProfiles(search, selectedGender);
    };

    const filterProfilesByGender = gender => {
        setSelectedGender(gender);
        filterProfiles(searchValue, gender, sortOrder);
    };

    const sortProfiles = () => {
        setSortOrder(sortOrder === "desc" ? "asc" : "desc");
        filterProfiles(searchValue, selectedGender, sortOrder);
    };

    const filterProfiles = (search, gender, sortOrder) => {
        let updatedFilteredProfiles = profiles;

        // Order by ascending or descending alphabetically
        updatedFilteredProfiles.sort((userA, userB) => {
            if (sortOrder === "asc") {
                return userA.name.first < userB.name.first ? -1 : 1;
            } else {
                return userA.name.first < userB.name.first ? 1 : -1;
            }
        });

        // Search by name
        if (search.trim()) {
            updatedFilteredProfiles = profiles.filter(profile => {
                const searchVal = search.toLowerCase();
                const fullname = `${profile.name.first.toLowerCase()} ${profile.name.last.toLowerCase()}`;
                return fullname.includes(searchVal);
            });
        }

        // Filter by gender
        if (gender !== "all") {
            updatedFilteredProfiles = updatedFilteredProfiles.filter(profile => profile.gender === gender);
        }

        setFilteredProfiles(updatedFilteredProfiles);
    };

    return (
        <ProfileContext.Provider value={{
            filteredProfiles: filteredProfiles,
            searchValue: searchValue,
            selectedGender: selectedGender,
            sortOrder: sortOrder,
            fetchProfiles: fetchProfiles,
            getProfile: getProfile,
            filterProfilesByName: filterProfilesByName,
            filterProfilesByGender: filterProfilesByGender,
            sortProfiles: sortProfiles
        }}>
            {props.children}
        </ProfileContext.Provider>
    );
};