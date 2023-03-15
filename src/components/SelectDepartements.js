import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, userInfos } from '../feature/userSlice';




const SelectDepartements = () => {

  const departments = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
   
  ];

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const SelectDepartement = (e) => {
    const data = {
      ...user,
      departement: e.target.value,
    };
    dispatch(userInfos(data))
  };

    return (
        <div className="dropdown">
        <select className="dropdown-menu " onChange={SelectDepartement}  >
          {departments.map((departement, index) =>  
            <option key={index}  >
              {departement}
            </option>
          )}
        </select>
      </div>
    );
};

export default SelectDepartements;