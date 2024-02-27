import React, { useContext, useEffect, useState } from "react";
import UserProfileSidebar from "../components/UserProfileSidebar";
import "../index.css";
// import data from './data.json';
import { DeployedURL } from '../components/Constants';
import wretch from "wretch";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Context } from "../context/Context";
import axios from "axios";

function Records() {

  const { user } = useContext(Context);
  const [search, setSearch] = useState('')
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await axios.get(`${DeployedURL}/patients`).then((response) => {
          setPatients(response.data);
        })

      } catch (err) { }
    }

    fetchPatient();

  }, []);

  return (
    <div className="flex flex-row mt-60px sm:h-fit md:h-full bg-base-200 ">
      <UserProfileSidebar />
      <div className="overflow-x-auto w-full m-5">
        <input type="text" placeholder="Search Patient" onChange={(e) => setSearch(e.target.value)} className="input  input-secondary " />
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Emergency Contacts</th>
              <th>Phone</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {patients.filter((item) => {
              return search.toLowerCase() === ''
                ? item : item.firstName.toLowerCase().includes(search) || item.lastName.toLowerCase().includes(search);
            }).map((item) => (
              <tr key={item.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{item.firstName + " " + item.lastName}</div>
                      <div className="text-sm opacity-50">{item.address}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.emergencyContactName}
                  <br />
                  <span className="badge badge-ghost badge-sm">{item.emergencyContactPhone}</span>
                </td>
                <td>{item.phone}</td>
                <th>
                  <button className="btn btn-outline btn-success place-self-center "><Link to={`/records/${item.facialID}`}>View</Link></button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
          </tfoot>

        </table>

      </div>

    </div>
  );
}

export default Records;