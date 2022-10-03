import React from "react";
import Header from "../Components/Header";
import MySidebar from "../Components/MySidebar";


function Results() {
return (
  <>
      <Header />
   
	<div className="app">
  <MySidebar />
  <div className="content">
	<table>
    <tr>
    <th>Name: Prosper Kuubeyir</th>
    </tr>
    <tr>
		<th>Program: General Science</th>
    </tr>
 
		<tr>
		<th>Subject</th>
    <th>Marks</th>
    <th>Grade</th>
		</tr>
    
		<tr>
    <td>Mathematics</td>
		<td>60%</td>
    <td>C4</td>
		</tr>
		<tr>
    <td>English Language</td>
		<td>70%</td>
    <td>B3</td>
		</tr>
		<tr>
    <td>Science</td>
		<td>85%</td>
    <td>A1</td>
		</tr>
		<tr>
    <td>Social Studies</td>
		<td>85%</td>
    <td>A1</td>
		</tr>
		<tr>
    <td>Biology</td>
		<td>50%</td>
    <td>C5</td>
		</tr>
		<tr>
    <td>Physics</td>
		<td>79%</td>
    <td>B2</td>
		</tr>
		<tr>
    <td>E-Maths</td>
		<td>63%</td>
    <td>C4</td>
		</tr>
		<tr>
    <td>Chemistry</td>
		<td>20%</td>
    <td>F9</td>
		</tr>
	</table>

  </div>
  
	</div>
  
  </>
);
}

export default Results;
