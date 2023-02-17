import React from 'react'

function InfoTable() {
  return (
    <div>
      <table>
          <thead>
              <tr><th>Show info</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Streamed on</td>
              <td>BBC 3</td>
            </tr>
            <tr>
              <td>Schedule</td>
              <td>Tuesdays</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>running</td>
            </tr>
            <tr>
              <td>Genres</td>
              <td>Drama, Comedy, Music</td>
            </tr>
          </tbody>
      </table>
    </div>
  )
}

export default InfoTable