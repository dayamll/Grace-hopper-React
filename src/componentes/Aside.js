import React, { Component } from "react";
import { render } from "react-dom";

import "../index.css";

class Aside extends Component {
  render() {
    return (
      <aside className="size">
      <table className="section">
        <thead>
          <tr>
            <th colSpan={2}>Grace Murray Hopper</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/220px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg" alt="Grace Hopper"/>
                <p>Rear Admiral Grace M. Hopper, 1984</p>
            </td>
          </tr>
          <tr>
            <th>NickName</th>
            <td>"Amazin Grace"</td>
          </tr>
          <tr>
            <th>Born</th>
            <td>December 9, 1986</td>
          </tr>
          <tr>
            <th>Died</th>
            <td>Junary 1, 1992(aged 85)</td>
          </tr>
          <tr>
            <th>Allegiance</th>
          </tr>
        </tbody>
      </table>
    </aside>
    );
  }
}

export default Aside;
