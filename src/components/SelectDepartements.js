import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, userInfos } from '../feature/userSlice';

/**
 * React Component's SelectDepartements
 * @returns An Html element to select the employee's department from a drop-down menu
*/
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

     /**
 * Function onChange Event
 * @param {e} EventListener
 * @returns Select the department, and send to the Reducer with Redux's Dispatch
 */
  const SelectDepartement = (e) => {
    const data = {
      ...user,
      departement: e.target.value,
    };
    dispatch(userInfos(data))
  };

    return (
        <div className="dropdown">
        <select className="dropdown-menu " onChange={SelectDepartement}   >
        <option hidden>Please select</option>
          

            {departments.length > 0 &&
                departments.map((departement, index) =>  
                <option key={index}  >
                  {departement}
                  
                </option>
              
          )}
        </select>
      </div>
    );
};

export default SelectDepartements;